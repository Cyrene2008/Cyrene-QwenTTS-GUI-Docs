# Cyrene-QwenTTS-GUI Documentation

This repository contains the official documentation for [Cyrene QwenTTS GUI](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI), a modern text-to-speech application powered by Qwen-TTS models.

## About

Cyrene QwenTTS GUI is a user-friendly application that allows users to generate high-quality speech from text using advanced AI models. The application features:

- **Voice Generation**: Convert text to speech using various Qwen-TTS models
- **Voice Design**: Create custom voices based on text descriptions
- **Voice Cloning**: Clone voices from reference audio files
- **Audio Browser**: Manage and play generated audio files
- **Multi-language Support**: Available in English and Chinese
- **Modern UI**: Built with FluentUI for a clean and intuitive experience

## Documentation

This documentation is built with [VuePress](https://vuepress.vuejs.org/) and the [Plume Theme](https://github.com/pengzhanbo/vuepress-theme-plume).

### Available Languages

- [English](/en/) - English documentation
- [中文](/) - Chinese documentation

### Documentation Structure

```
docs/
├── doc/
│   ├── guide/          # User guides
│   │   ├── start.md
│   │   ├── interface.md
│   │   └── software-guide.md
│   ├── settings/       # Settings documentation
│   │   ├── basic.md
│   │   └── advanced.md
│   └── resources/      # Additional resources
│       └── contribute.md
├── en/                 # English version
│   └── doc/
│       ├── guide/
│       ├── settings/
│       └── resources/
└── faq/                # Frequently asked questions
```

## Building the Documentation

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/Cyrene2008/QwenTTS-GUI-Docs.git
cd QwenTTS-GUI-Docs
```

2. Install dependencies:
```bash
pnpm install
```

### Development

To run the documentation locally in development mode:

```bash
pnpm docs:dev
```

The documentation will be available at `http://localhost:8080`

### Build

To build the documentation for production:

```bash
pnpm docs:build
```

The built files will be in the `docs/.vuepress/dist` directory.

### Preview Built Documentation

To preview the built documentation:

```bash
pnpm docs:preview
```

## Project Links

- **Main Project**: [Cyrene QwenTTS GUI](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI)
- **Documentation**: [This Repository](https://github.com/Cyrene2008/QwenTTS-GUI-Docs)
- **Qwen-TTS**: [Qwen-TTS Repository](https://github.com/QwenLM/Qwen-TTS)

## License

This documentation is licensed under  CC BY-NC-SA 4.0 .

## Contributing

Contributions to the documentation are welcome! Please refer to the [Contribution Guide](/en/doc/resources/contribute.md) for more information on how to contribute.

## Support

If you encounter any issues with the documentation or have questions, please:

1. Check the [FAQ](/en/faq/) section
2. Open an issue in the [GitHub Issues](https://github.com/Cyrene2008/QwenTTS-GUI-Docs/issues)
3. Visit the [main project's issues](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/issues) for application-related questions

## Acknowledgments

This documentation project is built upon:

- [VuePress](https://vuepress.vuejs.org/) - Vue-powered static site generator
- [VuePress Theme Plume](https://github.com/pengzhanbo/vuepress-theme-plume) - Modern documentation theme
- [Qwen-TTS](https://github.com/QwenLM/Qwen-TTS) - The underlying TTS model

---

**Note**: This repository contains only the documentation. For the actual application, please visit the [main project repository](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI).
