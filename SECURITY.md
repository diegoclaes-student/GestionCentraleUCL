# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Centrale UCL Manager seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: [security@centrale-ucl.be](mailto:security@centrale-ucl.be)

Include the following information:
- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- We will acknowledge receipt of your vulnerability report within 48 hours
- We will provide an initial assessment within 7 days
- We will work with you to understand and resolve the issue
- We will notify you when the issue is fixed

## Security Measures

### Authentication & Authorization
- JWT-based authentication with secure token handling
- Role-based access control (RBAC) with granular permissions
- Rate limiting on all API endpoints
- Secure session management

### Data Protection
- All sensitive data encrypted at rest and in transit
- GDPR-compliant data handling and retention
- Secure file upload with validation and virus scanning
- Database access through parameterized queries (SQL injection protection)

### Infrastructure Security
- HTTPS enforced in production
- Security headers (HSTS, CSP, etc.)
- Input validation and sanitization
- Audit logging for all sensitive operations

### Development Security
- Dependency scanning with automated updates
- Static code analysis in CI/CD pipeline
- Security-focused code reviews
- Environment separation (dev/staging/prod)

## Best Practices

When contributing to this project:
- Never commit secrets or credentials
- Use environment variables for configuration
- Follow secure coding practices
- Keep dependencies up to date
- Write security tests for new features