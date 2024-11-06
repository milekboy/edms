self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/land-application/search")) {
    event.respondWith(
      fetch(
        `http://196.200.119.186:8070${new URL(event.request.url).pathname}`,
        {
          method: event.request.method,
          headers: event.request.headers,
        }
      )
    );
  }
});
