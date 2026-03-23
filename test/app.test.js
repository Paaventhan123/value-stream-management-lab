const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("health endpoint exists", async () => {
  const server = app.listen(0);
  const port = server.address().port;

  const res = await fetch(`http://127.0.0.1:${port}/health`);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.status, "UP");

  server.close();
});