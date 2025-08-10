<template>
  <form @submit.prevent="login">
    <BaseInput id="user" label="Usuario" v-model="username" />
    <BaseInput id="pass" label="Contraseña" type="password" v-model="password" />
    <BaseButton type="submit">Iniciar Sesión</BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"
import { ref } from "vue"

const username = ref("")
const password = ref("")

const login = () => {
  if (username.value === "admin" && password.value === "1234") {
    localStorage.setItem("auth", "true")
    window.location.href = "/dashboard"
  } else {
    alert("Credenciales incorrectas")
  }
}
</script>