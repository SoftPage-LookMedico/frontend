import http from "../../shared/services/http-common.js";

export class DoctorsService {
    getAll() {
        return http.get('/doctors');
    }
    getById(id) {
        return http.get(`/doctors/${id}`);
    }
    create(data) {
        return http.post('/doctors', data);
    }
    update(id, data) {
        return http.put(`/doctors/${id}`, data);
    }

    delete(id) {
        return http.delete(`/doctors/${id}`);
    }
}
