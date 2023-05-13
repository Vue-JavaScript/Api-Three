<script setup>
import { API_Fake } from '@/service/api.service.js';
import { ref } from 'vue';

const API = new API_Fake();
const healthChecks = ref([]);
let avgVolts = ref(0);
let avgWatts = ref(0);
let avgHp = ref(0);

API.get_healthChecks().then((response) => {
    healthChecks.value = response.data;
    const filteredChecks = healthChecks.value.filter((check) => check.hp !== 0);

    let totalChecks = filteredChecks.length;
    let sumVolts = filteredChecks.reduce((total, check) => total + check.volts, 0);
    let sumWatts = filteredChecks.reduce((total, check) => total + check.watts, 0);
    let sumHp = filteredChecks.reduce((total, check) => total + check.hp, 0);

    avgVolts.value = sumVolts / totalChecks;
    avgWatts.value = sumWatts / totalChecks;
    avgHp.value = sumHp / totalChecks;
})
.catch((error) => { console.log('Error en get_healthChecks:', error); });
</script>

<template>
  <pv_card class="container_card" role="region" aria-label="Average Performance">
    <template #title>
      <div style="color: brown;"> Average Performance </div>
    </template>
    <template #content>
      <p>Volts : {{ avgVolts }}</p>
      <p>Watts: {{ avgWatts }}</p>
      <p>HP: {{ avgHp }}</p>
    </template>
  </pv_card>
</template>

<style scoped>
.container_card {
  width: 350px;
  margin: auto;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-self: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>