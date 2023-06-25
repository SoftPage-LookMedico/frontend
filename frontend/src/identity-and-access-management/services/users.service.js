import http from "../../shared/services/http-common.js";

export class UsersService {
  getAll() {
    return http.get('/users');
  }
  getById(id) {
    return http.get(`/users/${id}`);
  }
  create(data) {
    return http.post('/users', data);
  }

}
