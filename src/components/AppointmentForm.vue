<template>
  <form @submit.prevent="addAppointment">
    <BaseInput label="Animal" v-model="animal" />
    <BaseInput label="Veterinario" v-model="vet" />
    <BaseInput label="Fecha" type="date" v-model="date" />
    <BaseInput label="Hora" type="time" v-model="time" />
    <BaseButton type="submit">Agregar Cita</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"
import type { Appointment } from "../types/Appointment"

const emit = defineEmits<{
  (e: 'add', appointment: Appointment): void
}>()

const animal = ref("")
const vet = ref("")
const date = ref("")
const time = ref("")

const addAppointment = () => {
  if (!animal.value || !vet.value || !date.value || !time.value) {
    alert("Todos los campos son obligatorios")
    return
  }
  emit("add", {
    id: Date.now(),
    animal: animal.value,
    vet: vet.value,
    date: date.value,
    time: time.value
  })
  animal.value = vet.value = date.value = time.value = ""
}
</script>