import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: "30s",
};

export default function () {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = http.get(url);

  check(response, {
    "Status é 200": (r) => r.status === 200,
  });

  sleep(1);
}

export function handleSummary(data) {
  console.log("Preparing the end-of-test summary...");
  return {
    "resultados.json": JSON.stringify(data),
  };
}
