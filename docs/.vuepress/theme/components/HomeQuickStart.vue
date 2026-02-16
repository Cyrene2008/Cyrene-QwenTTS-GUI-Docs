<template>
  <section class="quick-start">
    <div class="container">
      <h2 class="quick-start-title">{{ isEnglish ? 'Quick Start' : '快速开始' }}</h2>
      <div class="quick-start-card">
        <div class="quick-start-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">{{ isEnglish ? 'Download' : '下载' }}</h3>
              <p class="step-description">
                {{ isEnglish ? 'Download the latest version of Cyrene QwenTTS GUI from the GitHub Releases page' : '从 GitHub Releases 页面下载最新版本的 Cyrene QwenTTS GUI' }}
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">{{ isEnglish ? 'Install Dependencies' : '安装依赖' }}</h3>
              <p class="step-description">
                {{ isEnglish ? 'Install the necessary dependencies according to the installation guide' : '按照安装指南安装必要的依赖项' }}
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">{{ isEnglish ? 'Run the Application' : '运行应用' }}</h3>
              <p class="step-description">
                {{ isEnglish ? 'Launch the application and start generating speech' : '启动应用程序并开始生成语音' }}
              </p>
            </div>
          </div>
        </div>
        <div class="quick-start-actions">
          <a :href="isEnglish ? '/en/doc/guide/start' : '/doc/guide/start'" class="btn btn-primary">
            <span class="icon">
              <i class="lucide-book-open"></i>
            </span>
            {{ isEnglish ? 'View Detailed Guide' : '查看详细指南' }}
          </a>
          <a href="https://github.com/Cyrene2008/Cyrene-QwenTTS-GUI/releases" class="btn btn-secondary">
            <span class="icon">
              <i class="lucide-download"></i>
            </span>
            {{ isEnglish ? 'Download Now' : '立即下载' }}
          </a>
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
.quick-start {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.quick-start-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

.quick-start-card {
  background: white;
  border-radius: 0.75rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
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
  background: linear-gradient(135deg, #ffb7c5 0%, #ff6b8b 100%);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: white;
  color: #ff6b8b;
  border: 1px solid #ffb7c5;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.btn-secondary:hover {
  background: #fef2f4;
  transform: translateY(-2px);
}

.icon {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .quick-start {
    padding: 3rem 0;
  }
  
  .quick-start-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
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
html.dark .quick-start-card {
  background: #1f2937;
  border-color: #374151;
}

html.dark .quick-start-title {
  color: #f3f4f6;
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
  background: #1f2937;
  border-color: #ff8fab;
  color: #ff8fab;
}

html.dark .btn-secondary:hover {
  background: #374151;
}
</style>