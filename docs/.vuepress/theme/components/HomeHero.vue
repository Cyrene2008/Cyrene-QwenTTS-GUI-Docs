<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-image">
          <img src="/images/Cyrene.png" alt="Cyrene QwenTTS GUI" class="logo" />
        </div>
        <div class="hero-text">
          <h1 class="hero-title">Cyrene QwenTTS GUI</h1>
          <p class="hero-description">
            {{ isEnglish ? 'A modern GUI for Qwen-TTS, built with PySide6 and FluentUI' : '一个现代化的 Qwen-TTS 图形界面，基于 PySide6 和 FluentUI 构建' }}
          </p>
          <div class="hero-buttons">
            <a href="https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases" class="btn btn-primary">
              <span class="icon">
                <i class="lucide-download"></i>
              </span>
              {{ isEnglish ? 'Download' : '下载' }}
            </a>
            <a :href="isEnglish ? '/en/doc/guide/start' : '/doc/guide/start'" class="btn btn-secondary">
              <span class="icon">
                <i class="lucide-book-open"></i>
              </span>
              {{ isEnglish ? 'Read Documentation' : '阅读文档' }}
            </a>
            <a href="https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI" class="btn btn-secondary">
              <span class="icon">
                <i class="lucide-github"></i>
              </span>
              GitHub
            </a>
          </div>
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
.hero {
  background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
  color: white;
  padding: 4rem 0;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-image {
  margin-bottom: 2rem;
}

.logo {
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 800px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
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
  background: white;
  color: #ff6b8b;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.icon {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
    justify-content: center;
  }
}
</style>