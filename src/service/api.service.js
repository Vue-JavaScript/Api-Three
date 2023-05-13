import axios from 'axios';

const http = axios.create({ 
    baseURL: 'http://localhost:3000/api/v1'
});

export class API_Fake {
    get_treadMills() {
        return http.get('/treadmills');
    }

    get_Centers() {
        return http.get('/centers');
    }

    get_healthChecks() {
        return http.get('/health-checks');
    }

    get_ID_healthChecks_Records(id) {
        return http.get(`/treadmills/${id}/health-checks`);
    }
}