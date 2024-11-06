// pages/api/proxy/land-application.js
export default async function handler(req, res) {
  const response = await fetch(
    `http://196.200.119.186:8070/api/land-application/search${req.url.slice(
      "/api/proxy/land-application".length
    )}`,
    {
      method: req.method,
      headers: req.headers,
      body: req.method === "POST" ? req.body : undefined,
    }
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
