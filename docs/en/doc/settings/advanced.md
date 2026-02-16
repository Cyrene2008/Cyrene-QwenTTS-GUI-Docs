---
title: Advanced Settings
time: 2024-01-01
tags:
  - Settings
  - Advanced
---

# Advanced Settings

This section introduces the advanced settings options for Cyrene QwenTTS GUI, suitable for users with certain technical backgrounds.

## Configuration File

### Configuration File Location

Default configuration file location:
- Windows: `%APPDATA%\Cyrene QwenTTS GUI\config.json`

### Manual Configuration Editing

You can manually edit this file for advanced configuration, but please note:
- Back up the original file before editing
- Ensure correct JSON format
- Incorrect configuration may cause the software to not run normally

### Configuration File Structure

The configuration file uses JSON format and contains the following main settings:

```json
{
  "language": 0,  // 0: Chinese, 1: English
  "fontScale": 1.0  // Font scaling ratio
}
```

## Environment Settings

### First Run Setup

When running the software for the first time, the system will automatically detect the environment and prompt you to select the installation type:

- **GPU Version**: Suitable for users with NVIDIA graphics cards, faster inference speed
- **CPU Version**: Suitable for users without GPU, better compatibility

### Mirror Source Selection

During environment installation, you can select the following mirror sources:

- **Aliyun Mirror**: Recommended, faster download speed
- **Official Source (PyPI)**: Stable and reliable

Friendly reminder: If you encounter download failure with a certain mirror source, you can click retry and switch to another mirror source to continue installation.

## System Requirements

### Hardware Requirements

#### CPU Version
- **CPU**: Intel Core i5 or equivalent
- **Memory**: At least 8GB RAM
- **Storage**: At least 12GB free space

#### GPU Version (Recommended)
- **CPU**: Intel Core i5 or equivalent
- **Memory**: At least 16GB RAM
- **GPU**: NVIDIA GPU with at least 8GB VRAM
- **Storage**: At least 12GB free space

### Software Requirements

- **Operating System**: Windows 10/11 (64-bit) (Only supported)
- **Python**: Version 3.10-3.12
- **PyTorch**: Version 2.0 or higher
- **CUDA**: Version 11.7 or higher (for GPU acceleration)

### Storage Explanation
- Single model: approximately 4GB
- Environment installation: approximately 6GB
- Therefore, at least 12GB of free space is required

## Troubleshooting

### Common Issues

1. **Environment Installation Failed**
   - **Cause**: Network connection issues or mirror source unavailable
   - **Solution**: Try using a different mirror source, or check network connection; if that doesn't work, use a proxy (recommended to enable TUN mode proxy)

2. **CUDA Unavailable**
   - **Cause**: Graphics card does not support CUDA or drivers not installed, environment installation error
   - **Solution**: Install the latest NVIDIA graphics card drivers, or use CPU version; try using the integrated package, which has been tested and verified by the developer

3. **Model Download Failed**
   - **Cause**: Network connection issues or model server temporarily unavailable; your hard drive may have crashed
   - **Solution**: Check network connection and try again later; clear up disk space

### Log Files

Log file location:
- Windows: `%APPDATA%\Cyrene QwenTTS GUI\logs`

When encountering problems, you can check the log files to get detailed error information.