---
title: Contribution Guide
time: 2024-01-01
tags:
  - Resources
  - Contribution
---

# Contribution Guide

Thank you for your interest in and support for the Cyrene QwenTTS GUI project! We welcome and appreciate contributions in various forms, including code submissions, documentation improvements, bug reports, and feature suggestions.

## Code of Conduct

All contributors to this project should adhere to the following code of conduct:

- **Respect Others**: Respect all contributors regardless of their experience level, gender, gender identity and expression, sexual orientation, disability, appearance, race, age, religion, or nationality
- **Inclusive and Friendly**: Create a friendly and inclusive environment that welcomes contributors from all backgrounds
- **Professional Attitude**: Treat others with professionalism and accept constructive criticism
- **Focus on the Project**: Focus on what is best for the project rather than personal differences

## How to Contribute

### Report Bugs

If you find a bug, you can report it through the following steps:

1. **Search Existing Issues**: First check if someone has already reported the same issue
2. **Create a New Issue**: If no related Issue is found, create a new Issue
3. **Describe the Problem in Detail**: Provide the following information:
   - Software version
   - Operating system version
   - Detailed problem description
   - Reproduction steps
   - Expected behavior
   - Actual behavior
   - Related screenshots or error messages
   - Possible solutions (if any)

### Suggest Features

If you have feature suggestions, you can propose them through the following steps:

1. **Search Existing Issues**: First check if someone has already proposed the same suggestion
2. **Create a New Issue**: If no related Issue is found, create a new Issue
3. **Describe the Suggestion in Detail**: Provide the following information:
   - Description of the suggested feature
   - Why this feature is needed
   - Expected behavior of the feature
   - Possible implementation方案 (if any)

### Submit Code

If you want to submit code contributions, please follow these steps:

1. **Fork the Repository**: Fork the project repository to your own account on GitHub
2. **Clone the Repository**: Clone the forked repository to your local machine
   ```bash
   git clone https://github.com/your-username/Cyrene-QwenTTS-GUI.git
   cd Cyrene-QwenTTS-GUI
   ```
3. **Create a Branch**: Create a new branch to develop your feature or fix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```
4. **Install Dependencies**: Install project dependencies
   ```bash
   pip install -r requirements.txt
   ```
5. **Develop Code**: Implement your feature or fix
6. **Test Code**: Ensure your code works correctly
7. **Commit Changes**: Commit your changes
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
8. **Push to GitHub**: Push your branch to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request**: Create a Pull Request on GitHub describing your changes

### Improve Documentation

If you want to improve documentation, you can follow these steps:

1. **Fork the Repository**: Fork the project repository to your own account on GitHub
2. **Clone the Repository**: Clone the forked repository to your local machine
3. **Create a Branch**: Create a new branch to modify documentation
4. **Modify Documentation**: Improve or add documentation content
5. **Commit Changes**: Commit your changes
6. **Push to GitHub**: Push your branch to GitHub
7. **Create a Pull Request**: Create a Pull Request on GitHub describing your changes

## Development Environment Setup

### System Requirements

- **Operating System**: Windows 10/11 (64-bit)
- **Python**: Version 3.8 or higher
- **Git**: For version control

### Install Dependencies

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI.git
   cd Cyrene-QwenTTS-GUI
   ```

2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   # Activate the virtual environment
   # Windows
   venv\Scripts\activate
   # Linux/macOS
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   pip install -r requirements-dev.txt
   ```

4. **Install Development Version**
   ```bash
   pip install -e .
   ```

### Development Tools

Recommended development tools:

- **IDE**: PyCharm or Visual Studio Code
- **Code Formatting**: Black
- **Code Checking**: Flake8
- **Type Checking**: Mypy

### Testing

Before submitting code, please run tests to ensure your changes do not break existing functionality:

```bash
pytest
```

## Code Standards

### Naming Conventions

- **Files and Directories**: Use lowercase letters, separate words with underscores
- **Class Names**: Use camel case (PascalCase)
- **Functions and Variables**: Use lowercase letters, separate words with underscores
- **Constants**: Use all uppercase letters, separate words with underscores

### Code Style

- **Indentation**: Use 4 spaces for indentation
- **Line Length**: Each line of code should not exceed 88 characters
- **Empty Lines**: Use empty lines appropriately to separate different code blocks
- **Comments**: Add comments for complex code to explain its function and logic
- **Docstrings**: Add docstrings for functions, classes, and modules

### Commit Message Standards

Commit messages should follow this format:

```
type(scope): description

