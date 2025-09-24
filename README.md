# 🔐 Password Generator Pro

A modern, secure, and multilingual password generator with animated background effects and advanced features.

## ✨ Features

### 🔒 Security Features
- **Cryptographically Secure**: Uses Web Crypto API for true randomness
- **Multiple Character Sets**: Uppercase, lowercase, numbers, and symbols
- **Password Strength Indicator**: Real-time strength analysis with visual feedback
- **Secure Generation**: No server-side storage, everything happens locally

### 🌍 Multilingual Support
- **10 Languages Supported**: English, Arabic, Turkish, German, French, Spanish, Italian, Portuguese, Chinese, Japanese
- **Auto Language Detection**: Automatically detects browser language
- **RTL Support**: Full right-to-left text support for Arabic
- **Dynamic Translation**: Real-time language switching

### 🎨 Modern UI/UX
- **Animated Background**: Dynamic color blobs with smooth animations
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Glass Morphism**: Modern glassmorphism design elements
- **Smooth Animations**: Fluid transitions and hover effects
- **Dark Theme**: Eye-friendly dark color scheme

### 📊 Advanced Features
- **Password History**: Local storage of previously generated passwords
- **Customizable Length**: 4-50 characters range
- **Copy to Clipboard**: One-click copying with visual feedback
- **Keyboard Shortcuts**: Quick generation with Ctrl+G, copy with Ctrl+C
- **Settings Persistence**: Remembers your preferences

## 🚀 Live Demo

Visit the live demo: [Password Generator Pro](https://foz12.github.io/password-generator-pro)

## 📱 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile.png)

### Different Languages
![Arabic Interface](screenshots/arabic.png)
![Chinese Interface](screenshots/chinese.png)

## 🛠️ Installation

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start generating secure passwords!

### Option 2: Clone Repository
```bash
git clone https://github.com/foz12/password-generator-pro.git
cd password-generator-pro
```

### Option 3: Deploy to Web Server
Upload all files to your web server and access via your domain.

## 🏗️ Project Structure

```
password-generator-pro/
├── index.html              # Main HTML file
├── css/
│   ├── app.css            # Custom styles with animations
│   └── bootstrap.css      # Bootstrap framework
├── js/
│   ├── password.js        # Main password generation logic
│   ├── translations.js    # Multi-language support
│   ├── bootstrap.js       # Bootstrap JavaScript
│   └── jquery-3.5.1.min.js # jQuery library
├── icon/
│   └── password.png       # Favicon
├── screenshots/           # Project screenshots
└── README.md             # Project documentation
```

## 💻 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**: Bootstrap 4.x
- **Libraries**: 
  - jQuery 3.5.1
  - Font Awesome 5.12.1
- **APIs**: Web Crypto API for secure randomness
- **Storage**: Local Storage for settings and history

## 🔧 Configuration

### Customizing Languages
Edit `js/translations.js` to add new languages or modify existing translations:

```javascript
const translations = {
    'your-language-code': {
        title: 'Your Title',
        // ... other translations
    }
};
```

### Customizing Password Rules
Modify password generation rules in `js/password.js`:

```javascript
const charset = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};
```

## 🎨 Customization

### Changing Animation Colors
Edit the blob colors in `css/app.css`:

```css
.blob-1 {
    background: radial-gradient(circle, #your-color1, #your-color2, #your-color3);
}
```

### Modifying Animation Speed
Adjust animation duration:

```css
.blob-1 {
    animation: float1 25s infinite ease-in-out; /* Change 25s to your preferred speed */
}
```

## 🔐 Security Notes

- All password generation happens client-side
- No passwords are transmitted to any server
- Uses cryptographically secure random number generation
- History is stored locally in your browser only
- No analytics or tracking implemented

## 🌟 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 60+     | ✅ Full Support |
| Firefox | 55+     | ✅ Full Support |
| Safari  | 11+     | ✅ Full Support |
| Edge    | 79+     | ✅ Full Support |
| Opera   | 47+     | ✅ Full Support |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Clone your fork
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Adding New Languages
1. Add translation object to `js/translations.js`
2. Update language detection in `detectLanguage()` function
3. Test RTL support if needed
4. Update README with new language

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [Font Awesome](https://fontawesome.com/) for icons
- [jQuery](https://jquery.com/) for DOM manipulation
- Web Crypto API for secure randomness
- All contributors and users of this project

## 📞 Contact

- **Author**: Foz12
- **GitHub**: [@foz12](https://github.com/foz12)
- **Project**: [Password Generator Pro](https://github.com/foz12/password-generator-pro)

## 🚀 Future Features

- [ ] Export passwords to various formats (CSV, JSON)
- [ ] Password strength recommendations
- [ ] Pronunciation guide for generated passwords
- [ ] Custom character set builder
- [ ] Password pattern templates
- [ ] Browser extension version
- [ ] Mobile app (React Native)
- [ ] Password breach checking
- [ ] Team sharing features
- [ ] API for developers

---

⭐ **Star this repository if you found it helpful!** ⭐

Made with ❤️ and ☕ by [Foz12](https://github.com/foz12)