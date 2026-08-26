# Password Generator Pro

A browser-based password generator with multilingual support, local settings, and client-side password generation.

## Features

### Security
- Uses the Web Crypto API for random generation
- Supports uppercase, lowercase, numbers, and symbols
- Includes a password strength indicator
- Password generation runs entirely in the browser

### Languages
- Supports English, Arabic, Turkish, German, French, Spanish, Italian, Portuguese, Chinese, and Japanese
- Detects the browser language automatically
- Supports right-to-left layout for Arabic
- Allows language switching without reloading the page

### Interface
- Animated background
- Responsive layout for desktop, tablet, and mobile
- Dark theme
- Hover and transition effects

### Other features
- Password history stored in local storage
- Configurable length from 4 to 50 characters
- Copy to clipboard
- Keyboard shortcuts: Ctrl+G to generate and Ctrl+C to copy
- Persistent settings

## Live Demo

[Password Generator Pro](https://imedkablavi.github.io/Password-Genrator/)

## Installation

### Direct use
1. Download or clone this repository.
2. Open `index.html` in a web browser.

### Clone the repository
```bash
git clone https://github.com/imedkablavi/Password-Genrator.git
cd Password-Genrator
```

### Deploy to a web server
Upload the repository files to your web server and serve `index.html`.

## Project Structure

```text
password-generator-pro/
├── index.html
├── css/
│   ├── app.css
│   └── bootstrap.css
├── js/
│   ├── password.js
│   ├── translations.js
│   ├── bootstrap.js
│   └── jquery-3.5.1.min.js
├── icon/
│   └── password.png
├── screenshots/
└── README.md
```

## Technologies

- HTML5, CSS3, and JavaScript
- Bootstrap 4.x
- jQuery 3.5.1
- Font Awesome 5.12.1
- Web Crypto API
- Local Storage

## Configuration

### Add or edit a language
Edit `js/translations.js`:

```javascript
const translations = {
    'your-language-code': {
        title: 'Your Title',
        // ... other translations
    }
};
```

### Change password rules
Edit `js/password.js`:

```javascript
const charset = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};
```

## Customization

### Change animation colors
Edit the blob colors in `css/app.css`:

```css
.blob-1 {
    background: radial-gradient(circle, #your-color1, #your-color2, #your-color3);
}
```

### Change animation speed
Adjust the animation duration:

```css
.blob-1 {
    animation: float1 25s infinite ease-in-out;
}
```

## Security Notes

- Password generation happens client-side.
- Passwords are not sent to a server by this application.
- Random generation uses the Web Crypto API.
- History is stored in the browser's local storage.
- The project does not include analytics or tracking.

## Browser Support

| Browser | Version | Status |
| --- | --- | --- |
| Chrome | 60+ | Supported |
| Firefox | 55+ | Supported |
| Safari | 11+ | Supported |
| Edge | 79+ | Supported |
| Opera | 47+ | Supported |

## Contributing

Pull requests are welcome.

### Development setup
1. Fork the repository.
2. Clone your fork.
3. Make your changes.
4. Test them locally.
5. Open a pull request.

### Adding a language
1. Add the translation object to `js/translations.js`.
2. Update language detection in `detectLanguage()` if needed.
3. Test right-to-left layout for RTL languages.
4. Update the supported-language list in this README.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

## Contact

- Author: imedkablavi
- GitHub: [@imedkablavi](https://github.com/imedkablavi/)
- Repository: [Password Generator Pro](https://github.com/imedkablavi/Password-Genrator)

## Planned Work

- [ ] Export passwords as CSV or JSON
- [ ] Password strength recommendations
- [ ] Pronunciation guide for generated passwords
- [ ] Custom character set builder
- [ ] Password pattern templates
- [ ] Browser extension
- [ ] Mobile application
- [ ] Password breach checking
- [ ] Team sharing features
- [ ] Developer API
