# AI Content Summarizer

This project is a Chrome extension that provides a tool for quickly summarizing webpage content using Google's Gemini AI API.

## Project Overview

This project is a browser extension built with JavaScript and HTML. The extension integrates with Google's Gemini AI to extract and summarize the content of any webpage with a single click.

The extension allows users to quickly get the main points of articles, blog posts, or any text-heavy webpages without having to read through the entire content.

## Features

The key features of the extension are:
- **One-Click Summarization**: Summarize any webpage content with just one click.
- **AI-Powered**: Leverages Google's Gemini 2.0 Flash model for accurate and concise summaries.
- **Simple Interface**: Clean, intuitive UI that's easy to use.
- **Works Everywhere**: Functions on virtually any text-based webpage.
- **Fast Processing**: Quick summarization with minimal waiting time.

## Installation

1. **Clone or download this repository:** Get the code from GitHub.
2. **Open Chrome Extensions page:** Navigate to `chrome://extensions/` in your Chrome browser.
3. **Enable Developer Mode:** Toggle the "Developer mode" switch in the top-right corner.
4. **Load the Extension:** Click "Load unpacked" and select the extension directory.
    ```
    Make sure all files (manifest.json, popup.html, popup.js, and icon.png) are in the directory.
    ```
5. **Configure API Key:** Replace `your_key_here` in popup.js with your Gemini API key.

## Usage

1. **Navigate to a webpage:** Go to any webpage you want to summarize.
    ```
    The extension works best on text-heavy pages like articles or blog posts.
    ```
2. **Click the extension icon:** Click on the AI Content Summarizer icon in your browser toolbar.
3. **Click "Summarize Page":** Press the button in the popup interface.
4. **View the summary:** Read the concise summary that appears in the text area.

The extension should now process the webpage and display a summary in the popup window.
