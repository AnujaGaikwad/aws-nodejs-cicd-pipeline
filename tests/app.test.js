const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / returns welcome message", async () => {
  const res = await request(app).get("/");
  assert.equal(res.status, 200);
  assert.equal(res.body.message, "AWS Node.js CI/CD API is running!");
});

test("GET /health returns healthy status", async () => {
  const res = await request(app).get("/health");
  assert.equal(res.status, 200);
  assert.equal(res.body.status, "healthy");
});

test("GET /api/info returns application information", async () => {
  const res = await request(app).get("/api/info");
  assert.equal(res.status, 200);
  assert.equal(res.body.version, "1.0.0");
});
