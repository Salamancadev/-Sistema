<template>
  <button :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: "button" }
})
</script>

<style scoped>
button {
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #1b5e20;
}
</style>