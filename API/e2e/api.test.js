const request = require("supertest");
const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Testes da API", () => {
  describe("GET /posts", () => {
    it("Deve retornar status 200 e uma lista de posts", async () => {
      const response = await request(BASE_URL).get("/posts");
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("title");
      expect(response.body[0]).toHaveProperty("body");
      expect(response.body[0]).toHaveProperty("userId");
    });
  });

  describe("GET /posts/1", () => {
    it("Deve retornar status 200 e os detalhes do post com ID 1", async () => {
      const response = await request(BASE_URL).get("/posts/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("title");
      expect(response.body).toHaveProperty("body");
      expect(response.body).toHaveProperty("userId");
    });

    it("Deve retornar status 404 para um post inexistente", async () => {
      const response = await request(BASE_URL).get("/posts/999");
      expect(response.status).toBe(404);
    });
  });

  describe("POST /posts", () => {
    it("Deve retornar status 201 e criar um novo post", async () => {
      const newPost = {
        title: "Novo Post",
        body: "Conteúdo do novo post",
        userId: 1,
      };
      const response = await request(BASE_URL).post("/posts").send(newPost);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.title).toBe(newPost.title);
      expect(response.body.body).toBe(newPost.body);
      expect(response.body.userId).toBe(newPost.userId);
    });
  });
});
