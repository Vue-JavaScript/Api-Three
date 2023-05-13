<script setup>
import { ref } from "vue";
const visibleRight = ref(false);
</script>

<template>
  <pv_toolbar class="container_toolbar">
    <template #start>
      <div style="margin: 0 5px;">TechnoGym TechnoRun Analytics</div>
    </template>
    <template #end>
      <div class="container_button">
        <router-link to="/home">
          <pv_button class="bt" label="Home" plain text icon="pi pi-home"></pv_button>
        </router-link>
        <router-link to="/analytics/health-checks">
          <pv_button class="bt" label="Health Checks" plain text icon="pi pi-list"></pv_button>
        </router-link>
      </div>

      <div class="flex gap-2 justify-content-center">
        <pv_sidebar v-model:visible="visibleRight" position="right"><br>
          <div class="bt_link">
            <router-link to="/home">
              <pv_button class="bt" label="Home" plain text icon="pi pi-home" style="width: 50%;"></pv_button>
            </router-link>
            <router-link to="/analytics/health-checks">
              <pv_button class="bt" label="Health Checks" plain text icon="pi pi-list" style="width: 70%;"></pv_button>
            </router-link>
          </div>
        </pv_sidebar>
        <pv_button class="bt_sidebar" icon="pi pi-bars" @click="visibleRight = true" />
      </div>
    </template>
  </pv_toolbar>
</template>

<style scoped>
.container_toolbar {
  background-color: rgba(50, 100, 100, 1);
  color: whitesmoke;
}
.bt {
  color: whitesmoke !important;
  margin: 0 5px;
  font-size: 15px;
}

@media screen and (min-width: 751px) {
  .bt_sidebar {
    display: none;
  }
}

@media screen and (min-width: 400px) and (max-width: 750px) {
  .container_button {
    display: none;
  }
  .bt_link {
    background-color: black;
  }
}
</style>