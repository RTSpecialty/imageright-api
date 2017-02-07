import axios from 'axios';
import * as attributes from './api/attributes';
import * as drawers from './api/drawers';

const VERSION = 'ImageRight 6.2';

export { authenticate } from './api/authentication';

class ImageRight {
  constructor(baseURL, AccessToken) {
    this.version = VERSION;
    this.baseUrl = baseURL;
    this.AccessToken = AccessToken;
    this.api = axios.create({
      baseURL,
      AccessToken,
      headers: { Authorization: `AccessToken ${AccessToken}` },
    });
  }

  // Attributes
  getAttributeById(objId, attId) {
    return attributes.getAttributeById(this.api, objId, attId);
  }

  getAttributeByName(objId, attName) {
    return attributes.getAttributeByName(this.api, objId, attName);
  }

  getAttributeByObject(objId) {
    return attributes.getAttributeByObject(this.api, objId);
  }

  // Drawers
  getDrawers() {
    return drawers.getDrawers(this.api);
  }

  getDrawerById(id) {
    return drawers.getDrawerById(this.api, id);
  }

  getDrawerByName(name) {
    return drawers.getDrawerByName(this.api, name);
  }

  getDrawersInContainer(containerId) {
    return drawers.getDrawersInContainer(this.api, containerId);
  }

  getDrawersInContainerByName(containerId, name) {
    return drawers.getDrawersInContainerByName(this.api, containerId, name);
  }
}

export default ImageRight;
