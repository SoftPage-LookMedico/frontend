import http from '../../shared/services/http-common.js';
export class TutorialsApiService {
    getAll() {
        return http.get('/payment-methods-buyer');
    }

    getById(id) {
        return http.get(`/payment-methods-buyer/${id}`);
    }

    create(data) {
        return http.post('/payment-methods-buyer', data);
    }

    update(id, data) {
        return http.put(`/payment-methods-buyer/${id}`, data);
    }

    delete(id) {
        return http.delete(`/payment-methods-buyer/${id}`);
    }

    findByTitle(title) {
        return http.get(`/payment-methods-buyer?title=${title}`);
    }
}