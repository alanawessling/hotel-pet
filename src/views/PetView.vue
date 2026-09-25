<script setup>
import { onMounted, ref } from 'vue';  'onMounted' is defined but never used.

const API_URL = 'http://localhost:3000';

const pets = ref([]); 'pets' is assigned a value but never used.
const tutores = ref([]); 'tutores' is assigned a value but never used.

async function carregarDados() {} 'carregarDados' is defined but never used.

</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pets</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pets cadastrados no sistema.
      </p>
    </header>

    <RouterLink
      class="btn btn-primary"
      :to="{ name: 'addPet' }"
    >
      Adicionar Pet
    </RouterLink>
  </div>
<table>

</table>
<tbody>
<tr

</tbody>
</template>