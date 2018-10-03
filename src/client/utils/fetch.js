export default async function(url, method = "GET", data) {
  const request = await fetch(url, {
    method,
    body: data
      ? JSON.stringify({
          email: "email@email.cz",
          password: "tajneheslo"
        })
      : undefined,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });

  return await request.json();
}
