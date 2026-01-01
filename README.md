# MERN E-Commerce Platform

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

**A full-stack, production-ready e-commerce platform built with the MERN stack**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

A comprehensive, enterprise-grade e-commerce platform designed for scalability, security, and optimal user experience. This platform provides a complete solution for online retail businesses with advanced features including real-time inventory management, secure payment processing, and intelligent product recommendations.

### Key Highlights

- 🚀 **High Performance**: Optimized for speed with lazy loading, code splitting, and CDN integration
- 🔒 **Enterprise Security**: JWT authentication, encrypted payments, and OWASP compliance
- 📱 **Responsive Design**: Mobile-first approach with PWA capabilities
- 🎨 **Modern UI/UX**: Intuitive interface with smooth animations and transitions
- 📊 **Analytics Dashboard**: Real-time sales tracking and business insights
- 🌐 **Multi-language Support**: Internationalization ready
- ♿ **Accessibility**: WCAG 2.1 Level AA compliant

---

## ✨ Features

### Customer Features

- **User Authentication & Authorization**
  - Email/password registration and login
  - Social media authentication (Google, Facebook)
  - Two-factor authentication (2FA)
  - Password reset and email verification
  - Role-based access control (Customer, Vendor, Admin)

- **Product Browsing & Search**
  - Advanced search with filters and sorting
  - Category and subcategory navigation
  - Product recommendations based on browsing history
  - Wishlist and favorites
  - Product comparison tool
  - Recently viewed products

- **Shopping Cart & Checkout**
  - Persistent shopping cart across sessions
  - Real-time inventory checking
  - Multiple shipping options
  - Coupon and discount code application
  - Guest checkout option
  - Save multiple shipping addresses

- **Payment Processing**
  - Multiple payment gateways (Stripe, PayPal, Razorpay)
  - Credit/debit card payments
  - Digital wallet integration
  - EMI and installment options
  - Secure payment encryption
  - Invoice generation

- **Order Management**
  - Order tracking with real-time updates
  - Order history and reordering
  - Order cancellation and returns
  - Email notifications for order status
  - Download invoices and receipts

- **User Profile**
  - Profile management and customization
  - Order history and tracking
  - Saved addresses and payment methods
  - Wishlist management
  - Review and rating history

### Vendor Features

- **Product Management**
  - Add, edit, and delete products
  - Bulk product upload via CSV
  - Inventory management
  - Product variants (size, color, etc.)
  - Image upload and management
  - SEO optimization tools

- **Order Fulfillment**
  - Order notifications and alerts
  - Shipping label generation
  - Inventory synchronization
  - Return and refund management

- **Analytics & Reports**
  - Sales analytics and trends
  - Revenue reports
  - Product performance metrics
  - Customer insights

### Admin Features

- **Dashboard**
  - Real-time sales overview
  - Revenue analytics
  - User activity monitoring
  - Inventory alerts
  - Performance metrics

- **User Management**
  - User CRUD operations
  - Role and permission management
  - Activity logs and audit trails
  - Ban/suspend users

- **Product Management**
  - Approve/reject vendor products
  - Category and brand management
  - Featured products selection
  - Bulk operations

- **Order Management**
  - View all orders
  - Order status updates
  - Refund processing
  - Dispute resolution

- **Content Management**
  - Homepage customization
  - Banner and promotion management
  - Blog and content pages
  - Email template editor

- **Settings & Configuration**
  - Payment gateway configuration
  - Shipping method setup
  - Tax and currency settings
  - Email and notification settings
  - SEO and meta tags

---

## 🛠️ Tech Stack

### Frontend

- **React.js 18.x** - UI library with hooks and context API
- **Redux Toolkit** - State management with RTK Query
- **React Router v6** - Client-side routing
- **Material-UI / Tailwind CSS** - Component library and styling
- **Axios** - HTTP client for API requests
- **Formik + Yup** - Form handling and validation
- **React Query** - Server state management
- **Socket.io Client** - Real-time communication
- **Chart.js / Recharts** - Data visualization
- **React Helmet** - SEO optimization

### Backend

- **Node.js 18.x** - JavaScript runtime
- **Express.js 4.x** - Web application framework
- **MongoDB 6.x** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email service
- **Socket.io** - WebSocket for real-time features
- **Express Validator** - Input validation
- **Morgan** - HTTP request logger
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Rate Limiter** - API rate limiting

### Payment Integration

- **Stripe API** - Credit card processing
- **PayPal SDK** - PayPal payments
- **Razorpay** - Indian payment gateway

### Cloud & DevOps

- **AWS S3** - Image and file storage
- **AWS CloudFront** - CDN for static assets
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Reverse proxy and load balancing
- **PM2** - Process management
- **Redis** - Caching and session storage

### Testing

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Supertest** - API endpoint testing
- **Cypress** - End-to-end testing

### Monitoring & Analytics

- **Google Analytics** - User behavior tracking
- **Sentry** - Error tracking and monitoring
- **Winston** - Application logging
- **New Relic / DataDog** - Performance monitoring

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  Mobile App  │  │  Admin Panel │      │
│  │  (React.js)  │  │ (React Native)│  │  (React.js)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Gateway / Load Balancer             │
│                         (Nginx)                              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Express.js REST API                      │   │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐    │   │
│  │  │  Auth  │  │Product │  │  Cart  │  │ Order  │    │   │
│  │  │Service │  │Service │  │Service │  │Service │    │   │
│  │  └────────┘  └────────┘  └────────┘  └────────┘    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   MongoDB    │  │    Redis     │  │   AWS S3     │      │
│  │  (Database)  │  │   (Cache)    │  │  (Storage)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   External Services                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    Stripe    │  │   SendGrid   │  │   Twilio     │      │
│  │  (Payment)   │  │   (Email)    │  │    (SMS)     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Database Schema

