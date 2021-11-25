const site = 'https://619bc03768ebaa001753c5c8.mockapi.io';

export default {
  async get(url) {
    const response = await fetch(site + url);
    return response.json();
  },

  async delete(url) {
    const response = await fetch(site + url, {
      method: 'DELETE'
    });
    return response.json();
  }
};
