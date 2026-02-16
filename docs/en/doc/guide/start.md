---
title: Getting Started
description: How to get started with Cyrene QwenTTS GUI
---

# Getting Started

## System Requirements

- **Operating System**: Windows 10/11
- **CPU Version**: Minimum 16GB RAM, minimum requirement Intel i5-12400/AMD R5600, recommended Intel i7-13700K/AMD R7 7800X3D and higher performance CPU
- **GPU Version**: Minimum 16GB RAM, Nvidia graphics card device with 6GB or more VRAM (minimum requirement GTX 1070 or equivalent performance graphics card; recommended RTX 3060/4060 and higher performance graphics card)
- **Storage**: At least 12GB free space (single model ~4GB, environment ~6GB)

## Download and Installation

### Option 1: Download Executable File Directly (Recommended)

1. **Download the Latest Version**
   - Download the latest version of Cyrene QwenTTS GUI from the [GitHub Releases](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases) page

2. **Download Dependencies List File**
   - Download the [requirements.txt](https://gh-proxy.org/https://raw.githubusercontent.com/Cyrene2008/Cyrene-QwenTTS-GUI/refs/heads/main/requirements.txt) file
   - Place it in the same directory as the executable file

3. **Run the Application**
   - Double-click the executable file to launch the application

### Option 2: Build from Source (Not Recommended)

1. **Clone the Repository**
   - Clone the [GitHub Repository](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI)

2. **Install Dependencies**
   - Requirements: Python 3.10-3.12
   - Run:
     ```bash
     pip install -r requirements.txt
     ```

3. **Run the Application**
   - Execute:
     ```bash
     python package.py
     ```

## First Launch

When you first launch Cyrene QwenTTS GUI, you will see a wizard interface. Complete the initial setup according to the wizard, including:

- Select language (English or Chinese)
- Choose to install the runtime environment based on your actual situation (GPU environment/CPU environment)

## Basic Operations

### Voice Generation (Using Qwen3-...-CustomVoice Model)
1. Select the "Generation" tab in the main interface
2. Choose the appropriate model and speaker
3. Enter the text to convert to speech
4. Click the "Generate" button
5. Preview the generated speech and save

### Voice Design (Using Qwen3-...-CustomVoice Model)
1. Select the "Design" tab in the main interface
2. Enter a voice description (e.g., "A young female voice, happy tone")
3. Enter the text to generate
4. Click the "Generate" button
5. Preview the designed voice speech and save

### Voice Cloning (Using Qwen3-...-Base Model)
1. Select the "Clone" tab in the main interface
2. Upload a reference audio file
3. Enter the text for the cloned voice to speak (optional)
4. Click the "Clone" button
5. Preview the cloned voice speech and save

### Audio Browser
1. Select the "Audio Browser" tab in the main interface
2. Browse all generated audio files
3. Double-click files to play
4. Click "Open Folder" button to view file location

## Settings

In the "Settings" tab, you can:

- Change interface language

## Frequently Asked Questions

If you encounter any issues, please check the [FAQ](/en/faq/) page or visit the [GitHub Issues](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/issues) page for help.
