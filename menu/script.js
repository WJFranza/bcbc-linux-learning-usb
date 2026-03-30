document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");
  const status = document.getElementById("copy-status");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = "Prompt copied to clipboard.";
      } catch (err) {
        if (status) status.textContent = "Clipboard copy failed. Please copy manually.";
      }
      setTimeout(() => {
        if (status) status.textContent = "";
      }, 2200);
    });
  });
});
