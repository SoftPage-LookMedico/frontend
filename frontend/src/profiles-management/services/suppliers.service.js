import http from "../../shared/services/http-common.js";

export class SuppliersService {
    getAll() {
        return http.get('/suppliers');
    }
    getById(id) {
        return http.get(`/suppliers/${id}`);
    }
    create(data) {
        return http.post('/suppliers', data);
    }
    update(id, data) {
        return http.put(`/suppliers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/suppliers/${id}`);
    }
}
