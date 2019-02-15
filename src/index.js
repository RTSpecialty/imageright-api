import ImageRight, { authenticate } from './imageright';

const VERSION = '0.0.4';

class Library {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.version = VERSION;
  }

  createAPI({ AccessToken }) {
    this.api = new ImageRight(this.baseUrl, AccessToken);
    return Promise.resolve(this.api);
  }

  connect(username, password) {
    return authenticate(this.baseUrl, username, password).then(this.createAPI.bind(this));
  }
}

export default Library;