detailed description (optional)

reference related issues (if any)
```

**Types** include:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (no functional impact)
- `refactor`: Code refactoring (no new features or bug fixes)
- `perf`: Performance optimization
- `test`: Add or modify tests
- `chore`: Build or dependency changes

**Scope** is optional, specifying the scope of the change, for example:
- `ui`: User interface
- `core`: Core functionality
- `model`: Model-related
- `audio`: Audio processing

**Description** is a short description of the change, no more than 50 characters.

**Detailed description** is a detailed explanation of the change, optional.

**Reference related issues** refers to referencing GitHub Issues related to the change, for example: `Closes #123`.

## Release Process

### Version Number Standards

The project uses semantic versioning:

- **Major Version**: Incremented when making incompatible API changes
- **Minor Version**: Incremented when adding backward-compatible new features
- **Patch Version**: Incremented when making backward-compatible bug fixes

### Release Steps

1. **Update Version Number**: Update the version number in `setup.py` and related files
2. **Update CHANGELOG**: Update the CHANGELOG.md file to record changes in this release
3. **Run Tests**: Ensure all tests pass
4. **Build Distributions**: Build source and binary distributions
5. **Upload Distributions**: Upload distributions to PyPI
6. **Create GitHub Release**: Create a new Release on GitHub and upload the built installation packages

## Contributor Guide

### Become a Contributor

Anyone can become a contributor to Cyrene QwenTTS GUI, regardless of your experience level. We welcome:

- **Code Contributions**: Fix bugs, add new features
- **Documentation Contributions**: Improve documentation, add examples
- **Test Contributions**: Write test cases
- **Community Contributions**: Answer questions, help other users

### Contributor Code of Conduct

As a contributor, we expect you to:

- **Respect Others**: Respect all contributors and users
- **Professional Attitude**: Approach your work with professionalism
- **Active Communication**: Respond promptly to related Issues and Pull Requests
- **Continuous Learning**: Continuously learn and improve your skills

### Contributor Recognition

We greatly value the work of all contributors and recognize contributors through:

- **Contributor List**: List all contributors in README.md
- **GitHub Contribution Graph**: Show contributions through GitHub's contribution graph
- **Release Notes**: Thank contributors in Release notes

## Frequently Asked Questions

### Q: I'm a beginner, how do I start contributing?
A: You can start with:
   - Fixing simple bugs
   - Improving documentation
   - Answering other users' questions
   - Adding tests for the project

### Q: How to get the latest information about the project?
A: You can get the latest information about the project through:
   - Following GitHub repository dynamics
   - Subscribing to project Issues and Pull Requests
   - Joining the project's communication group (if any)

### Q: What process do I need to follow to contribute code?
A: Please refer to the "Submit Code" section in this guide to submit your code contribution according to the process.

### Q: How to communicate with project maintainers?
A: You can communicate with project maintainers through:
   - GitHub Issues and Pull Requests
   - The project's communication group (if any)
   - Email (if provided)

### Q: What if my contribution is rejected?
A: If your contribution is rejected, don't be discouraged. Maintainers will give specific reasons, and you can improve based on feedback and submit again.

## Contact Information

- **GitHub Repository**: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI
- **Issue Tracker**: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/issues
- **Pull Requests**: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/pulls

## License

Cyrene QwenTTS GUI uses a tiered licensing architecture. For details, please see the [LICENSE](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/blob/main/LICENSE) file.

---

Thank you for your interest in and support for the Cyrene QwenTTS GUI project! We look forward to your contributions to make this project better.
