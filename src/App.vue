<script setup lang="ts">
import VSvg from '@/components/ui/VSvg/VSvg.vue'
import VLink from '@/components/ui/VLink/VLink.vue'
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-xl">Ui-kit</h1>
    <div>
      <h2>Svg</h2>
      <div>
        <VSvg class="text-purple-700 hover:text-purple-500" name="outline/instagram" />
        <VSvg class="text-orange-700 hover:text-orange-500" name="filled/youtube" />
      </div>
    </div>
    <div>
      <h2>Link</h2>
      <div class="space-y-5">
        <div>
          <h3>Pre Icon</h3>
          <VLink preIcon="outline/instagram" :iconSize="20" href="#">Instagram</VLink>
        </div>
        <div>
          <h3>Post Icon</h3>
          <VLink postIcon="filled/youtube" :iconSize="20" href="#">Youtube</VLink>
        </div>
        <div>
          <h3>Icon</h3>
          <VLink icon="filled/youtube" :iconSize="32" href="#" />
        </div>
        <div>
          <h3>Simple External link</h3>
          <VLink href="#">Simple External link</VLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
