import axios from 'axios';
import * as accounts from './api/accounts';
import * as attributes from './api/attributes';
import * as batches from './api/batches';
import * as containers from './api/containers';
import * as documents from './api/documents';
import * as drawers from './api/drawers';
import * as files from './api/files';
import * as folders from './api/folders';
import * as images from './api/images';
import * as objecttypes from './api/objecttypes';
import * as pages from './api/pages';

export { authenticate } from './api/authentication';

const VERSION = '6.2.23.1417';

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

  // Batches
  createBatch(batch) {
    return batches.createBatch(this.api, batch);
  }

  // Containers
  getContainers(containerId, recursive) {
    return containers.getContainers(this.api, containerId, recursive);
  }

  // Documents
  createDocument(doc) {
    return documents.createDocument(this.api, doc);
  }

  findDocuments(search) {
    return documents.findDocuments(this.api, search);
  }

  getDocumentById(docId) {
    return documents.getDocumentById(this.api, docId);
  }

  moveDocument(move, ver = 2) {
    if (ver === 2) return documents.moveDocumentV2(this.api, move);
    return documents.moveDocument(this.api, move);
  }

  updateProperties(docId, props) {
    return documents.updateProperties(this.api, docId, props);
  }

  copyDocument(copy) {
    return documents.copyDocument(this.api, copy);
  }

  deleteDocument(docId, force) {
    return documents.deleteDocument(this.api, docId, force);
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

  // Files
  findFiles(search) {
    return files.findFiles(this.api, search);
  }

  // Folders
  findFolders(search) {
    return folders.findFolders(this.api, search);
  }

  // Images
  getImageById(imageId, version) {
    return images.getImageById(this.api, imageId, version);
  }

  // ObjectTypes
  getAllowedTypes(typeId) {
    return objecttypes.getAllowedTypes(this.api, typeId);
  }

  getAllowedTypesForContainer(objectId) {
    return objecttypes.getAllowedTypesForContainer(this.api, objectId);
  }

  getAttributeDefinitionsForType(objectTypeId) {
    return objecttypes.getAttributeDefinitionsForType(this.api, objectTypeId);
  }

  getFileTypeExtensions(fileTypeId) {
    return objecttypes.getFileTypeExtensions(this.api, fileTypeId);
  }

  getFileTypeTemplate(fileTypeId) {
    return objecttypes.getFileTypeTemplate(this.api, fileTypeId);
  }

  getObjectType(objectTypeId) {
    return objecttypes.getObjectType(this.api, objectTypeId);
  }

  getSortOptionsForType(objectTypeId) {
    return objecttypes.getSortOptionsForType(this.api, objectTypeId);
  }

  getTypesForClass(standardObjectClass) {
    return objecttypes.getTypesForClass(this.api, standardObjectClass);
  }

  // Pages
  checkReadPermissions(pageId) {
    return pages.checkReadPermissions(this.api, pageId);
  }

  createPage(page) {
    return pages.createPage(this.api, page);
  }

  getAllPagesFromDocument(docId) {
    return pages.getAllPagesFromDocument(this.api, docId);
  }

}

export default ImageRight;
