import ajax from './ajax';

export default {
  async getUsers() {
    const url = '/users';
    return ajax.get(url);
  },

  async deleteUser(id) {
    const url = `/users/${id}`;
    return ajax.delete(url);
  }
};
