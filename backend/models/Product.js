const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Please provide product description'],
    maxlength: [5000, 'Description cannot exceed 5000 characters']
  },
  shortDescription: {
    type: String,
    maxlength: [500, 'Short description cannot exceed 500 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    min: [0, 'Price cannot be negative']
  },
  comparePrice: {
    type: Number,
    min: [0, 'Compare price cannot be negative']
  },
  costPrice: {
    type: Number,
    min: [0, 'Cost price cannot be negative']
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [100, 'Discount cannot exceed 100%']
  },
  finalPrice: {
    type: Number
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please provide product category']
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory'
  },
  brand: {
    type: String,
    trim: true
  },
  sku: {
    type: String,
    unique: true,
    required: [true, 'Please provide SKU']
  },
  barcode: {
    type: String,
    unique: true,
    sparse: true
  },
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  lowStockThreshold: {
    type: Number,
    default: 10
  },
  images: [{
    public_id: String,
    url: {
      type: String,
      required: true
    },
    alt: String,
    isDefault: {
      type: Boolean,
      default: false
    }
  }],
  variants: [{
    name: String, // e.g., "Size", "Color"
    options: [{
      value: String, // e.g., "Small", "Red"
      price: Number,
      stock: Number,
      sku: String,
      image: String
    }]
  }],
  specifications: [{
    name: String,
    value: String
  }],
  features: [String],
  tags: [String],
  weight: {
    value: Number,
    unit: {
      type: String,
      enum: ['kg', 'g', 'lb', 'oz'],
      default: 'kg'
    }
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: {
      type: String,
      enum: ['cm', 'in', 'm'],
      default: 'cm'
    }
  },
  shipping: {
    isFreeShipping: {
      type: Boolean,
      default: false
    },
    shippingCost: {
      type: Number,
      default: 0
    },
    estimatedDelivery: {
      min: Number,
      max: Number,
      unit: {
        type: String,
        enum: ['days', 'weeks'],
        default: 'days'
      }
    }
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be more than 5']
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'inactive', 'out_of_stock', 'discontinued'],
    default: 'draft'
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isNewArrival: {
    type: Boolean,
    default: false
  },
  isBestseller: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  sales: {
    type: Number,
    default: 0
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    metaKeywords: [String],
    canonicalUrl: String
  },
  publishedAt: Date,
  expiresAt: Date
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, status: 1 });
productSchema.index({ vendor: 1 });
productSchema.index({ price: 1 });
productSchema.index({ 'ratings.average': -1 });
productSchema.index({ sales: -1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ slug: 1 });

// Virtual for stock status
productSchema.virtual('stockStatus').get(function() {
  if (this.stock === 0) return 'out_of_stock';
  if (this.stock <= this.lowStockThreshold) return 'low_stock';
  return 'in_stock';
});

// Virtual for discount percentage
productSchema.virtual('discountPercentage').get(function() {
  if (this.comparePrice && this.comparePrice > this.price) {
    return Math.round(((this.comparePrice - this.price) / this.comparePrice) * 100);
  }
  return this.discount;
});

// Calculate final price before saving
productSchema.pre('save', function(next) {
  if (this.discount > 0) {
    this.finalPrice = this.price - (this.price * this.discount / 100);
  } else {
    this.finalPrice = this.price;
  }
  next();
});

// Generate slug from name
productSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Update stock status
productSchema.methods.updateStock = async function(quantity, operation = 'decrease') {
  if (operation === 'decrease') {
    this.stock -= quantity;
    this.sales += quantity;
  } else {
    this.stock += quantity;
  }
  
  if (this.stock === 0) {
    this.status = 'out_of_stock';
  } else if (this.status === 'out_of_stock') {
    this.status = 'active';
  }
  
  await this.save();
};

// Increment views
productSchema.methods.incrementViews = async function() {
  this.views += 1;
  await this.save();
};

module.exports = mongoose.model('Product', productSchema);