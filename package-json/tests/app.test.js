const request = require("supertest");
const app = require("../index");

// Normal cases
test("GET / returns status 200", async () => {
const res = await request(app).get("/");
expect(res.statusCode).toBe(200);
});

test("GET / returns text", async () => {
const res = await request(app).get("/");
expect(typeof res.text).toBe("string");
});

test("GET / contains greeting", async () => {
const res = await request(app).get("/");
expect(res.text.includes("Hello")).toBe(true);
});

// Edge cases
test("Unknown route returns 404", async () => {
const res = await request(app).get("/unknown");
expect(res.statusCode).toBe(404);
});

test("POST / should not return 200", async () => {
const res = await request(app).post("/");
expect(res.statusCode).not.toBe(200);
});

test("GET / handles query parameters", async () => {
const res = await request(app).get("/?test=true");
expect(res.statusCode).toBe(200);
});