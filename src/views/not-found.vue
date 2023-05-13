<script setup>

</script>

<template>
  <div class="container_notFound" role="alert">
    <div style="font-size: 30px; font-weight: bold;">404: Page Not Found</div>
    <div>The requested URL <b>" {{ $route.path }}"</b> was not found on this server.</div>
    <div>
      <router-link to="/home">
        <pv_button label="Go back to Home" severity="danger" raised></pv_button>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.container_notFound {
    margin: 50px;
}

div {
    margin: 20px;
}
</style>