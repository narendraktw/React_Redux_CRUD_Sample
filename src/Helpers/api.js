class Api {
  get(url, options) {
    return this.fetch(url, "get", options);
  }

  post(url, options) {
    return this.fetch(url, "post", options);
  }

  put(url, options) {
    return this.fetch(url, "put", options);
  }

  delete(url, options) {
    return this.fetch(url, "delete", options);
  }

  patch(url, options) {
    return this.fetch(url, "patch", options);
  }

  async fetch(url, method, options = {}) {
    try {
      const response = await window.fetch(url, {
        method: method,
        headers: new Headers({
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Methods": "GET,HEAD,POST,PUT,PATCH"
        }),
        ...options,
      });
      const data = await response.json();
      return data;
    } catch (e) {
      return new Error(e.message);
    }
  }
}

const instance = new Api();

export { instance as default, Api };
