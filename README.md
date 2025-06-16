# Node.js API Starter (OpenAPI 3.0 + Express)

This project is a clean, modular Express.js API scaffolded from an OpenAPI 3.0 spec. It follows best practices:

- Auto-generated boilerplate using OpenAPI Generator
- Custom logic kept clean in `src/` (not in `generated/`)
- Swagger UI for live API docs
- Layered architecture: Controller → Service → Repository

---

## Project Structure
```bash
node-api-openapi/
├── docs/ # OpenAPI spec (api.yaml)
├── generated/ # Codegen output (ignored in Git)
├── src/ # Actual business logic
│ ├── controllers/
│ ├── services/
│ ├── repositories/
│ └── routes/
├── server.js # Entry point
├── .gitignore
├── package.json
└── README.md
```
---

## Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/Abhii67534/nodejs-starter-project.git
cd node-api-openapi
npm install
```
## Generate Server Stub (from OpenAPI)
```bash
npm run generate:server
```
This reads ```docs/api.yaml``` and generates Express boilerplate in ```./generated/```

## Run the Server
```bash
npm start
```

## API Docs (Swagger UI)
Visit: http://localhost:8080/docs
This renders your docs/api.yaml spec using Swagger UI.

## Testing Routes
### Create a User
```bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"id":"1","name":"Alice","email":"alice@example.com"}'
```

### Get Users
```bash
curl http://localhost:8080/users
```
