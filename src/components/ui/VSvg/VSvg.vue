<script setup lang="ts">
import type { VSvgTypes } from '@/components/ui/VSvg/VSvg.types.ts'

const props = withDefaults(defineProps<VSvgTypes>(), {
  size: 30,
})
</script>

<template>
  <svg
    :width="props.width ?? props.size"
    :height="props.height ?? props.size"
    role="img"
    aria-hidden="true"
  >
    <use :href="`/svg/${props.name}.svg`" />
  </svg>
</template>
