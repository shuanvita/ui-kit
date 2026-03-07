<script setup lang="ts">
import { computed } from 'vue'
import type { VSvgTypes } from '@/components/ui/VSvg/VSvg.types.ts'

const props = defineProps<VSvgTypes>()

const svgAttrs = computed(() => {
  if (props.size !== undefined) return { width: props.size, height: props.size }

  return {
    ...(props.width !== undefined && { width: props.width }),
    ...(props.height !== undefined && { height: props.height }),
  }
})
</script>

<template>
  <svg v-bind="svgAttrs" role="img" aria-hidden="true">
    <use :href="`/svg/${name}.svg`" />
  </svg>
</template>
