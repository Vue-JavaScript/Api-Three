import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        search: 'Search',
        recordID: 'Record ID',
        treadmillID: 'Treadmill ID',
        serialNumber: 'Serial Number',
        centerName: 'Center Name',
        date: 'Date',
        time: 'Time',
        volts: 'Volts',
        watts: 'Watts',
        hp: 'HP',
        pageNotFoundTitle: '404: Page Not Found',
        pageNotFoundMessage: 'The requested URL "{{ url }}" was not found on this server.',
        goBackToHome: 'Go back to Home',
        averagePerformanceTitle: 'Average Performance',
        avgVolts: 'Volts: {{ volts }}',
        avgWatts: 'Watts: {{ watts }}',
        avgHp: 'HP: {{ hp }}',
    },
    es: {
        search: 'Buscar',
        recordID: 'ID de registro',
        treadmillID: 'ID de cinta de correr',
        serialNumber: 'Número de serie',
        centerName: 'Nombre del centro',
        date: 'Fecha',
        time: 'Hora',
        volts: 'Voltios',
        watts: 'Vatios',
        hp: 'HP',
        pageNotFoundTitle: '404: Página no encontrada',
        pageNotFoundMessage: 'No se encontró la URL solicitada "{{ url }}" en este servidor.',
        goBackToHome: 'Volver a inicio',
        averagePerformanceTitle: 'Rendimiento Promedio',
        avgVolts: 'Voltios: {{ volts }}',
        avgWatts: 'Vatios: {{ watts }}',
        avgHp: 'HP: {{ hp }}',
    },
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})

export  default  i18n;