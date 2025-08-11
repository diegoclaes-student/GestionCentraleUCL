# Contributing to Centrale UCL Manager

Thank you for your interest in contributing to Centrale UCL Manager! This guide will help you get started.

## Development Workflow

### 1. Getting Started

```bash
# Fork the repository and clone your fork
git clone https://github.com/your-username/GestionCentraleUCL.git
cd GestionCentraleUCL

# Add upstream remote
git remote add upstream https://github.com/diegoclaes-student/GestionCentraleUCL.git

# Set up development environment
make setup
```

### 2. Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - Feature development
- `hotfix/*` - Critical fixes
- `release/*` - Release preparation

Create feature branches from `develop`:

```bash
git checkout develop
git pull upstream develop
git checkout -b feature/your-feature-name
```

### 3. Development Process

1. **Write Code**
   - Follow TypeScript best practices
   - Use existing components and patterns
   - Add tests for new functionality

2. **Test Your Changes**
   ```bash
   make test           # Unit tests
   make test-e2e       # E2E tests
   make lint           # Linting
   make typecheck      # Type checking
   ```

3. **Commit Your Changes**
   - Use conventional commits format
   - Keep commits atomic and focused
   - Write clear commit messages

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create PR through GitHub interface
   ```

## Code Standards

### TypeScript Guidelines

- Use strict TypeScript configuration
- Prefer `type` over `interface` for object types
- Use Zod schemas for validation
- Export types alongside schemas

### Component Guidelines

- Use function components with TypeScript
- Props should be typed with interfaces
- Use shadcn/ui components when possible
- Follow the established component structure

### API Guidelines

- Use NestJS decorators properly
- Validate all inputs with class-validator or Zod
- Return consistent response formats
- Document endpoints with OpenAPI decorators

### Database Guidelines

- Use Prisma schema for all database changes
- Write migrations for schema changes
- Seed data should be realistic but anonymized
- Follow naming conventions (snake_case for DB, camelCase for code)

## Testing

### Unit Tests
- Write tests for business logic
- Mock external dependencies
- Aim for >80% coverage

### Integration Tests
- Test API endpoints
- Test database interactions
- Use test database

### E2E Tests
- Test critical user journeys
- Use Playwright for frontend
- Test authentication flows

## Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Tests pass locally
- [ ] TypeScript compiles without errors
- [ ] Documentation updated if needed
- [ ] No security vulnerabilities introduced

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests pass
- [ ] Documentation updated
```

### Review Process

1. Automated checks must pass
2. At least one code review required
3. Address all review comments
4. Squash commits before merge

## Commit Message Format

Use conventional commits:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**
```
feat(auth): add OAuth Google integration
fix(api): resolve user creation validation error
docs(readme): update setup instructions
```

## Environment Setup

### Required Tools
- Node.js 18+
- pnpm 8+
- Docker & Docker Compose
- Git

### IDE Configuration

Recommended VS Code extensions:
- TypeScript
- Prettier
- ESLint
- Prisma
- Tailwind CSS IntelliSense

### Environment Variables

Copy `.env.example` to `.env.local` and configure for development.

## Architecture Decisions

### Frontend
- Next.js App Router for file-based routing
- shadcn/ui for consistent component library
- TanStack Query for server state
- Zustand for client state
- React Hook Form with Zod validation

### Backend
- NestJS for scalable API architecture
- Prisma for type-safe database access
- Zod for runtime validation
- OpenAPI for API documentation

### Database
- PostgreSQL for reliability
- Prisma migrations for schema management
- Comprehensive audit logging

## Getting Help

- **Questions**: Open a discussion on GitHub
- **Bugs**: Create an issue with reproduction steps
- **Security**: Email security@centrale-ucl.be
- **General**: Contact the maintainers

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers learn
- Follow project conventions

## Recognition

Contributors will be recognized in:
- Release notes
- README contributors section
- Annual association acknowledgments

Thank you for contributing to Centrale UCL Manager!