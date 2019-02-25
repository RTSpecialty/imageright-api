import axios from 'axios';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function getAccount(api, accountId, type) {
  var qstr = type ? "?type=".concat(type) : '';
  return api.get("api/accounts/".concat(accountId).concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAccountGroups(api, accountId) {
  return api.get("api/accounts/".concat(accountId, "/groups")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAllAccounts(api) {
  return api.get('api/accounts').then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getCurrentUserAccount(api) {
  return api.get('api/accounts/current').then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getCurrentUserGroups(api) {
  return api.get('api/accounts/current/groups').then(function (res) {
    return Promise.resolve(res.data);
  });
}

function getAttributeById(api, objId, attId) {
  return api.get("api/containers/".concat(objId, "/attributes/").concat(attId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAttributeByName(api, objId, attName) {
  return api.get("api/containers/".concat(objId, "/attributes/").concat(attName)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAttributeByObject(api, objId) {
  return api.get("api/attributes/".concat(objId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

/* eslint-disable import/prefer-default-export */
function authenticate(baseURL, UserName, Password) {
  var config = {
    baseURL: baseURL
  };
  return axios.post('api/authenticate', {
    UserName: UserName,
    Password: Password
  }, config).then(function (res) {
    return {
      AccessToken: res.data
    };
  });
}

/* eslint-disable import/prefer-default-export */
function createBatch(api, batch) {
  return api.post('api/batches', batch).then(function (res) {
    return Promise.resolve(res.data);
  });
}

/* eslint-disable import/prefer-default-export */
function getContainers(api, containerId, recursive) {
  var qstr = recursive ? '?recursive=true' : '?recursive=false';
  return api.get("api/containers/".concat(containerId).concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function createDocument(api, docObj) {
  return api.post('api/documents', docObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function findDocuments(api, searchObj) {
  return api.post('api/documents/find', searchObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getDocumentById(api, docId) {
  return api.get("api/documents/".concat(docId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function moveDocument(api, moveObj) {
  return api.post('api/documents/move', moveObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function updateProperties(api, docId, propObj) {
  return api.post("api/documents/".concat(docId, "/properties"), propObj).then(function (res) {
    return Promise.resolve(res.data);
  });
} // V2

function copyDocument(api, copyObj) {
  return api.post('api/v2/documents/copy', copyObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function deleteDocument(api, docId, force) {
  var qstr = force ? '?force=true' : '';
  return api.delete("api/v2/documents/".concat(docId).concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function moveDocumentV2(api, moveObj) {
  return api.post('api/v2/documents/move', moveObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function getDrawers(api) {
  return api.get('api/drawers').then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getDrawerById(api, id) {
  return api.get("api/drawers/".concat(id)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getDrawerByName(api, name) {
  return api.get("api/drawers/".concat(name)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getDrawersInContainer(api, containerId) {
  return api.get("api/containers/".concat(containerId, "/drawers")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getDrawersInContainerByName(api, containerId, name) {
  return api.get("api/containers/".concat(containerId, "/drawers/").concat(name)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function createFile(api, fileObj) {
  return api.post('api/files', fileObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function findFiles(api, searchObj) {
  return api.post('api/files/find', searchObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getFileById(api, fileId, includeHasNotes) {
  var qstr = includeHasNotes ? '?includeHasNotes=true' : '';
  return api.get("api/files/".concat(fileId).concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function createFolder(api, folderObj) {
  return api.post('api/folders', folderObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function findFolders(api, searchObj) {
  return api.post('api/folders/find', searchObj).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getFolderById(api, folderId, includeHasNotes) {
  var qstr = includeHasNotes ? '?includeHasNotes=true' : '';
  return api.get("api/folders/".concat(folderId).concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

/* eslint-disable import/prefer-default-export */
function getImageById(api, imageId, version) {
  var qstr = version ? "?version=".concat(version) : '?version=0';
  var options = {
    responseType: 'arraybuffer'
  };
  return api.get("api/images/".concat(imageId).concat(qstr), options).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function getAllowedTypes(api, typeId) {
  return api.get("api/objecttypes/allowedtypes?typeId=".concat(typeId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAllowedTypesForContainer(api, objectId) {
  return api.get("api/containers/".concat(objectId, "/allowedtypes")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAttributeDefinitionsForType(api, objectTypeId) {
  return api.get("api/objecttypes/".concat(objectTypeId, "/attributes")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getFileTypeExtensions(api, fileTypeId) {
  return api.get("api/objecttypes/".concat(fileTypeId, "/extensions")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getFileTypeTemplate(api, fileTypeId) {
  return api.get("api/objecttypes/".concat(fileTypeId, "/template")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getObjectType(api, objectTypeId) {
  return api.get("api/objecttypes/".concat(objectTypeId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getSortOptionsForType(api, objectTypeId) {
  return api.get("api/objecttypes/".concat(objectTypeId, "/sortoptions")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTypesForClass(api, standardObjectClass) {
  return api.get("api/objecttypes/".concat(standardObjectClass)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

function checkReadPermissions(api, pageId) {
  return api.get("api/pages/".concat(pageId, "/readpermissions")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function createPage(api, page) {
  return api.post('api/pages', page.data, {
    headers: page.headers
  }).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getAllPagesFromDocument(api, docId) {
  return api.get("api/documents/".concat(docId, "/pages")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getPageById(api, pageId) {
  return api.get("api/pages/".concat(pageId)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getPageImageMetadata(api, pageId) {
  return api.get("api/pages/".concat(pageId, "/imagemetadata")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function lockPage(api, pageId) {
  return api.get("api/pages/".concat(pageId, "/lock")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function movePage(api, moveObj) {
  return api.post('api/pages/move', moveObj.toJSON()).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function rotatePage(api, pageId, rotationAngle) {
  return api.post("api/pages/".concat(pageId, "/rotate?rotationAngle=").concat(rotationAngle)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function unlockPage(api, pageId) {
  return api.get("api/pages/".concat(pageId, "/unlock")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function updatePageContent(api, pageId, content) {
  return api.post("api/pages/".concat(pageId, "/content"), content).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function updatePageProperties(api, pageId, properties) {
  return api.post("api/pages/".concat(pageId, "/properties"), properties).then(function (res) {
    return Promise.resolve(res.data);
  });
} // V2

function copyPage(api, copyObj) {
  return api.post('api/v2/pages/copy', copyObj.toJSON()).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function createPageV2(api, page, targetPageId, before) {
  var qstrs = [];
  if (targetPageId) qstrs.push("targetPageId=".concat(targetPageId));
  if (before) qstrs.push("before=".concat(before));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/v2/pages".concat(qstr), page).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function mergeToDocument(api, mergeObj) {
  return api.post('api/v2/pages/merge', mergeObj.toJSON()).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function movePageV2(api, moveObj) {
  return api.post('api/v2/pages/move', moveObj.toJSON()).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function updatePageContentV2(api, pageId, content) {
  return api.post("api/v2/pages/".concat(pageId, "/content"), content).then(function (res) {
    return Promise.resolve(res.data);
  });
}

// TaskActions
function killTask(api, taskId) {
  return api.post("api/tasks/".concat(taskId, "/cancel")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function lockTask(api, taskId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var stepId = options.stepId,
      returnTask = options.returnTask;
  var qstrs = [];
  if (stepId) qstrs.push("stepId=".concat(stepId));
  if (returnTask) qstrs.push("returnTask=".concat(returnTask));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/".concat(taskId, "/lock").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function refreshTaskLock(api, taskId) {
  return api.post("api/tasks/".concat(taskId, "/refresh")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function releaseTask(api, taskId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var destStepId = options.destStepId,
      commit = options.commit;
  var qstrs = [];
  if (destStepId) qstrs.push("destStepId=".concat(destStepId));
  if (commit) qstrs.push("commit=".concat(commit));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/".concat(taskId, "/release").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function releaseTaskByAnchor(api, taskId, anchor) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var userId = options.userId,
      commit = options.commit;
  var qstrs = [];
  if (anchor) qstrs.push("anchor=".concat(anchor));
  if (userId) qstrs.push("userId=".concat(userId));
  if (commit) qstrs.push("commit=".concat(commit));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/".concat(taskId, "/release").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function releaseTaskSplitStep(api, taskId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var splitParams = options.splitParams,
      commit = options.commit;
  var qstrs = [];
  if (splitParams) qstrs.push("splitParams=".concat(splitParams));
  if (commit) qstrs.push("commit=".concat(commit));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/".concat(taskId, "/split").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function routeTask(api, taskId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var stepId = options.stepId,
      availableDate = options.availableDate,
      userId = options.userId,
      extUserId = options.extUserId,
      commit = options.commit;
  var qstrs = [];
  if (stepId) qstrs.push("stepId=".concat(stepId));
  if (availableDate) qstrs.push("availableDate=".concat(availableDate));
  if (userId) qstrs.push("userId=".concat(userId));
  if (extUserId) qstrs.push("extUserId=".concat(extUserId));
  if (commit) qstrs.push("commit=".concat(commit));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/".concat(taskId, "/route").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function unlockTask(api, taskId) {
  return api.post("api/tasks/".concat(taskId, "/unlock")).then(function (res) {
    return Promise.resolve(res.data);
  });
} // TaskAttributes

function getTaskAttributeById(api, taskId, id) {
  return api.get("api/tasks/".concat(taskId, "/attributes/").concat(id)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTaskAttributeByName(api, taskId, name) {
  return api.get("api/tasks/".concat(taskId, "/attributes/").concat(name)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTaskAttributes(api, taskId) {
  return api.get("api/tasks/".concat(taskId, "/attributes")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function setTaskAttributeById(api, taskId, id, content) {
  return api.post("api/tasks/".concat(taskId, "/attributes/").concat(id), content).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function setTaskAttributeByName(api, taskId, name, content) {
  return api.post("api/tasks/".concat(taskId, "/attributes/").concat(name), content).then(function (res) {
    return Promise.resolve(res.data);
  });
} // Tasks

function createTask(api, content) {
  return api.post('api/tasks/', content).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getPostTasks(api) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filter = options.filter,
      skip = options.skip,
      top = options.top;
  var qstrs = [];
  if (skip) qstrs.push("skip=".concat(skip));
  if (top) qstrs.push("top=".concat(top));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/tasks/find".concat(qstr), filter).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTasks(api) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tasks = options.tasks,
      availableDateStart = options.availableDateStart,
      availableDateEnd = options.availableDateEnd,
      flows = options.flows,
      excludeFlows = options.excludeFlows,
      steps = options.steps,
      excludeSteps = options.excludeSteps,
      assignedTo = options.assignedTo,
      taskStatus = options.taskStatus,
      excludeStatus = options.excludeStatus,
      lockable = options.lockable,
      orderBy = options.orderBy,
      lockedBy = options.lockedBy,
      debug = options.debug,
      skip = options.skip,
      top = options.top;
  var qstrs = [];
  if (tasks) qstrs.push("tasks=".concat(tasks));
  if (availableDateStart) qstrs.push("availableDateStart=".concat(availableDateStart));
  if (availableDateEnd) qstrs.push("availableDateEnd=".concat(availableDateEnd));
  if (flows) qstrs.push("flows=".concat(flows));
  if (excludeFlows) qstrs.push("excludeFlows=".concat(excludeFlows));
  if (steps) qstrs.push("steps=".concat(steps));
  if (excludeSteps) qstrs.push("excludeSteps=".concat(excludeSteps));
  if (assignedTo) qstrs.push("assignedTo=".concat(assignedTo));
  if (taskStatus) qstrs.push("taskStatus=".concat(taskStatus));
  if (excludeStatus) qstrs.push("excludeStatus=".concat(excludeStatus));
  if (lockable) qstrs.push("lockable=".concat(lockable));
  if (orderBy) qstrs.push("orderBy=".concat(orderBy));
  if (lockedBy) qstrs.push("lockedBy=".concat(lockedBy));
  if (debug) qstrs.push("debug=".concat(debug));
  if (skip) qstrs.push("skip=".concat(skip));
  if (top) qstrs.push("top=".concat(top));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/tasks".concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTasksByFileId(api, fileId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var tasks = options.tasks,
      availableDateStart = options.availableDateStart,
      availableDateEnd = options.availableDateEnd,
      flows = options.flows,
      excludeFlows = options.excludeFlows,
      steps = options.steps,
      excludeSteps = options.excludeSteps,
      assignedTo = options.assignedTo,
      taskStatus = options.taskStatus,
      excludeStatus = options.excludeStatus,
      lockable = options.lockable,
      orderBy = options.orderBy,
      lockedBy = options.lockedBy,
      debug = options.debug,
      skip = options.skip,
      top = options.top;
  var qstrs = [];
  if (tasks) qstrs.push("tasks=".concat(tasks));
  if (availableDateStart) qstrs.push("availableDateStart=".concat(availableDateStart));
  if (availableDateEnd) qstrs.push("availableDateEnd=".concat(availableDateEnd));
  if (flows) qstrs.push("flows=".concat(flows));
  if (excludeFlows) qstrs.push("excludeFlows=".concat(excludeFlows));
  if (steps) qstrs.push("steps=".concat(steps));
  if (excludeSteps) qstrs.push("excludeSteps=".concat(excludeSteps));
  if (assignedTo) qstrs.push("assignedTo=".concat(assignedTo));
  if (taskStatus) qstrs.push("taskStatus=".concat(taskStatus));
  if (excludeStatus) qstrs.push("excludeStatus=".concat(excludeStatus));
  if (lockable) qstrs.push("lockable=".concat(lockable));
  if (orderBy) qstrs.push("orderBy=".concat(orderBy));
  if (lockedBy) qstrs.push("lockedBy=".concat(lockedBy));
  if (debug) qstrs.push("debug=".concat(debug));
  if (skip) qstrs.push("skip=".concat(skip));
  if (top) qstrs.push("top=".concat(top));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/files/".concat(fileId, "/tasks").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getTasksByFileIdPost(api, fileId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var filter = options.filter,
      skip = options.skip,
      top = options.top;
  var qstrs = [];
  if (skip) qstrs.push("skip=".concat(skip));
  if (top) qstrs.push("top=".concat(top));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.post("api/files/".concat(fileId, "/tasks").concat(qstr), filter).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function updateTask(api, taskId, content) {
  return api.post("api/tasks/".concat(taskId), content).then(function (res) {
    return Promise.resolve(res.data);
  });
}

// Users
function changeUserPassword(api, content) {
  return api.post('api/users/changepassword', content).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getCurrentUser(api) {
  return api.get('api/users/currentuser').then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getCurrentUserData(api) {
  return api.get('api/users/currentuser/userdata').then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getUserData(api, userId) {
  return api.get("api/users/".concat(userId, "/userdata")).then(function (res) {
    return Promise.resolve(res.data);
  });
}

// Workflows
function getDefaultStepLink(api, stepId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isDefault = options.isDefault,
      status = options.status;
  var qstrs = [];
  if (isDefault) qstrs.push("isDefault=".concat(isDefault));
  if (status) qstrs.push("status=".concat(status));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/steps/".concat(stepId, "/links/default").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getPriorityList(api, stepId) {
  return api.get("api/steps/".concat(stepId, "/priorities")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getSplitLinkParameters(api, stepId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isDebug = options.isDebug;
  var qstrs = [];
  if (isDebug) qstrs.push("isDebug=".concat(isDebug));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/steps/".concat(stepId, "/splitparams").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getStepAttributeById(api, stepId, id) {
  return api.get("api/steps/".concat(stepId, "/attributes/").concat(id)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getStepAttributeByName(api, stepId, name) {
  return api.get("api/steps/".concat(stepId, "/attributes/").concat(name)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getStepAttributes(api, stepId) {
  return api.get("api/steps/".concat(stepId, "/attributes")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getStepLinks(api, srcStepId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var targetStepId = options.targetStepId,
      status = options.status;
  var qstrs = [];
  if (targetStepId) qstrs.push("targetStepId=".concat(targetStepId));
  if (status) qstrs.push("status=".concat(status));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/steps/".concat(srcStepId, "/links").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getSteps(api, flowId) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var includeBuddies = options.includeBuddies,
      flag = options.flag;
  var qstrs = [];
  if (includeBuddies) qstrs.push("includeBuddies=".concat(includeBuddies));
  if (flag) qstrs.push("flag=".concat(flag));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/workflows/".concat(flowId, "/steps").concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getUsersToAssign(api, stepId) {
  return api.get("api/steps/".concat(stepId, "/users")).then(function (res) {
    return Promise.resolve(res.data);
  });
}
function getWorkflows(api) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var includeBuddies = options.includeBuddies;
  var qstrs = [];
  if (includeBuddies) qstrs.push("includeBuddies=".concat(includeBuddies));
  var qstr = qstrs.length ? "?".concat(qstrs.join('&')) : '';
  return api.get("api/workflows".concat(qstr)).then(function (res) {
    return Promise.resolve(res.data);
  });
}

var VERSION = '6.2.23.1417';

var ImageRight =
/*#__PURE__*/
function () {
  function ImageRight(baseUrl, AccessToken) {
    classCallCheck(this, ImageRight);

    this.version = VERSION;
    this.baseUrl = baseUrl;
    this.AccessToken = AccessToken;
  }

  createClass(ImageRight, [{
    key: "api",
    value: function api() {
      return axios.create({
        baseURL: this.baseUrl,
        headers: {
          Authorization: "AccessToken ".concat(this.AccessToken)
        }
      });
    } // Accounts

  }, {
    key: "getAccount",
    value: function getAccount$$1(accountId, type) {
      return getAccount(this.api(), accountId, type);
    }
  }, {
    key: "getAccountGroups",
    value: function getAccountGroups$$1(accountId) {
      return getAccountGroups(this.api(), accountId);
    }
  }, {
    key: "getAllAccounts",
    value: function getAllAccounts$$1() {
      return getAllAccounts(this.api());
    }
  }, {
    key: "getCurrentUserAccount",
    value: function getCurrentUserAccount$$1() {
      return getCurrentUserAccount(this.api());
    }
  }, {
    key: "getCurrentUserGroups",
    value: function getCurrentUserGroups$$1() {
      return getCurrentUserGroups(this.api());
    } // Attributes

  }, {
    key: "getAttributeById",
    value: function getAttributeById$$1(objId, attId) {
      return getAttributeById(this.api(), objId, attId);
    }
  }, {
    key: "getAttributeByName",
    value: function getAttributeByName$$1(objId, attName) {
      return getAttributeByName(this.api(), objId, attName);
    }
  }, {
    key: "getAttributeByObject",
    value: function getAttributeByObject$$1(objId) {
      return getAttributeByObject(this.api(), objId);
    } // Authentication

  }, {
    key: "authenticate",
    value: function authenticate$$1(UserName, Password) {
      var _this = this;

      return authenticate(this.baseURL, UserName, Password).then(function (accessToken) {
        _this.accessToken = accessToken;
        return accessToken;
      });
    } // Batches

  }, {
    key: "createBatch",
    value: function createBatch$$1(batch) {
      return createBatch(this.api(), batch);
    } // Containers

  }, {
    key: "getContainers",
    value: function getContainers$$1(containerId, recursive) {
      return getContainers(this.api(), containerId, recursive);
    } // Documents

  }, {
    key: "createDocument",
    value: function createDocument$$1(doc) {
      return createDocument(this.api(), doc);
    }
  }, {
    key: "findDocuments",
    value: function findDocuments$$1(search) {
      return findDocuments(this.api(), search);
    }
  }, {
    key: "getDocumentById",
    value: function getDocumentById$$1(docId) {
      return getDocumentById(this.api(), docId);
    }
  }, {
    key: "moveDocument",
    value: function moveDocument$$1(move) {
      var ver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      if (ver === 2) return moveDocumentV2(this.api(), move);
      return moveDocument(this.api(), move);
    }
  }, {
    key: "updateProperties",
    value: function updateProperties$$1(docId, props) {
      return updateProperties(this.api(), docId, props);
    }
  }, {
    key: "copyDocument",
    value: function copyDocument$$1(copy) {
      return copyDocument(this.api(), copy);
    }
  }, {
    key: "deleteDocument",
    value: function deleteDocument$$1(docId, force) {
      return deleteDocument(this.api(), docId, force);
    } // Drawers

  }, {
    key: "getDrawers",
    value: function getDrawers$$1() {
      return getDrawers(this.api());
    }
  }, {
    key: "getDrawerById",
    value: function getDrawerById$$1(id) {
      return getDrawerById(this.api(), id);
    }
  }, {
    key: "getDrawerByName",
    value: function getDrawerByName$$1(name) {
      return getDrawerByName(this.api(), name);
    }
  }, {
    key: "getDrawersInContainer",
    value: function getDrawersInContainer$$1(containerId) {
      return getDrawersInContainer(this.api(), containerId);
    }
  }, {
    key: "getDrawersInContainerByName",
    value: function getDrawersInContainerByName$$1(containerId, name) {
      return getDrawersInContainerByName(this.api(), containerId, name);
    } // Files

  }, {
    key: "createFile",
    value: function createFile$$1(file) {
      return createFile(this.api(), file);
    }
  }, {
    key: "findFiles",
    value: function findFiles$$1(search) {
      return findFiles(this.api(), search);
    }
  }, {
    key: "getFileById",
    value: function getFileById$$1(fileId, includeHasNotes) {
      return getFileById(this.api(), fileId, includeHasNotes);
    } // Folders

  }, {
    key: "createFolder",
    value: function createFolder$$1(folder) {
      return createFolder(this.api(), folder);
    }
  }, {
    key: "findFolders",
    value: function findFolders$$1(search) {
      return findFolders(this.api(), search);
    }
  }, {
    key: "getFolderById",
    value: function getFolderById$$1(folderId, includeHasNotes) {
      return getFolderById(this.api(), folderId, includeHasNotes);
    } // Images

  }, {
    key: "getImageById",
    value: function getImageById$$1(imageId, version) {
      return getImageById(this.api(), imageId, version);
    } // ObjectTypes

  }, {
    key: "getAllowedTypes",
    value: function getAllowedTypes$$1(typeId) {
      return getAllowedTypes(this.api(), typeId);
    }
  }, {
    key: "getAllowedTypesForContainer",
    value: function getAllowedTypesForContainer$$1(objectId) {
      return getAllowedTypesForContainer(this.api(), objectId);
    }
  }, {
    key: "getAttributeDefinitionsForType",
    value: function getAttributeDefinitionsForType$$1(objectTypeId) {
      return getAttributeDefinitionsForType(this.api(), objectTypeId);
    }
  }, {
    key: "getFileTypeExtensions",
    value: function getFileTypeExtensions$$1(fileTypeId) {
      return getFileTypeExtensions(this.api(), fileTypeId);
    }
  }, {
    key: "getFileTypeTemplate",
    value: function getFileTypeTemplate$$1(fileTypeId) {
      return getFileTypeTemplate(this.api(), fileTypeId);
    }
  }, {
    key: "getObjectType",
    value: function getObjectType$$1(objectTypeId) {
      return getObjectType(this.api(), objectTypeId);
    }
  }, {
    key: "getSortOptionsForType",
    value: function getSortOptionsForType$$1(objectTypeId) {
      return getSortOptionsForType(this.api(), objectTypeId);
    }
  }, {
    key: "getTypesForClass",
    value: function getTypesForClass$$1(standardObjectClass) {
      return getTypesForClass(this.api(), standardObjectClass);
    } // Pages

  }, {
    key: "checkReadPermissions",
    value: function checkReadPermissions$$1(pageId) {
      return checkReadPermissions(this.api(), pageId);
    }
  }, {
    key: "createPage",
    value: function createPage$$1(page) {
      return createPage(this.api(), page);
    }
  }, {
    key: "getAllPagesFromDocument",
    value: function getAllPagesFromDocument$$1(docId) {
      return getAllPagesFromDocument(this.api(), docId);
    }
  }, {
    key: "getPageById",
    value: function getPageById$$1(pageId) {
      return getPageById(this.api(), pageId);
    }
  }, {
    key: "getPageImageMetadata",
    value: function getPageImageMetadata$$1(pageId) {
      return getPageImageMetadata(this.api(), pageId);
    }
  }, {
    key: "lockPage",
    value: function lockPage$$1(pageId) {
      return lockPage(this.api(), pageId);
    }
  }, {
    key: "movePage",
    value: function movePage$$1(moveObj) {
      return movePage(this.api(), moveObj);
    }
  }, {
    key: "rotatePage",
    value: function rotatePage$$1(pageId, rotationAngle) {
      return rotatePage(this.api(), pageId, rotationAngle);
    }
  }, {
    key: "unlockPage",
    value: function unlockPage$$1(pageId) {
      return unlockPage(this.api(), pageId);
    }
  }, {
    key: "updatePageContent",
    value: function updatePageContent$$1(pageId, content) {
      return updatePageContent(this.api(), pageId, content);
    }
  }, {
    key: "updatePageProperties",
    value: function updatePageProperties$$1(pageId, properties) {
      return updatePageProperties(this.api(), pageId, properties);
    } // V2 Pages

  }, {
    key: "copyPage",
    value: function copyPage$$1(copyObj) {
      return copyPage(this.api(), copyObj);
    }
  }, {
    key: "createPageV2",
    value: function createPageV2$$1(page, targetPageId, before) {
      return createPageV2(this.api(), page, targetPageId, before);
    }
  }, {
    key: "mergeToDocument",
    value: function mergeToDocument$$1(mergeObj) {
      return mergeToDocument(this.api(), mergeObj);
    }
  }, {
    key: "movePageV2",
    value: function movePageV2$$1(moveObj) {
      return movePageV2(this.api(), moveObj);
    }
  }, {
    key: "updatePageContentV2",
    value: function updatePageContentV2$$1(pageId, content) {
      return updatePageContentV2(this.api(), pageId, content);
    } // Tasks Actions

  }, {
    key: "killTask",
    value: function killTask$$1(taskId) {
      return killTask(this.api(), taskId);
    }
  }, {
    key: "lockTask",
    value: function lockTask$$1(taskId, options) {
      return lockTask(this.api(), taskId, options);
    }
  }, {
    key: "refreshTaskLock",
    value: function refreshTaskLock$$1(taskId) {
      return refreshTaskLock(this.api(), taskId);
    }
  }, {
    key: "releaseTask",
    value: function releaseTask$$1(taskId, options) {
      return releaseTask(this.api(), taskId, options);
    }
  }, {
    key: "releaseTaskByAnchor",
    value: function releaseTaskByAnchor$$1(taskId, anchor, options) {
      return releaseTaskByAnchor(this.api(), taskId, anchor, options);
    }
  }, {
    key: "releaseTaskSplitStep",
    value: function releaseTaskSplitStep$$1(taskId, options) {
      return releaseTaskSplitStep(this.api(), taskId, options);
    }
  }, {
    key: "routeTask",
    value: function routeTask$$1(taskId, options) {
      return routeTask(this.api(), taskId, options);
    }
  }, {
    key: "unlockTask",
    value: function unlockTask$$1(taskId) {
      return unlockTask(this.api(), taskId);
    } // Task Attributes

  }, {
    key: "getTaskAttributeById",
    value: function getTaskAttributeById$$1(taskId, id) {
      return getTaskAttributeById(this.api(), taskId, id);
    }
  }, {
    key: "getTaskAttributeByName",
    value: function getTaskAttributeByName$$1(taskId, name) {
      return getTaskAttributeByName(this.api(), taskId, name);
    }
  }, {
    key: "getTaskAttributes",
    value: function getTaskAttributes$$1(taskId) {
      return getTaskAttributes(this.api(), taskId);
    }
  }, {
    key: "setTaskAttributeById",
    value: function setTaskAttributeById$$1(taskId, id, content) {
      return setTaskAttributeById(this.api(), taskId, id, content);
    }
  }, {
    key: "setTaskAttributeByName",
    value: function setTaskAttributeByName$$1(taskId, name, content) {
      return setTaskAttributeByName(this.api(), taskId, name, content);
    } // Tasks

  }, {
    key: "createTask",
    value: function createTask$$1(content) {
      return createTask(this.api(), content);
    }
  }, {
    key: "getPostTasks",
    value: function getPostTasks$$1(options) {
      return getPostTasks(this.api(), options);
    }
  }, {
    key: "getTasks",
    value: function getTasks$$1(options) {
      return getTasks(this.api(), options);
    }
  }, {
    key: "getTasksByFileId",
    value: function getTasksByFileId$$1(fileId, options) {
      return getTasksByFileId(this.api(), fileId, options);
    }
  }, {
    key: "getTasksByFileIdPost",
    value: function getTasksByFileIdPost$$1(fileId, options) {
      return getTasksByFileIdPost(this.api(), fileId, options);
    }
  }, {
    key: "updateTask",
    value: function updateTask$$1(taskId, content) {
      return updateTask(this.api(), taskId, content);
    } // Users

  }, {
    key: "changeUserPassword",
    value: function changeUserPassword$$1(content) {
      return changeUserPassword(this.api(), content);
    }
  }, {
    key: "getCurrentUser",
    value: function getCurrentUser$$1() {
      return getCurrentUser(this.api());
    }
  }, {
    key: "getCurrentUserData",
    value: function getCurrentUserData$$1() {
      return getCurrentUserData(this.api());
    }
  }, {
    key: "getUserData",
    value: function getUserData$$1(userId) {
      return getUserData(this.api(), userId);
    } // Workflows

  }, {
    key: "getDefaultStepLink",
    value: function getDefaultStepLink$$1(stepId, options) {
      return getDefaultStepLink(this.api(), stepId, options);
    }
  }, {
    key: "getPriorityList",
    value: function getPriorityList$$1(stepId) {
      return getPriorityList(this.api(), stepId);
    }
  }, {
    key: "getSplitLinkParameters",
    value: function getSplitLinkParameters$$1(stepId, options) {
      return getSplitLinkParameters(this.api(), stepId, options);
    }
  }, {
    key: "getStepAttributeById",
    value: function getStepAttributeById$$1(stepId, id) {
      return getStepAttributeById(this.api(), stepId, id);
    }
  }, {
    key: "getStepAttributeByName",
    value: function getStepAttributeByName$$1(stepId, name) {
      return getStepAttributeByName(this.api(), stepId, name);
    }
  }, {
    key: "getStepAttributes",
    value: function getStepAttributes$$1(stepId) {
      return getStepAttributes(this.api(), stepId);
    }
  }, {
    key: "getStepLinks",
    value: function getStepLinks$$1(srcStepId, options) {
      return getStepLinks(this.api(), srcStepId, options);
    }
  }, {
    key: "getSteps",
    value: function getSteps$$1(flowId, options) {
      return getSteps(this.api(), flowId, options);
    }
  }, {
    key: "getUsersToAssign",
    value: function getUsersToAssign$$1(stepId) {
      return getUsersToAssign(this.api(), stepId);
    }
  }, {
    key: "getWorkflows",
    value: function getWorkflows$$1(options) {
      return getWorkflows(this.api(), options);
    }
  }]);

  return ImageRight;
}();

var VERSION$1 = '0.0.5';

var Library =
/*#__PURE__*/
function () {
  function Library(baseUrl) {
    classCallCheck(this, Library);

    this.baseUrl = baseUrl;
    this.version = VERSION$1;
  }

  createClass(Library, [{
    key: "createAPI",
    value: function createAPI(_ref) {
      var AccessToken = _ref.AccessToken;
      this.api = new ImageRight(this.baseUrl, AccessToken);
      return Promise.resolve(this.api);
    }
  }, {
    key: "connect",
    value: function connect(username, password) {
      return authenticate(this.baseUrl, username, password).then(this.createAPI.bind(this));
    }
  }]);

  return Library;
}();

export default Library;
//# sourceMappingURL=index.es.js.map
