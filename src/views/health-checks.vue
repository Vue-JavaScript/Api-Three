<script setup>
import { ref } from 'vue';
import { API_Fake } from '@/service/api.service.js';

const API = new API_Fake();
const healthChecks = ref([]);
const centerName = ref([]);
const serialNumber = ref([]);
const search = ref(null);

API.get_Centers().then((response) => {
    centerName.value = response.data;
})
.catch((error) => { console.log('Error en get_Centers:', error); });

API.get_treadMills().then((response) => {
    serialNumber.value = response.data;
})
.catch((error) => { console.log('Error en get_treadMills:', error); });

API.get_healthChecks().then((response) => {
  response.data.forEach(element => {
    API.get_ID_healthChecks_Records(element.id).then(() => {
        let num = serialNumber.value.find((dt) => dt.id === element.treadmillId)
        healthChecks.value.push({
        id: element.id,
        treadmillId: element.treadmillId,
        serialNumber: num.serialNumber,
        centerName: centerName.value.find((dt) => dt.id === num.centerId).name,
        date: `${element.year}-0${element.month}-0${element.day}`,
        time: `${element.hour}h ${element.minutes}m ${element.seconds}s`,
        volts: element.volts,
        watts: element.watts,
        hp: element.hp
      });
    }).catch((error) => { console.log('Error en get_ID_healthChecks_Records:', error); })
  });
}).catch((error) => { console.log('Error en get_healthChecks:', error); });

const rowsPerPage = ref(3);
const total = ref(healthChecks.value.length);
const filteredHealthCheckRecords = ref(healthChecks.value);

function filterHealthChecks() {
    filteredHealthCheckRecords.value = healthChecks.value.filter((records) =>
    records.serialNumber.toLowerCase().includes(search.value.toLowerCase()) ||
    records.centerName.toLowerCase().includes(search.value.toLowerCase()) 
  );
}
</script>

<template>
  <div class="container_hChecks_records">
    <div style="margin: 10px 0;">
      <span class="p-input-icon-left">
        <i class="pi pi-search" aria-hidden="true"></i>
        <pv_inputText v-model="search" placeholder="Search" @input="filterHealthChecks" aria-label="Search health check records" />
      </span>
    </div>
    <div style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
      <pv_dataTable :value="filteredHealthCheckRecords" :paginator="true" :rows="rowsPerPage" :totalRecords="total" :rowsPerPageOptions="[3, 5, 7]" tableStyle="min-width: 50rem" role="table" aria-label="Health check records table" >
        <pv_column field="id" header="Record ID" role="columnheader"></pv_column>
        <pv_column field="treadmillId" header="Treadmill ID" role="columnheader"></pv_column>
        <pv_column field="serialNumber" header="Serial Number" role="columnheader"></pv_column>
        <pv_column field="centerName" header="Center Name" role="columnheader"></pv_column>
        <pv_column field="date" header="Date" role="columnheader"></pv_column>
        <pv_column field="time" header="Time" role="columnheader"></pv_column>
        <pv_column field="volts" header="Volts" role="columnheader"></pv_column>
        <pv_column field="watts" header="Watts" role="columnheader"></pv_column>
        <pv_column field="hp" header="HP" role="columnheader"></pv_column>
      </pv_dataTable>
    </div>
  </div>
</template> 

<style scoped>
.container_hChecks_records {
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>