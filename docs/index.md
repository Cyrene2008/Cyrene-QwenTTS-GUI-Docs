---
home: true
config:
  - type: doc-hero
    background: tint-plate
    hero:
      name: Cyrene QwenTTS GUI
      text: 一个现代化的 Qwen-TTS 图形界面
      tagline: 基于 PySide6 和 FluentUI 构建，提供高质量语音生成、克隆和设计功能
      image: /images/Cyrene.png
      actions:
        - theme: brand
          text: 下载
          icon: lucide:download
          link: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases
        - theme: brand
          text: 阅读文档
          icon: lucide:list-start
          link: /doc/guide/start
        - theme: alt
          text: GitHub 仓库
          icon: fa-brands:github
          link: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI

  - type: features
    features:
      - title: 语音生成
        icon: lucide:volume-2
        details: 使用 Qwen-TTS 模型生成自然流畅的语音，支持多种参数调整，满足不同场景需求
      - title: 语音克隆
        icon: lucide:mic
        details: 从参考音频中克隆声音，创建个性化的语音输出，让语音更具特色
      - title: 语音设计
        icon: lucide:palette
        details: 基于文本描述创建自定义语音，通过简单的文字描述获得理想的声音效果
      - title: 音频管理
        icon: lucide:music
        details: 内置音频浏览器，方便管理和播放生成的音频文件，保持文件有序
      - title: 现代界面
        icon: lucide:sparkles
        details: 现代化设计，提供愉悦的用户体验
      - title: 多语言支持
        icon: lucide:globe
        details: 支持中英文界面，满足不同用户的需求，提供本地化体验

  - type: markdown
    content: |
      ## 技术特点

      <div class="tech-grid">
        <div class="tech-card">
          <h3 class="tech-subtitle">基于 PySide6 和 FluentUI</h3>
          <p class="tech-description">
            构建的现代界面，美观且易用，提供流畅的用户体验
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">支持多种 Qwen-TTS 模型</h3>
          <p class="tech-description">
            提供高质量语音输出，适应不同场景的需求
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">GPU 加速</h3>
          <p class="tech-description">
            提高处理速度，减少等待时间，提升用户体验
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">直观的用户体验</h3>
          <p class="tech-description">
            适合各种技能水平的用户，操作简单明了
          </p>
        </div>
      </div>

      ## 快速开始

      <div class="quick-start-card">
        <div class="quick-start-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">下载</h3>
              <p class="step-description">
                从 GitHub Releases 页面下载最新版本的 Cyrene QwenTTS GUI
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">安装依赖</h3>
              <p class="step-description">
                按照安装指南安装必要的依赖项
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">运行应用</h3>
              <p class="step-description">
                启动应用程序并开始生成语音
              </p>
            </div>
          </div>
        </div>
        <div class="quick-start-actions">
          <a href="/doc/guide/start" class="btn btn-primary">
            查看详细指南
          </a>
          <a href="https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases" class="btn btn-secondary">
            立即下载
          </a>
        </div>
      </div>

      <style>
      /* Global link styles */
      a {
        color: #ff6b8b !important;
      }

      a:hover {
        color: #ff527b !important;
      }

      /* Hero section text */
      .vp-hero .name {
        color: #ff6b8b !important;
      }

      /* Tech section */
      .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
      }

      .tech-card {
        background: white;
        border-radius: 0.75rem;
        padding: 2rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .tech-card:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      .tech-subtitle {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #ff6b8b;
      }

      .tech-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 0;
      }

      /* Quick start section */
      .quick-start-card {
        background: white;
        border-radius: 0.75rem;
        padding: 2.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border: 1px solid #e5e7eb;
        margin: 3rem 0;
      }

      .quick-start-steps {
        margin-bottom: 2.5rem;
      }

      .step {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        gap: 1.5rem;
      }

      .step:last-child {
        margin-bottom: 0;
      }

      .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.125rem;
        flex-shrink: 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .step-content {
        flex: 1;
      }

      .step-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #1f2937;
      }

      .step-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 0;
      }

      .quick-start-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }

      .btn-primary {
        background: #ff6b8b;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.15);
        background: #ff527b;
      }

      .btn-secondary {
        background: rgba(255, 107, 139, 0.1);
        color: #ff6b8b;
        border: 1px solid rgba(255, 107, 139, 0.3);
      }

      .btn-secondary:hover {
        background: rgba(255, 107, 139, 0.2);
        transform: translateY(-2px);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .tech-grid {
          grid-template-columns: 1fr;
        }

        .quick-start-card {
          padding: 1.5rem;
        }

        .step {
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .step-number {
          width: 36px;
          height: 36px;
          font-size: 1rem;
        }

        .quick-start-actions {
          flex-direction: column;
          align-items: center;
          padding-top: 1.5rem;
        }

        .btn {
          width: 200px;
          justify-content: center;
        }
      }

      /* Dark mode support */
      html.dark .tech-card {
        background: #1f2937;
        border-color: #374151;
      }

      html.dark .tech-subtitle {
        color: #ff8fab;
      }

      html.dark .tech-description {
        color: #d1d5db;
      }

      html.dark .quick-start-card {
        background: #1f2937;
        border-color: #374151;
      }

      html.dark .step-title {
        color: #f3f4f6;
      }

      html.dark .step-description {
        color: #d1d5db;
      }

      html.dark .quick-start-actions {
        border-top-color: #374151;
      }

      html.dark .btn-secondary {
        background: rgba(255, 138, 171, 0.1);
        color: #ff8fab;
        border-color: rgba(255, 138, 171, 0.3);
      }

      html.dark .btn-secondary:hover {
        background: rgba(255, 138, 171, 0.2);
      }

      /* Dark mode link styles */
      html.dark a {
        color: #ff8fab !important;
      }

      html.dark a:hover {
        color: #ff7aa3 !important;
      }

      html.dark .vp-hero .name {
        color: #ff8fab !important;
      }
      </style>