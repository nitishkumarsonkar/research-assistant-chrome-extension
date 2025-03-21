# Research Assistant Chrome Extension

A Chrome extension that helps users get quick summaries of selected text using a custom Spring Boot backend service.

## Features

- Text selection and summarization directly from Chrome browser
- Integration with custom Spring Boot backend service
- Easy-to-use interface
- Real-time text processing

## Architecture

```
+-------------------+     +-----------------------+     +------------------------+
|  Chrome Extension |---->| research-assistant    |--->| Text Processing Logic  |
| (Frontend)        |     | services (Spring Boot)|     | and Summarization     |
+-------------------+     +-----------------------+     +------------------------+
```

## Setup Instructions

1. **Install Chrome Extension**
    - Open Chrome Extensions page (`chrome://extensions/`)
    - Enable Developer Mode
    - Load unpacked extension from the project directory

2. **Configure Backend Service**
    - Ensure the Spring Boot service is running
    - Default endpoint: `http://localhost:8080`

## Usage

1. Select any text on a webpage
2. Right-click or use the extension icon
3. Click "Get Summary"
4. View the generated summary in the extension popup

## Technical Stack

- **Frontend**: Chrome Extension (HTML, CSS, JavaScript)
- **Backend**: Spring Boot (Java)
- **API Communication**: REST APIs

## Configuration

Update the `manifest.json` file to modify:
- Permissions
- API endpoints
- Extension behavior

## Development

1. Clone both repositories:
```sh
git clone https://github.com/nitishkumarsonkar/research-assistant-services.git
git clone https://github.com/nitishkumarsonkar/research-assistant-chrome-extension
```

2. Follow setup instructions in each repository

## Contributing

Feel free to submit issues and enhancement requests.

## License

[Add your license here]
