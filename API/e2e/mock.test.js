jest.mock("supertest", () => () => ({
  post: jest.fn().mockImplementation(() => ({
    send: jest.fn().mockResolvedValue({
      status: 400,
      body: { error: "Campos obrigatórios faltando" },
    }),
  })),
}));

const request = require("supertest");
const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Testes com jest.mock para HTTP status de 400", () => {
  it("Deve retornar status 400 ao tentar criar um post sem campos obrigatórios", async () => {
    const invalidPost = { title: "Apenas título" };
    const response = await request(BASE_URL).post("/posts").send(invalidPost);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Campos obrigatórios faltando");
  });
});
