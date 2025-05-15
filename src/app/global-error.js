"use client"

function GlobalErrorBoundary() {
  return (
<html lang="en">
    <body>
        <h1>Something went wrong</h1>
        <button onClick={() => window.location.reload()}>Refresh</button>
    </body>
</html>
  )
}

export default GlobalErrorBoundary;