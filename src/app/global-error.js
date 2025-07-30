<<<<<<< HEAD
"use client";

function GlobalErrorBoundary() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center">
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
}

export default GlobalErrorBoundary;
=======
"use client";

function GlobalErrorBoundary() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center">
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
}

export default GlobalErrorBoundary;
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
