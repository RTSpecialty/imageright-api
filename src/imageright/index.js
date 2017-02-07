import axios from 'axios';
import * as accounts from './api/accounts';
import * as attributes from './api/attributes';
import * as drawers from './api/drawers';

export { authenticate } from './api/authentication';

const VERSION = '6.2';

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

  // Accounts
  getAccount(accountId, type) {
    return accounts.getAccount(this.api, accountId, type);
  }

  getAccountGroups(accountId) {
    return accounts.getAccountGroups(this.api, accountId);
  }

  getAllAccounts() {
    return accounts.getAllAccounts(this.api);
  }

  getCurrentUserAccount() {
    return accounts.getCurrentUserAccount(this.api);
  }

  getCurrentUserGroups() {
    return accounts.getCurrentUserGroups(this.api);
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
