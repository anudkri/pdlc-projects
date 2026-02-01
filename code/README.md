# PDLC-11 - Project Code Repository

> **Actual implementation code with full tech stack**

This is the working codebase for **PDLC-11** project, auto-generated based on approved Architecture Decision Record (ADR).

## 🏗️ Architecture & Tech Stack

**Architecture Pattern**: Unknown Architecture

**Technologies**:
- **python**: python bash and shell scripting
- **include**: include all necessary libraries to make this a command line app

**Key Features**:
- ✅ Full TypeScript implementation with strict mode
- ✅ Docker containerization for consistent deployment
- ✅ PostgreSQL + Redis for data persistence & caching
- ✅ Complete test coverage with Jest
- ✅ ESLint + Prettier for code quality
- ✅ Express.js API framework
- ✅ Production-ready configuration

## 📐 Design Reference

See `../system-of-records/adrs/ADR-PDLC-11.md` for:
- Architectural decisions and rationale
- Components and their responsibilities
- Data flow diagrams
- Deployment strategy

## 📁 Project Structure

```
.
├── src/
│   ├── api/              # 📡 Route handlers and API endpoints
│   ├── services/         # 🔧 Business logic layer
│   ├── models/           # 📊 TypeScript interfaces & types
│   ├── middleware/       # 🔐 Express middleware (auth, logging, etc.)
│   ├── utils/            # 🛠️  Helper utilities & constants
│   └── index.ts          # 🚀 Application entry point
├── tests/                # ✅ Unit & integration tests
├── docs/                 # 📚 API documentation
├── docker-compose.yml    # 🐳 Local development environment
├── Dockerfile            # 📦 Production container image
├── .eslintrc.json        # 🔍 Code quality rules
├── tsconfig.json         # ⚙️  TypeScript configuration
├── package.json          # 📦 Node.js dependencies
├── .env.example          # 📝 Environment template
├── .gitignore
├── README.md             # This file
└── DEPLOYMENT.md         # 🚀 Deployment guide
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+
- **Docker & Docker Compose**
- **npm** or **yarn**
- **Git**

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your configuration (optional for local dev)

# 3. Start development environment (PostgreSQL, Redis, App)
docker-compose up -d

# 4. Wait for services to be healthy
sleep 5

# 5. Run development server with hot reload
npm run dev

# Server will be available at http://localhost:3000
```

### Available Commands

```bash
# Development
npm run dev              # Start with hot reload (watches .ts files)
npm run watch           # Compile TypeScript in watch mode

# Production
npm run build            # Compile TypeScript to JavaScript
npm start               # Run compiled production server

# Testing
npm run test            # Run test suite (Jest)
npm run test:watch      # Tests in watch mode
npm run test:coverage   # Generate coverage report

# Code Quality
npm run lint            # Check code with ESLint
npm run lint:fix        # Auto-fix linting issues
npm run format          # Format code with Prettier

# Docker
docker-compose up -d    # Start all services
docker-compose down     # Stop all services
docker-compose logs -f  # View live logs
docker-compose ps       # Check service status
```

## 📡 API Endpoints

### Health Check
```
GET /health
Response: {"status": "ok", "timestamp": "2024-01-15T10:30:45Z", "uptime": 12345}
```

### Project Info
```
GET /api/v1/info
Response: {
  "name": "PDLC-11",
  "architecture": "Unknown Architecture",
  "version": "0.1.0",
  "uptime": 12345,
  "environment": "development"
}
```

### Status Codes
- **200** - Success
- **201** - Created
- **400** - Bad Request
- **401** - Unauthorized
- **404** - Not Found
- **500** - Internal Server Error

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode (re-run on file changes)
npm run test:watch

# Run specific test file
npm run test -- src/services/user.test.ts

# Generate coverage report
npm run test:coverage
# Coverage report will be in ./coverage/index.html
```

**Coverage Targets**:
- Statements: >80%
- Branches: >75%
- Functions: >80%
- Lines: >80%

## 🔍 Code Quality

### ESLint
```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Check specific file
npm run lint -- src/services/user.ts
```

### Prettier
```bash
# Format all code
npm run format

