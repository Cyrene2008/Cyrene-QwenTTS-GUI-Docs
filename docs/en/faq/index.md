---
title: FAQ
description: Cyrene QwenTTS GUI Frequently Asked Questions
---

# FAQ

## Installation Issues

### 1. What to do if there are errors when installing dependencies?

- **Issue**: Errors occur when running `pip install -r requirements.txt`
- **Solution**:
  - Ensure you are using Python 3.10-3.12
  - Try updating pip with `pip install --upgrade pip`
  - If it's a network issue, you can use a domestic mirror:
    ```bash
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
    ```

### 2. What to do if the application doesn't start?

- **Issue**: The application doesn't start after double-clicking the executable
- **Solution**:
  - Check if all dependencies are installed
  - Try running as administrator
  - Check the log files in the application directory for specific error messages

## Usage Issues

### 1. What to do if there are errors when generating speech?

- **Issue**: Errors occur after clicking the generate button
- **Solution**:
  - Check network connection (models need to be downloaded for first use)
  - Ensure there is enough disk space
  - Try using smaller text segments
  - Check if the model is downloaded correctly

### 2. What to do if voice cloning result is not ideal?

- **Issue**: The cloned voice doesn't sound natural enough
- **Solution**:
  - Use longer reference audio (15-30 seconds)
  - Ensure the reference audio is clear with no background noise
  - The reference speaker should maintain a steady pace and tone
  - Try adjusting cloning parameters

### 3. What to do if the application runs slowly?

- **Issue**: The application runs slowly, and speech generation takes a long time
- **Solution**:
  - Ensure GPU acceleration is enabled (if available)
  - Close other programs that are using system resources
  - Choose smaller models for testing
  - Increase system memory (if possible)

## Other Issues

### 1. Where can I get more help?

- Visit the [GitHub Issues](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/issues) page

### 2. How to contribute code?

- Fork the [GitHub repository](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI)
- Submit a Pull Request
- For more details, see the [Contribution Guide](/en/doc/resources/contribute)

### 3. Which operating systems are supported?

- Currently mainly supports Windows 10/11