import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/locales/i18n"

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(i18n);

app.component('pv_button', Button);
app.component('pv_toolbar', Toolbar);
app.component('pv_card', Card);
app.component('pv_dataTable', DataTable);
app.component('pv_column', Column);
app.component('pv_paginator', Paginator);
app.component('pv_inputText', InputText);
app.component('pv_sidebar', Sidebar);

app.mount('#app')