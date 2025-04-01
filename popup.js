document.getElementById("summarize-btn").addEventListener("click", async () => {
  try {
    // Get the active tab's content
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText // Extract visible text from the webpage
    });

    const pageContent = result[0].result;

    // Call Gemini API for summarization
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash/generateContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `AIzaSyANy_2T0gJggxzVeCRoICZaTgtqxG0eVpw`
      },
      body: JSON.stringify({
        contents: [`Summarize the following text in a concise paragraph:\n\n${pageContent}`],
        model: "gemini-2.0-flash"
      })
    });

    const data = await response.json();
    
    // Extract summary from response
    const summary = data.contents[0].parts[0].text;

    // Display the summary in the popup
    document.getElementById("summary-result").value = summary.trim();
  } catch (error) {
    console.error("Error summarizing content:", error);
    document.getElementById("summary-result").value = "Failed to summarize content.";
  }
});
