---
home: true
config:
  - type: doc-hero
    background: tint-plate
    hero:
      name: Cyrene QwenTTS GUI
      text: A Modern Qwen-TTS GUI
      tagline: Built with PySide6 and FluentUI, providing high-quality speech generation, cloning, and design features
      image: /images/Cyrene.png
      actions:
        - theme: brand
          text: Download
          icon: lucide:download
          link: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases
        - theme: brand
          text: Read Documentation
          icon: lucide:list-start
          link: /en/doc/guide/start
        - theme: alt
          text: GitHub Repository
          icon: fa-brands:github
          link: https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI

  - type: features
    features:
      - title: Speech Generation
        icon: lucide:volume-2
        details: Generate natural and fluent speech using Qwen-TTS models, with multiple parameter adjustments to meet different scenario needs
      - title: Voice Cloning
        icon: lucide:mic
        details: Clone voices from reference audio to create personalized speech output, making voices more distinctive
      - title: Voice Design
        icon: lucide:palette
        details: Create custom voices based on text descriptions, obtaining ideal sound effects through simple text descriptions
      - title: Audio Management
        icon: lucide:music
        details: Built-in audio browser for easy management and playback of generated audio files, keeping files organized
      - title: Modern Interface
        icon: lucide:sparkles
        details: Modern UI
      - title: Multi-language Support
        icon: lucide:globe
        details: Support for both English and Chinese interfaces, meeting the needs of different users and providing localized experience

  - type: markdown
    content: |
      ## Technical Features

      <div class="tech-grid">
        <div class="tech-card">
          <h3 class="tech-subtitle">Based on PySide6 and FluentUI</h3>
          <p class="tech-description">
            Modern interface built for beauty and ease of use, providing a smooth user experience
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">Supports Multiple Qwen-TTS Models</h3>
          <p class="tech-description">
            Provides high-quality speech output, adapting to different scenario needs
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">GPU Acceleration</h3>
          <p class="tech-description">
            Improves processing speed, reduces waiting time, and enhances user experience
          </p>
        </div>
        <div class="tech-card">
          <h3 class="tech-subtitle">Intuitive User Experience</h3>
          <p class="tech-description">
            Suitable for users of all skill levels, with simple and clear operation
          </p>
        </div>
      </div>

      ## Quick Start

      <div class="quick-start-card">
        <div class="quick-start-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">Download</h3>
              <p class="step-description">
                Download the latest version of Cyrene QwenTTS GUI from the GitHub Releases page
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">Install Dependencies</h3>
              <p class="step-description">
                Install necessary dependencies according to the installation guide
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">Run the Application</h3>
              <p class="step-description">
                Launch the application and start generating speech
              </p>
            </div>
          </div>
        </div>
        <div class="quick-start-actions">
          <a href="/en/doc/guide/start" class="btn btn-primary">
            View Detailed Guide
          </a>
          <a href="https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases" class="btn btn-secondary">
            Download Now
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