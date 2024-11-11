// pages/api/proxy/land-application.js
export default async function handler(req, res) {
  // Extract the query parameters (e.g., cOfONumber) from the request URL
  const { cOfONumber } = req.query;

  // Ensure the backend URL is properly formed with the query parameters
  const backendUrl = `http://196.200.119.186:8070/api/land-application/search`;

  try {
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: req.headers,
      body: req.method === "POST" ? req.body : undefined,
    });

    // If the backend response is okay, return the data
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from backend" });
    }
  } catch (error) {
    console.log("Error in proxy request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
