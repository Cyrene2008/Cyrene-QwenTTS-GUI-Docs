---
title: 开始使用
description: 如何开始使用 Cyrene QwenTTS GUI
---

# 开始使用

## 系统要求

- **操作系统**：Windows 10/11
- **CPU 版本**：最低 16GB 运行内存，最低要求Intel i5-12400/AMD R5600，推荐Intel i7-13700K/AMD R7 7800X3D及更高性能的CPU
- **GPU 版本**：最低 16GB 运行内存，6GB 及以上显存的 Nvidia 显卡设备(最低要求GTX 1070或同等性能显卡；推荐RTX 3060/4060及更高性能的显卡)
- **存储空间**：至少 12GB 可用空间（单个模型约 4GB，环境约 6GB）

## 下载与安装

### 方案一：直接下载可执行文件(推荐)

1. **下载最新版本**
   - 从 [GitHub Releases](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases) 页面下载最新版本的 Cyrene QwenTTS GUI

2. **下载依赖列表文件**
   - 下载 [requirements.txt](https://gh-proxy.org/https://raw.githubusercontent.com/Cyrene2008/Cyrene-QwenTTS-GUI/refs/heads/main/requirements.txt) 文件
   - 将其与可执行文件放在同一目录中

3. **运行应用**
   - 双击可执行文件启动应用程序

### 方案二：从源代码编译(不推荐)

1. **克隆仓库**
   - 克隆 [GitHub 仓库](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI)

2. **安装依赖**
   - 要求：Python 3.10-3.12
   - 运行：
     ```bash
     pip install -r requirements.txt
     ```

3. **运行应用**
   - 执行：
     ```bash
     python package.py
     ```

## 首次启动

当您首次启动 Cyrene QwenTTS GUI 时，您将看到向导界面。根据向导完成初始设置，包括：

- 选择语言（英语或中文）
- 根据实际情况选择安装运行环境（GPU环境/CPU环境）

## 基本操作

### 语音生成(使用Qwen3-...-CustomVoice模型)
1. 在主界面选择 "生成" 选项卡
2. 选择合适的模型和说话人
3. 输入要转换为语音的文本
4. 点击 "生成" 按钮
5. 预览生成的语音并保存

### 语音设计(使用Qwen3-...-CustomVoice模型)
1. 在主界面选择 "设计" 选项卡
2. 输入语音描述（例如："年轻女性声音，快乐的语调"）
3. 输入要生成的文本
4. 点击 "生成" 按钮
5. 预览设计的语音并保存

### 语音克隆(使用Qwen3-...-Base模型)
1. 在主界面选择 "克隆" 选项卡
2. 选择参考音频文件
3. 输入要克隆声音说出的文本（可选）
4. 点击 "克隆" 按钮
5. 预览克隆的语音并保存

### 音频浏览
1. 在主界面选择 "音频浏览" 选项卡
2. 浏览所有生成的音频文件
3. 双击文件播放
4. 点击 "打开文件夹" 按钮查看文件夹位置

## 设置

在 "设置" 选项卡中，您可以：

- 更改界面语言

## 常见问题

如果您遇到任何问题，请查看 [常见问题](/faq/) 页面或访问 [GitHub Issues](https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/issues) 页面寻求帮助。