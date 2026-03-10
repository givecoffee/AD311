const request  = require("supertest");
const app      = require("./server");
const dogFacts = require("./dog_facts");

describe("Normal Cases", () => {

  test("NC1 — GET /facts returns all facts when no number is given", async () => {
    const res = await request(app).get("/facts");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.facts.length).toBe(dogFacts.length);
  });

  test("NC2 — GET /facts?number=1 returns exactly 1 fact", async () => {
    const res = await request(app).get("/facts?number=1");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.facts.length).toBe(1);
    expect(typeof res.body.facts[0]).toBe("string");
  });

  test("NC3 — GET /facts?number=5 returns exactly 5 facts", async () => {
    const res = await request(app).get("/facts?number=5");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.facts.length).toBe(5);
  });

});

describe("Edge Cases", () => {

  test("EC1 — ?number=0 returns 400", async () => {
    const res = await request(app).get("/facts?number=0");
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBeDefined();
  });

  test("EC2 — ?number=-3 returns 400", async () => {
    const res = await request(app).get("/facts?number=-3");
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  test("EC3 — ?number=abc returns 400", async () => {
    const res = await request(app).get("/facts?number=abc");
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  test("EC4 — ?number=9999 returns 400 (exceeds available facts)", async () => {
    const res = await request(app).get("/facts?number=9999");
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toContain(String(dogFacts.length));
  });

  test("EC5 — unknown route returns 404", async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });

  test("EC6 — ?number=2.5 (decimal) returns 400", async () => {
    const res = await request(app).get("/facts?number=2.5");
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

});