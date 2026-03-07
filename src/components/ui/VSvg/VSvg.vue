<script setup lang="ts">
import { computed } from 'vue'
import type { VSvgTypes } from '@/components/ui/VSvg/VSvg.types.ts'

const { name, size, width, height } = defineProps<VSvgTypes>()

const svgAttrs = computed(() => {
  if (size !== undefined) return { width: size, height: size }

  return {
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
  }
})
</script>

<template>
  <svg v-bind="svgAttrs" role="img" aria-hidden="true">
    <use :href="`/svg/${name}.svg`" />
  </svg>
</template>
