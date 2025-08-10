<template>
  <div class="dashboard">
    <header>
      <h1>Agenda Veterinaria</h1>
      <button @click="logout">Cerrar Sesión</button>
    </header>
    <AppointmentForm @add="appointments.push($event)" />
    <AppointmentList
      :appointments="appointments"
      @delete="appointments = appointments.filter(a => a.id !== $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import AppointmentForm from "../components/AppointmentForm.vue"
import AppointmentList from "../components/AppointmentList.vue"
import type { Appointment } from "../types/Appointment"

const appointments = ref<Appointment[]>([])

const logout = () => {
  localStorage.removeItem("auth")
  window.location.href = "/login"
}
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 20px auto;
  padding: 15px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
header button {
  background-color: #b71c1c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
header button:hover {
  background-color: #7f0000;
}
</style>
