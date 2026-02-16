<template>
  <section class="features">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-mic"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Voice Generation' : '语音生成' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Generate natural and fluent speech using Qwen-TTS models, with support for multiple parameter adjustments to meet different scenario needs' : '使用 Qwen-TTS 模型生成自然流畅的语音，支持多种参数调整，满足不同场景需求' }}
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-mic-2"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Voice Cloning' : '语音克隆' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Clone voices from reference audio to create personalized speech output, making the voice more distinctive' : '从参考音频中克隆声音，创建个性化的语音输出，让语音更具特色' }}
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-sliders-horizontal"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Voice Design' : '语音设计' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Create custom voices based on text descriptions, obtaining ideal sound effects through simple text descriptions' : '基于文本描述创建自定义语音，通过简单的文字描述获得理想的声音效果' }}
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-music"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Audio Management' : '音频管理' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Built-in audio browser for easy management and playback of generated audio files, keeping files organized' : '内置音频浏览器，方便管理和播放生成的音频文件，保持文件有序' }}
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-palette"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Modern Interface' : '现代界面' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Fluent design interface with theme switching and animation effects, providing a pleasant user experience' : '流畅设计界面，支持主题切换和动画效果，提供愉悦的用户体验' }}
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="lucide-globe"></i>
          </div>
          <h3 class="feature-title">{{ isEnglish ? 'Multi-language Support' : '多语言支持' }}</h3>
          <p class="feature-description">
            {{ isEnglish ? 'Support for English and Chinese interfaces, meeting the needs of different users and providing localized experience' : '支持中英文界面，满足不同用户的需求，提供本地化体验' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEnglish = computed(() => route.path.startsWith('/en/'))
</script>

<style scoped>
.features {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
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

.feature-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .features {
    padding: 3rem 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}

/* Dark mode support */
html.dark .feature-card {
  background: #1f2937;
  border-color: #374151;
}

html.dark .feature-title {
  color: #f3f4f6;
}

html.dark .feature-description {
  color: #d1d5db;
}
</style>