# Check if code is formatted
npm run format -- --check
```

### Pre-commit Hooks
Code quality checks run automatically before commits (configured in Husky).

## 🐳 Docker

### Local Development

```bash
# Start all services (PostgreSQL, Redis, App)
docker-compose up -d

# View logs from all services
docker-compose logs -f

# View logs from specific service
docker-compose logs -f app
docker-compose logs -f postgres
docker-compose logs -f redis

# Stop all services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v

# Rebuild images
docker-compose build --no-cache
```

### Service Details

| Service | Port | Username | Password | Purpose |
|---------|------|----------|----------|---------|
| App | 3000 | - | - | Express.js API server |
| PostgreSQL | 5432 | admin | admin | Relational database |
| Redis | 6379 | - | - | In-memory cache |

### Production Build

```bash
# Build Docker image
docker build -t pdlc-11:latest .

# Run container
docker run -p 3000:3000 \
  --env-file .env \
  pdlc-11:latest

# Push to Docker registry
docker tag pdlc-11:latest my-registry/pdlc-11:latest
docker push my-registry/pdlc-11:latest

# Deploy on production
docker run -d \
  --name pdlc-11 \
  -p 3000:3000 \
  --restart always \
  --env-file .env \
  my-registry/pdlc-11:latest
```

## 📚 Database

### PostgreSQL

```bash
# Connect to database
PGPASSWORD=admin psql -h localhost -U admin -d pdlc-11_db

# List tables
\dt

# View table structure
\d table_name

# Run migrations
npm run db:migrate

# Rollback migration
npm run db:rollback

# Create migration
npm run db:migration:create migration_name
```

### Sample Queries

```sql
-- Check database connection
SELECT 1;

-- List all tables
SELECT table_name FROM information_schema.tables WHERE table_schema='public';

-- Check row count
SELECT COUNT(*) FROM users;
```

### Redis

```bash
# Connect to Redis
redis-cli -h localhost -p 6379

# Test connection
ping
# Response: PONG

# View all keys
keys *

# Get value
get key_name

# Set value with expiration
setex cache_key 3600 "value"

# Clear all
flushall
```

## 📊 Environment Variables

See `.env.example` for all available variables:

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `NODE_ENV` | Environment mode | `development` | `production` |
| `PORT` | Server port | `3000` | `8080` |
| `DATABASE_URL` | PostgreSQL connection | `postgresql://...` | `postgresql://admin:admin@postgres:5432/pdlc-11_db` |
| `REDIS_URL` | Redis connection | `redis://redis:6379` | `redis://redis:6379/0` |
| `LOG_LEVEL` | Logging verbosity | `debug` | `info`, `warn`, `error` |
| `CORS_ORIGIN` | CORS allowed origin | `http://localhost:3000` | `https://example.com` |

## 🚀 Deployment

See **DEPLOYMENT.md** for comprehensive deployment guide:
- Staging environment setup
- Production deployment with Docker
- CI/CD pipeline configuration
- Monitoring and alerting
- Rollback procedures
- Performance optimization

### Quick Deploy (Docker Compose)

```bash
# Production stack
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down
```

## 📝 Development Workflow

### Creating a Feature

```bash
# 1. Create feature branch from develop
git checkout -b feature/add-user-auth develop

# 2. Make changes
# Edit files...

# 3. Run tests locally
npm run test

# 4. Run linting and formatting
npm run lint:fix
npm run format

# 5. Commit changes (follow conventional commits)
git add .
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login timeout"
git commit -m "docs: update API docs"

# 6. Push to remote
git push origin feature/add-user-auth

# 7. Create Pull Request on GitHub
# Set base to 'develop'
# Add description of changes
# Link related issues

# 8. After review and approval, merge to develop
```

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:
```
feat(auth): add JWT token validation
fix(database): resolve connection pool leak
docs(README): update installation steps
test(user): add authentication tests
```

## 🔐 Security

