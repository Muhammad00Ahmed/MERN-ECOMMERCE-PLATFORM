# Contributing to MERN E-Commerce Platform

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 Getting Started

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/MERN-ECOMMERCE-PLATFORM.git
   cd MERN-ECOMMERCE-PLATFORM
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Muhammad00Ahmed/MERN-ECOMMERCE-PLATFORM.git
   ```

4. **Install dependencies**
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd frontend && npm install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

1. **Keep your fork updated**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make your changes**
   - Write clean, maintainable code
   - Follow the coding standards
   - Add tests for new features
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm test
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template

## 📝 Coding Standards

### JavaScript/TypeScript

- Use ES6+ features
- Follow Airbnb JavaScript Style Guide
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Avoid nested callbacks (use async/await)

### React

- Use functional components with hooks
- Follow React best practices
- Use PropTypes or TypeScript for type checking
- Keep components small and reusable
- Use meaningful component names

### Node.js

- Use async/await instead of callbacks
- Handle errors properly
- Use environment variables for configuration
- Follow RESTful API conventions
- Implement proper error handling

### Database

- Use parameterized queries
- Implement proper indexing
- Follow naming conventions
- Document schema changes

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(auth): add JWT authentication
fix(cart): resolve item duplication issue
docs(readme): update installation instructions
style(product): format product card component
refactor(api): simplify error handling
test(user): add user service tests
chore(deps): update dependencies
```

## 🔄 Pull Request Process

1. **Ensure your PR**:
   - Follows the coding standards
   - Includes tests for new features
   - Updates documentation
   - Passes all CI checks
   - Has a clear description

2. **PR Title Format**:
   ```
   <type>: <description>
   ```
   Example: `feat: add product search functionality`

3. **PR Description Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] Unit tests pass
   - [ ] Integration tests pass
   - [ ] Manual testing completed

   ## Screenshots (if applicable)
   Add screenshots here

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   - [ ] No new warnings generated
   ```

4. **Review Process**:
   - Wait for maintainer review
   - Address review comments
   - Request re-review after changes
   - Squash commits if requested

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- path/to/test/file
```

### Writing Tests

- Write tests for all new features
- Maintain test coverage above 80%
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies

### Test Structure

```javascript
describe('Feature Name', () => {
  describe('Function Name', () => {
    it('should do something specific', () => {
      // Arrange
      const input = 'test';
      
      // Act
      const result = functionName(input);
      
      // Assert
      expect(result).toBe('expected');
    });
  });
});
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions
- Document complex logic
- Include usage examples
- Keep comments up to date

### API Documentation

- Document all endpoints
- Include request/response examples
- Specify authentication requirements
- List possible error responses

### README Updates

- Update README for new features
- Add configuration instructions
- Include troubleshooting tips
- Update screenshots if UI changes

## 🐛 Reporting Bugs

### Before Submitting

- Check existing issues
- Verify it's reproducible
- Collect relevant information

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 96]
- Version: [e.g., 1.0.0]

**Additional context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of desired solution

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Any other relevant information
```

## 🎯 Priority Labels

- **critical**: Security issues, data loss
- **high**: Major bugs, important features
- **medium**: Minor bugs, nice-to-have features
- **low**: Cosmetic issues, future enhancements

## 📞 Getting Help

- **Discord**: [Join our Discord](https://discord.gg/example)
- **Email**: mahmedrangila@gmail.com
- **Issues**: [GitHub Issues](https://github.com/Muhammad00Ahmed/MERN-ECOMMERCE-PLATFORM/issues)

## 🙏 Thank You!

Thank you for contributing to this project! Your efforts help make this project better for everyone.

---

**Happy Coding! 🚀**