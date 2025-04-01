document.getElementById("summarize-btn").addEventListener("click", async () => {
  try {
    // Get the active tab's content
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText // Extract visible text from the webpage
    });

    const pageContent = result[0].result;

    // Calling Gemini API for summarization
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyANy_2T0gJggxzVeCRoICZaTgtqxG0eVpw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Summarize the following text in a concise paragraph:\n\n${pageContent}`
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    const summary = data.candidates[0].content.parts[0].text;
    document.getElementById("summary-result").value = summary.trim();

  } catch (error) {
    console.error("Error summarizing content:", error);
    document.getElementById("summary-result").value = "Failed to summarize content: " + error.message;
  }
});
