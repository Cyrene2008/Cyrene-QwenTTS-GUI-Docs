<template>
  <section class="tech">
    <div class="container">
      <h2 class="tech-title">{{ isEnglish ? 'Technical Features' : '技术特点' }}</h2>
      <div class="tech-grid">
        <div class="tech-card">
          <div class="tech-icon">
            <i class="lucide-code"></i>
          </div>
          <h3 class="tech-subtitle">{{ isEnglish ? 'Based on PySide6 and FluentUI' : '基于 PySide6 和 FluentUI' }}</h3>
          <p class="tech-description">
            {{ isEnglish ? 'Modern interface that is beautiful and easy to use, providing a smooth user experience' : '构建的现代界面，美观且易用，提供流畅的用户体验' }}
          </p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">
            <i class="lucide-brain"></i>
          </div>
          <h3 class="tech-subtitle">{{ isEnglish ? 'Supports Multiple Qwen-TTS Models' : '支持多种 Qwen-TTS 模型' }}</h3>
          <p class="tech-description">
            {{ isEnglish ? 'Provides high-quality speech output, adapting to different scenario needs' : '提供高质量语音输出，适应不同场景的需求' }}
          </p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">
            <i class="lucide-zap"></i>
          </div>
          <h3 class="tech-subtitle">GPU 加速</h3>
          <p class="tech-description">
            {{ isEnglish ? 'Improves processing speed, reduces waiting time, and enhances user experience' : '提高处理速度，减少等待时间，提升用户体验' }}
          </p>
        </div>
        <div class="tech-card">
          <div class="tech-icon">
            <i class="lucide-user-check"></i>
          </div>
          <h3 class="tech-subtitle">{{ isEnglish ? 'Intuitive User Experience' : '直观的用户体验' }}</h3>
          <p class="tech-description">
            {{ isEnglish ? 'Suitable for users of all skill levels, with simple and clear operation' : '适合各种技能水平的用户，操作简单明了' }}
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
.tech {
  padding: 4rem 0;
  background: #f9fafb;
  border-radius: 0.5rem;
  margin: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.tech-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
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

.tech-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tech-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.tech-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .tech {
    padding: 3rem 0;
    margin: 3rem 0;
  }
  
  .tech-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-card {
    padding: 1.5rem;
  }
}

/* Dark mode support */
html.dark .tech {
  background: #111827;
}

html.dark .tech-title {
  color: #f3f4f6;
}

html.dark .tech-card {
  background: #1f2937;
  border-color: #374151;
}

html.dark .tech-subtitle {
  color: #f3f4f6;
}

html.dark .tech-description {
  color: #d1d5db;
}
</style>