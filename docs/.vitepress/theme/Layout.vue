<script setup>
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'

const route = useRoute()

function addLive2d() {
  if (document.getElementById('live2d-script')) return
  const s = document.createElement('script')
  s.id = 'live2d-script'
  s.src = '/dist/autoload.js'
  document.head.appendChild(s)
}

function removeLive2d() {
  const s = document.getElementById('live2d-script')
  if (s) s.remove()
  const canvas = document.querySelector('canvas.live2d')
  if (canvas) canvas.remove()
}

onMounted(() => {
  nextTick(() => {               // 等路由就绪
    route.path === '/' ? addLive2d() : removeLive2d()
  })
})

watch(() => route.path, (path) => {
  path === '/' ? addLive2d() : removeLive2d()
})


</script>

<template>
  <DefaultTheme.Layout />
</template>