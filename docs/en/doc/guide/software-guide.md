---
title: Software Guide
time: 2024-01-01
tags:
  - Guide
  - Software
---

# Software Guide

This document provides a detailed user guide for Cyrene QwenTTS GUI, helping you quickly get started and make full use of the software's features.

## Installation Guide

### System Requirements

- **Operating System**: Windows 10/11 (64-bit)
- **Processor**: Minimum Intel Core i5-12400 or equivalent performance processor
- **Memory**: At least 16GB RAM
- **Storage**: At least 12GB free space (runtime environment ~5GB, default model file ~4GB)
- **Graphics Card (Not Required)**: CUDA-compatible graphics card
- **Network**: Internet connection required for first use to download runtime environment and models

### Installation Steps

1. **Download Program**
   - Download the latest integrated package or executable file and requirements.txt from GitHub Releases page
   - Select the version suitable for your system (Windows 64-bit)

2. **Extract/Prepare Environment**
   - If you downloaded the integrated package, extract it directly to the target folder
   - If you downloaded the executable file and requirements.txt, place them in the same folder

### First Launch

When launching the software for the first time (non-integrated package), the system will:

1. **Initialize Configuration**: Create default configuration files
2. **Install Environment**: Install necessary Python libraries (based on requirements.txt and program built-in)
3. **Download Models**: Download the default Qwen-TTS model
4. **Welcome Wizard**: Display a welcome wizard to guide you through initial setup

Why not write the libraries in requirements.txt into the program:
   - Because the libraries built into the program are tested and verified, while the libraries in requirements.txt vary according to user needs and environment (e.g., users need specific versions of libraries).
   - The built-in libraries can ensure the normal operation of the software, while the libraries in requirements.txt can be customized according to user needs (e.g., installing specific versions of libraries).

## Basic Usage

### Voice Generation (Model Qwen3-...-CustomVoice)

1. **Enter Text**
   - Enter the text to be converted in the text input box in the central workspace
   - You can enter multi-line text, and the system will process it automatically

2. **Select Model**
   - Select an appropriate model in the "Model Selection" section of the left panel
   - Recommended to use "Qwen3-...-1.7B-CustomVoice" for best results (if your device performance is limited, please use 0.6B)

3. **Select Speaker**
   - Select an appropriate speaker in the "Speaker Selection" section of the left panel

4. **Generate Voice**
   - Click the "Generate Audio" button
   - Wait for the system to complete processing (processing time depends on text length and hardware performance)

5. **Preview and Save**
   - Click the "Play" button to preview the generated voice
   - When satisfied, click the "Save" button to save as an audio file

### Voice Design (Model Qwen3-...-CustomVoice)

1. **Enter Voice Description**
   - For example: A young female, sounds happy

2. **Enter Text**
   - Enter the text to be generated in the text input box

3. **Generate Voice**
   - Click the "Start Generation" button
   - Wait for the system to complete processing (processing time depends on text length and hardware performance)

4. **Preview and Save**
   - Click the "Play" button to preview the generated voice
   - When satisfied, click the "Save" button to save as an audio file

### Voice Cloning (Model Qwen3-...-Base)

1. **Switch to Voice Cloning Interface**
   - Click the "Voice Clone" tab in the top navigation bar

2. **Upload Reference Audio**
   - Click the "Browse" button
   - Select an audio file containing clear speech (recommended 5-10 seconds or longer)
   - Enter the text of the reference audio (optional)

3. **Enter Text**
   - Enter the text to be converted in the text input box

4. **Generate Cloned Voice**
   - Click the "Clone" button
   - The system will generate a voice imitating the style of the reference audio (processing time depends on text length and hardware performance)

