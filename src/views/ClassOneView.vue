<script setup>
// javascript
import './assets/css/main.css'
</script>

<template>
  <!-- html -->
  <div class="background-azul">
    <div class="margin-padding">Hola soy una etiqueta con margin y padding</div>
  </div>
  <!-- flexbox -->
  <div class="abuelo">
    <div class="padre">
      <div class="separador hijo">Hola</div>
      <div class="hijo">Como estas</div>
      <div class="hijo">?</div>
    </div>
    <div class="padre">
      <div class="separador hijo">Hola</div>
      <div class="hijo">Como estas</div>
      <div class="hijo">?</div>
    </div>
  </div>
</template>

<style scoped>
/* css */
.background-azul {
  background-color: blue;
}
.separador {
  padding: 10px;
}
.margin-padding {
  background-color: red;
  padding: 20px;
  margin: 30px;
}

.abuelo {
  display: flex;
  /* flex-direction: column; */
}

.padre {
  display: flex;
  /* eje x */
  justify-content: space-between;

  width: 25%;
}

.hijo {
  font-size: 20px;
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
}
</style>
