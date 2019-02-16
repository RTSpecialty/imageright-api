import axios from 'axios';
import * as accounts from './api/accounts';
import * as attributes from './api/attributes';
import * as authentication from './api/authentication';
import * as batches from './api/batches';
import * as containers from './api/containers';
import * as documents from './api/documents';
import * as drawers from './api/drawers';
import * as files from './api/files';
import * as folders from './api/folders';
import * as images from './api/images';
import * as objecttypes from './api/objecttypes';
import * as pages from './api/pages';
import * as tasks from './api/tasks';
import * as users from './api/users';
import * as workflows from './api/workflows';

export { authenticate } from './api/authentication';

const VERSION = '6.2.23.1417';

class ImageRight {
  constructor(baseUrl, AccessToken) {
    this.version = VERSION;
    this.baseUrl = baseUrl;
    this.AccessToken = AccessToken;
  }

  api() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: { Authorization: `AccessToken ${this.AccessToken}` },
    });
  }

  // Accounts
  getAccount(accountId, type) {
    return accounts.getAccount(this.api(), accountId, type);
  }

  getAccountGroups(accountId) {
    return accounts.getAccountGroups(this.api(), accountId);
  }

  getAllAccounts() {
    return accounts.getAllAccounts(this.api());
  }

  getCurrentUserAccount() {
    return accounts.getCurrentUserAccount(this.api());
  }

  getCurrentUserGroups() {
    return accounts.getCurrentUserGroups(this.api());
  }

  // Attributes
  getAttributeById(objId, attId) {
    return attributes.getAttributeById(this.api(), objId, attId);
  }

  getAttributeByName(objId, attName) {
    return attributes.getAttributeByName(this.api(), objId, attName);
  }

  getAttributeByObject(objId) {
    return attributes.getAttributeByObject(this.api(), objId);
  }

  // Authentication
  authenticate(UserName, Password) {
    return authentication.authenticate(this.baseURL, UserName, Password).then((accessToken) => {
      this.accessToken = accessToken;
      return accessToken;
    });
  }

  // Batches
  createBatch(batch) {
    return batches.createBatch(this.api(), batch);
  }

  // Containers
  getContainers(containerId, recursive) {
    return containers.getContainers(this.api(), containerId, recursive);
  }

  // Documents
  createDocument(doc) {
    return documents.createDocument(this.api(), doc);
  }

  findDocuments(search) {
    return documents.findDocuments(this.api(), search);
  }

  getDocumentById(docId) {
    return documents.getDocumentById(this.api(), docId);
  }

  moveDocument(move, ver = 2) {
    if (ver === 2) return documents.moveDocumentV2(this.api(), move);
    return documents.moveDocument(this.api(), move);
  }

  updateProperties(docId, props) {
    return documents.updateProperties(this.api(), docId, props);
  }

  copyDocument(copy) {
    return documents.copyDocument(this.api(), copy);
  }

  deleteDocument(docId, force) {
    return documents.deleteDocument(this.api(), docId, force);
  }

  // Drawers
  getDrawers() {
    return drawers.getDrawers(this.api());
  }

  getDrawerById(id) {
    return drawers.getDrawerById(this.api(), id);
  }

  getDrawerByName(name) {
    return drawers.getDrawerByName(this.api(), name);
  }

  getDrawersInContainer(containerId) {
    return drawers.getDrawersInContainer(this.api(), containerId);
  }

  getDrawersInContainerByName(containerId, name) {
    return drawers.getDrawersInContainerByName(this.api(), containerId, name);
  }

  // Files
  createFile(file) {
    return files.createFile(this.api(), file);
  }

  findFiles(search) {
    return files.findFiles(this.api(), search);
  }

  getFileById(fileId, includeHasNotes) {
    return files.getFileById(this.api(), fileId, includeHasNotes);
  }

  // Folders
  createFolder(folder) {
    return folders.createFolder(this.api(), folder);
  }

  findFolders(search) {
    return folders.findFolders(this.api(), search);
  }

  getFolderById(folderId, includeHasNotes) {
    return folders.getFolderById(this.api(), folderId, includeHasNotes);
  }

  // Images
  getImageById(imageId, version) {
    return images.getImageById(this.api(), imageId, version);
  }

  // ObjectTypes
  getAllowedTypes(typeId) {
    return objecttypes.getAllowedTypes(this.api(), typeId);
  }

  getAllowedTypesForContainer(objectId) {
    return objecttypes.getAllowedTypesForContainer(this.api(), objectId);
  }

  getAttributeDefinitionsForType(objectTypeId) {
    return objecttypes.getAttributeDefinitionsForType(this.api(), objectTypeId);
  }

  getFileTypeExtensions(fileTypeId) {
    return objecttypes.getFileTypeExtensions(this.api(), fileTypeId);
  }

  getFileTypeTemplate(fileTypeId) {
    return objecttypes.getFileTypeTemplate(this.api(), fileTypeId);
  }

  getObjectType(objectTypeId) {
    return objecttypes.getObjectType(this.api(), objectTypeId);
  }

  getSortOptionsForType(objectTypeId) {
    return objecttypes.getSortOptionsForType(this.api(), objectTypeId);
  }

  getTypesForClass(standardObjectClass) {
    return objecttypes.getTypesForClass(this.api(), standardObjectClass);
  }

  // Pages
  checkReadPermissions(pageId) {
    return pages.checkReadPermissions(this.api(), pageId);
  }

  createPage(page) {
    return pages.createPage(this.api(), page);
  }

  getAllPagesFromDocument(docId) {
    return pages.getAllPagesFromDocument(this.api(), docId);
  }

  // Tasks Actions
  killTask(taskId) {
    return tasks.killTask(this.api(), taskId);
  }

  lockTask(taskId, options) {
    return tasks.lockTask(this.api(), taskId, options);
  }

  refreshTaskLock(taskId) {
    return tasks.refreshTaskLock(this.api(), taskId);
  }

  releaseTask(taskId, options) {
    return tasks.releaseTask(this.api(), taskId, options);
  }

  releaseTaskByAnchor(taskId, anchor, options) {
    return tasks.releaseTaskByAnchor(this.api(), taskId, anchor, options);
  }

  releaseTaskSplitStep(taskId, options) {
    return tasks.releaseTaskSplitStep(this.api(), taskId, options);
  }

  routeTask(taskId, options) {
    return tasks.routeTask(this.api(), taskId, options);
  }

  unlockTask(taskId) {
    return tasks.unlockTask(this.api(), taskId);
  }

  // Task Attributes
  getTaskAttributeById(taskId, id) {
    return tasks.getTaskAttributeById(this.api(), taskId, id);
  }

  getTaskAttributeByName(taskId, name) {
    return tasks.getTaskAttributeByName(this.api(), taskId, name);
  }

  getTaskAttributes(taskId) {
    return tasks.getTaskAttributes(this.api(), taskId);
  }

  setTaskAttributeById(taskId, id, content) {
    return tasks.setTaskAttributeById(this.api(), taskId, id, content);
  }

  setTaskAttributeByName(taskId, name, content) {
    return tasks.setTaskAttributeByName(this.api(), taskId, name, content);
  }

  // Tasks
  createTask(content) {
    return tasks.createTask(this.api(), content);
  }

  getPostTasks(options) {
    return tasks.getPostTasks(this.api(), options);
  }

  getTasks(options) {
    return tasks.getTasks(this.api(), options);
  }

  getTasksByFileId(fileId, options) {
    return tasks.getTasksByFileId(this.api(), fileId, options);
  }

  getTasksByFileIdPost(fileId, options) {
    return tasks.getTasksByFileIdPost(this.api(), fileId, options);
  }

  updateTask(taskId, content) {
    return tasks.updateTask(this.api(), taskId, content);
  }

  // Users
  changeUserPassword(content) {
    return users.changeUserPassword(this.api(), content);
  }

  getCurrentUser() {
    return users.getCurrentUser(this.api());
  }

  getCurrentUserData() {
    return users.getCurrentUserData(this.api());
  }

  getUserData(userId) {
    return users.getUserData(this.api(), userId);
  }

  // Workflows
  getDefaultStepLink(stepId, options) {
    return workflows.getDefaultStepLink(this.api(), stepId, options);
  }

  getPriorityList(stepId) {
    return workflows.getPriorityList(this.api(), stepId);
  }

  getSplitLinkParameters(stepId, options) {
    return workflows.getSplitLinkParameters(this.api(), stepId, options);
  }

  getStepAttributeById(stepId, id) {
    return workflows.getStepAttributeById(this.api(), stepId, id);
  }

  getStepAttributeByName(stepId, name) {
    return workflows.getStepAttributeByName(this.api(), stepId, name);
  }

  getStepAttributes(stepId) {
    return workflows.getStepAttributes(this.api(), stepId);
  }

  getStepLinks(srcStepId, options) {
    return workflows.getStepLinks(this.api(), srcStepId, options);
  }

  getSteps(flowId, options) {
    return workflows.getSteps(this.api(), flowId, options);
  }

  getUsersToAssign(stepId) {
    return workflows.getUsersToAssign(this.api(), stepId);
  }

  getWorkflows(options) {
    return workflows.getWorkflows(this.api(), options);
  }
}

export default ImageRight;