**Collections:**
- `users` - User accounts and profiles
- `products` - Product catalog
- `categories` - Product categories
- `orders` - Order information
- `carts` - Shopping cart data
- `reviews` - Product reviews and ratings
- `payments` - Payment transactions
- `addresses` - Shipping addresses
- `coupons` - Discount codes
- `wishlists` - User wishlists

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- MongoDB >= 6.0.0
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Muhammad00Ahmed/MERN-ECOMMERCE-PLATFORM.git
cd MERN-ECOMMERCE-PLATFORM
```

2. **Install dependencies**

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd frontend
npm install
```

3. **Environment Configuration**

Create `.env` file in the backend directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce
MONGODB_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Payment Gateways
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your_bucket_name

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Social Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Other Services
SENTRY_DSN=your_sentry_dsn
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

Create `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

4. **Database Setup**

Start MongoDB:
```bash
mongod
```

Seed the database (optional):
```bash
cd backend
npm run seed
```

5. **Run the Application**

Backend (Terminal 1):
```bash
cd backend
npm run dev
```

Frontend (Terminal 2):
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

### Default Admin Credentials

```
Email: admin@ecommerce.com
Password: Admin@123
```

---

## 📚 API Documentation

### Authentication Endpoints

```http
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # User login
POST   /api/auth/logout            # User logout
GET    /api/auth/me                # Get current user
PUT    /api/auth/updateprofile     # Update user profile
PUT    /api/auth/updatepassword    # Update password
POST   /api/auth/forgotpassword    # Forgot password
PUT    /api/auth/resetpassword/:token  # Reset password
```

### Product Endpoints

```http
GET    /api/products               # Get all products
GET    /api/products/:id           # Get single product
POST   /api/products               # Create product (Admin/Vendor)
PUT    /api/products/:id           # Update product (Admin/Vendor)
DELETE /api/products/:id           # Delete product (Admin/Vendor)
GET    /api/products/search        # Search products
GET    /api/products/category/:category  # Get products by category
POST   /api/products/:id/reviews   # Add product review
```

### Order Endpoints

```http
GET    /api/orders                 # Get all orders (Admin)
GET    /api/orders/myorders        # Get user orders
GET    /api/orders/:id             # Get single order
POST   /api/orders                 # Create new order
PUT    /api/orders/:id             # Update order status (Admin)
DELETE /api/orders/:id             # Cancel order
```

### Cart Endpoints

```http
GET    /api/cart                   # Get user cart
POST   /api/cart                   # Add item to cart
PUT    /api/cart/:id               # Update cart item
DELETE /api/cart/:id               # Remove item from cart
DELETE /api/cart                   # Clear cart
```

### Payment Endpoints

```http
POST   /api/payment/stripe         # Process Stripe payment
POST   /api/payment/paypal         # Process PayPal payment
GET    /api/payment/:id            # Get payment details
POST   /api/payment/refund/:id    # Process refund (Admin)
```

For complete API documentation, visit: http://localhost:5000/api-docs

---

## 🐳 Docker Deployment

### Using Docker Compose

1. **Build and run containers**
```bash
docker-compose up -d
```

2. **Stop containers**
```bash
docker-compose down
```

### Docker Compose Configuration

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongodb
      - redis
    environment:
      - NODE_ENV=production

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

---

## 🚢 Production Deployment

### Deploy to AWS

1. **EC2 Instance Setup**
2. **Configure Security Groups**
3. **Install Dependencies**
4. **Setup Nginx Reverse Proxy**
5. **Configure SSL with Let's Encrypt**
6. **Setup PM2 for Process Management**

### Deploy to Heroku

```bash
heroku create your-app-name
heroku addons:create mongolab
git push heroku main
```

### Deploy to Vercel (Frontend)

```bash
cd frontend
vercel --prod
```

---

## 🧪 Testing

### Run Unit Tests
```bash
npm test
```

### Run Integration Tests
```bash
npm run test:integration
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Generate Coverage Report
```bash
npm run test:coverage
```

---

## 📊 Performance Optimization

- **Code Splitting**: Dynamic imports for route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Caching**: Redis for session and frequently accessed data
- **CDN**: Static assets served via CloudFront
- **Database Indexing**: Optimized MongoDB indexes
- **Image Optimization**: WebP format with fallbacks
- **Compression**: Gzip compression for API responses
- **Minification**: Production builds minified and optimized

---

## 🔒 Security Features

- **Authentication**: JWT with refresh tokens
- **Authorization**: Role-based access control (RBAC)
- **Data Encryption**: Bcrypt for passwords, AES for sensitive data
- **Input Validation**: Server-side validation with express-validator
- **XSS Protection**: Sanitization of user inputs
- **CSRF Protection**: CSRF tokens for state-changing operations
- **Rate Limiting**: API rate limiting to prevent abuse
- **SQL Injection Prevention**: Mongoose parameterized queries
- **Secure Headers**: Helmet.js for security headers
- **HTTPS**: SSL/TLS encryption in production
- **Payment Security**: PCI DSS compliant payment processing

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Ahmed**

- GitHub: [@Muhammad00Ahmed](https://github.com/Muhammad00Ahmed)
- Email: mahmedrangila@gmail.com

---

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the powerful database
- Stripe for payment processing
- All open-source contributors

---

## 📞 Support

For support, email mahmedrangila@gmail.com or open an issue in the repository.

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Muhammad Ahmed

</div>