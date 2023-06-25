import http from '../../shared/services/http-common.js';
export class ProductsApiService {
    getAll() {
        return http.get('/products');
    }
    getCategoryAll() {
        return http.get('/categories');
    }

    getById(id) {
        return http.get(`/products/${id}`);
    }

    getByTitle(title) {
        return http.get(`/products/${title}`);
    }

    create(data) {
        return http.post('/products', data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }

    findByTitle(title) {
        return http.get(`/products?title=${title}`);
    }
}
