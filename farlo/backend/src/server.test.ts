import request from "supertest";
import { app } from "./server"; 

describe("GET /api/shows", () => {
  it("should return a list of shows", async () => {
    const response = await request(app).get("/api/shows");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
