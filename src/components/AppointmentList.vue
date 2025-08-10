<template>
  <div>
    <h2>Citas Programadas</h2>
    <ul v-if="appointments.length">
      <li v-for="appt in appointments" :key="appt.id" class="item">
        <span>
          {{ appt.date }} {{ appt.time }} - {{ appt.animal }} ({{ appt.vet }})
        </span>
        <button @click="$emit('delete', appt.id)" class="cancel">Cancelar</button>
      </li>
    </ul>
    <p v-else>No hay citas registradas</p>
  </div>
</template>

<script setup lang="ts">
import type { Appointment } from '../types/Appointment'

defineProps<{
  appointments: Appointment[]
}>()

defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 6px 0;
}
.cancel {
  background-color: red;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.cancel:hover {
  background-color: darkred;
}
</style>