<template>
  <div class="w-full text-center">
    <div
      class="gradient rounded-lg flex items-center justify-center border border-gray-200"
    >
      <div
        class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step"
      >
        <span class="font-extrabold text-4xl" v-html="icon"></span>
      </div>
      <div
        class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
      >
        <h2 class="font-bold text-sm text-primary">{{ title }}</h2>
        <p class="text-xs text-gray-600" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Step extends Vue {
  @Prop({ default: '' }) icon!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) description!: string
}
</script>
