<template>
  <input
    :id="id"
    :type="type || 'text'"
    :value="localValue"
    @input="onInput"
  />
</template>


<script lang="ts" setup>
import { ref, watch } from 'vue'

interface Props {
  id: string
  type?: string
  modelValue: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)

// Sincronizar cuando cambie desde fuera
watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal
  }
)

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