5. **Preview and Save**
   - After generation is complete, the program will automatically play the cloned voice
   - You can click the "Play" button to preview the generated voice again, or drag the progress bar to adjust the playback position
   - When satisfied, click the "Save" button to save as an audio file (if you forget to save, don't worry, the program will automatically save to the default path /outputs)

### Audio Browser

1. **Switch to Audio Browser Interface**
   - Click the "Audio Browser" tab in the left navigation bar

2. **View Audio List**
   - All generated audio files will be displayed in the list

3. **Play Audio**
   - Double-click the audio file in the list to play it
   - You can use the progress bar to adjust the playback position

## Advanced Features

### Voice Presets

The software provides multiple voice presets to help you quickly apply specific voice styles:

- **Default**: Standard voice style
- **Sweet**: Sweet and cute voice style
- **Mature**: Mature and steady voice style
- **Professional**: Professional broadcasting voice style
- **Friendly**: Friendly and natural voice style
- **Passionate**: Passionate voice style

### Custom Presets

You can create and save your own voice presets:

1. **Adjust Parameters**: Adjust voice parameters to your satisfaction
2. **Save Preset**: Click the "Save Preset" button
3. **Name Preset**: Enter a name for your preset
4. **Apply Preset**: Select your saved preset from the preset list

## Troubleshooting

### Common Issues

1. **Model Download Failed**
   - **Cause**: Network connection issues or model server temporarily unavailable
   - **Solution**: Check network connection and try again later

2. **Voice Generation Failed**
   - **Cause**: Text too long or model loading failed
   - **Solution**: Shorten text length, or reload the model

3. **Poor Voice Quality**
   - **Cause**: Inappropriate model selection
   - **Solution**: Try using a higher parameter model (1.7B)

4. **Software Crash**
   - **Cause**: Insufficient system performance/resources
   - **Solution**: Try clearing background programs and restarting the software; or switch to another computer~

### Contact Support

If you encounter problems that cannot be resolved, you can contact support through the following methods:

- **GitHub Issues**: Submit an Issue in the GitHub repository

## Performance Optimization

### Hardware Optimization

- **Use GPU Acceleration**: Recommended to use NVIDIA graphics cards
- **Increase Memory**: For processing long text, 16GB or more memory is recommended
- **Use SSD**: Install the software and models on an SSD to improve loading speed (if you don't have an SSD but have more than 32GB of memory, you can also try installing in RamDisk, storing the software in memory, but remember to handle persistence storage (copy files from RamDisk to hard disk before shutdown))

### Text Processing Optimization

- **Segment Processing**: For long text, it is recommended to process it in segments for better results
- **Avoid Complex Formats**: Try to use simple text formats and avoid excessive special symbols
- **Use Punctuation Properly**: Use punctuation marks appropriately to get more natural pauses

## Advanced Configuration

## Frequently Asked Questions

### Q: Does the software require an internet connection?
A: Internet connection is required for first use to download environment/models, subsequent use can run offline. (Note: The integrated package does not include models)

### Q: Can the generated voice be used for commercial purposes?
A: Please refer to the Qwen-TTS model license agreement and relevant laws and regulations.

### Q: What audio output formats are supported by the software?
A: WAV format is supported.

### Q: How to uninstall the software?
A: Simply delete the directory where the software is located.

## Copyright Information

Cyrene QwenTTS GUI

- **Author**: Cyrene2008
UI designed by Cyrene2008
- **Version**: v0.1.0
- **License**: GPLv3 + Additional Statement (see https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/blob/main/LICENSE for details)
- **Project Address**: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI

This software is based on the following open source projects:
- Qwen-TTS: https://github.com/QwenLM/Qwen-TTS
- PySide6: https://wiki.qt.io/Qt_for_Python
- FluentUI: https://github.com/microsoft/fluentui

## Disclaimer

- This software is for personal learning and research use only
- Please comply with relevant laws and regulations and do not use it for illegal purposes
- The author is not responsible for any consequences arising from the use of this software
- The voice models available in the software may have certain limitations, and the function to allow users to load other models may be added in the future