### Built-in Features
- ✅ **TypeScript** - Full type safety prevents many errors
- ✅ **CORS** - Configurable cross-origin protection
- ✅ **Environment Variables** - Sensitive data never in code
- ✅ **Docker** - Multi-stage builds, minimal attack surface
- ✅ **ESLint Security** - Security linting rules enabled
- ✅ **Dependency Scanning** - Regular npm audit checks

### Best Practices

```bash
# Never commit .env files
echo ".env" >> .gitignore

# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Update dependencies safely
npm update

# Review security advisories
npm audit --audit-level=moderate
```

### Important Notes
- Use strong database passwords in production
- Rotate secrets regularly
- Enable HTTPS in production
- Use environment-specific `.env` files
- Never commit secrets to git
- Monitor application logs for suspicious activity

## 📈 Performance

### Optimization Strategies
- ⚡ **TypeScript Compilation** - Optimized JavaScript output
- 💾 **Redis Caching** - In-memory data caching
- 🔍 **Database Indexing** - Optimized query performance
- 🚀 **Docker** - Efficient containerization
- 🔄 **Connection Pooling** - Reuse database connections

### Monitoring Performance

```bash
# Monitor memory usage
docker stats pdlc-11

# Check response times
npm run test:coverage

# Profile with Node.js
node --prof src/index.ts
```

## 🆘 Troubleshooting

### Port 3000 Already in Use

```bash
# Change port in .env
PORT=3001 npm run dev

# Or find and kill process
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error

```bash
# Check if PostgreSQL is running
docker-compose ps postgres

# View database logs
docker-compose logs postgres

# Verify connection string in .env
# Format: postgresql://user:password@host:port/database
```

### Redis Connection Error

```bash
# Check if Redis is running
docker-compose ps redis

# Test Redis connection
redis-cli -h localhost ping
```

### Tests Failing

```bash
# Clear test cache
npm run test -- --clearCache

# Run specific test with verbose output
npm run test -- --verbose src/services/user.test.ts

# Run tests in band (slower but easier to debug)
npm run test -- --runInBand
```

### Docker Image Build Issues

```bash
# Build without cache
docker-compose build --no-cache

# View build logs
docker-compose build --progress=plain

# Check Docker disk usage
docker system df
docker system prune -a
```

## 📞 Support

For issues and questions:
1. **Check existing issues** on GitHub
2. **Review ADR** at `../system-of-records/adrs/ADR-PDLC-11.md`
3. **See DEPLOYMENT.md** for deployment issues
4. **Review logs**: `docker-compose logs -f`
5. **Enable debug logging**: `LOG_LEVEL=debug npm run dev`

## 📋 Production Readiness Checklist

- [ ] All tests passing: `npm run test`
- [ ] No linting errors: `npm run lint`
- [ ] Coverage >80%: `npm run test:coverage`
- [ ] Environment variables configured: `.env` file set
- [ ] Database migrations applied: `npm run db:migrate`
- [ ] Security audit passed: `npm audit` (no high/critical)
- [ ] Docker image builds: `docker build .`
- [ ] Docker compose starts: `docker-compose up -d`
- [ ] Health endpoint responds: `curl http://localhost:3000/health`
- [ ] API responds to requests: `curl http://localhost:3000/api/v1/info`
- [ ] All services healthy: `docker-compose ps`
- [ ] Logs are clean: `docker-compose logs` (no errors)

## 📄 Project Information

**Generated By**: PDLC Architect (Persona-Driven Development Lifecycle)

- **ADR Document**: `../system-of-records/adrs/ADR-PDLC-11.md`
- **Architecture**: Unknown Architecture
- **Tech Stack**: python bash and shell scripting, include all necessary libraries to make this a command line app and more...
- **Generated**: 2026-02-01 20:36:36
- **Version**: 0.1.0

## 📚 Additional Resources

- **Deployment Guide**: See `DEPLOYMENT.md`
- **Architecture Details**: See `../system-of-records/adrs/ADR-PDLC-11.md`
- **API Reference**: See `docs/API.md`
- **Contribution Guide**: See `CONTRIBUTING.md`

---

**Happy coding! 🚀**

For the latest updates and documentation, check GitHub repository.

_Auto-generated by PDLC - Persona-Driven Development Lifecycle_
