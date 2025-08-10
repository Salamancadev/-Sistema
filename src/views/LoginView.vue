<template>
  <div class="login-container">
    <h1>Veterinario Rural</h1>
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from "../components/LoginForm.vue"
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
h1 {
  text-align: center;
  margin-bottom: 15px;
}
</style>