const healthButton = document.getElementById("healthButton");
const healthResult = document.getElementById("healthResult");

healthButton.addEventListener("click", async () => {
  healthResult.textContent = "Checking API...";

  try {
    const response = await fetch("/api/health");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    healthResult.textContent = `API status: ${data.status}`;
  } catch (error) {
    healthResult.textContent =
      "Could not reach the backend.";
  }
});
