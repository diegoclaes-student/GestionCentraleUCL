.PHONY: help install dev build test lint typecheck clean docker-up docker-down db-migrate db-seed

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	pnpm install

dev: ## Start development servers
	pnpm run dev

build: ## Build all packages
	pnpm run build

test: ## Run tests
	pnpm run test

test-e2e: ## Run end-to-end tests
	pnpm run test:e2e

lint: ## Run linter
	pnpm run lint

typecheck: ## Run TypeScript type checking
	pnpm run typecheck

clean: ## Clean node_modules and build artifacts
	pnpm run clean

format: ## Format code with Prettier
	pnpm run format

docker-up: ## Start Docker services
	docker compose up -d

docker-down: ## Stop Docker services
	docker compose down

docker-logs: ## View Docker logs
	docker compose logs -f

db-migrate: ## Run database migrations
	pnpm run db:migrate

db-seed: ## Seed database with sample data
	pnpm run db:seed

db-studio: ## Open Prisma Studio
	pnpm run db:studio

db-reset: ## Reset database (WARNING: destroys all data)
	pnpm run db:reset

setup: install docker-up db-migrate db-seed ## Complete setup for new developers