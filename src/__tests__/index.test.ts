import request from "supertest";
import app from "../app";

describe("POST /users/member", () => {
    it("should add member successfully", async () => {
        const res = await request(app).post("/users/member").send({name: "David"})
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("id")
    })
})

describe("GET /users", () => {
    it("should get all members", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0].name).toEqual("David");
    })
})