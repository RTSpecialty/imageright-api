// TaskActions

export function killTask(api, taskId) {
  return api.post(`api/tasks/${taskId}/cancel`).then((res) => Promise.resolve(res.data));
}

export function lockTask(api, taskId, options = {}) {
  const { stepId, returnTask } = options;
  const qstrs = [];
  if (stepId) qstrs.push(`stepId=${stepId}`);
  if (returnTask) qstrs.push(`returnTask=${returnTask}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/${taskId}/lock${qstr}`).then((res) => Promise.resolve(res.data));
}

export function refreshTaskLock(api, taskId) {
  return api.post(`api/tasks/${taskId}/refresh`).then((res) => Promise.resolve(res.data));
}

export function releaseTask(api, taskId, options = {}) {
  const { destStepId, commit } = options;
  const qstrs = [];
  if (destStepId) qstrs.push(`destStepId=${destStepId}`);
  if (commit) qstrs.push(`commit=${commit}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/${taskId}/release${qstr}`).then((res) => Promise.resolve(res.data));
}

export function releaseTaskByAnchor(api, taskId, anchor, options = {}) {
  const { userId, commit } = options;
  const qstrs = [];
  if (anchor) qstrs.push(`anchor=${anchor}`);
  if (userId) qstrs.push(`userId=${userId}`);
  if (commit) qstrs.push(`commit=${commit}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/${taskId}/release${qstr}`).then((res) => Promise.resolve(res.data));
}

export function releaseTaskSplitStep(api, taskId, options = {}) {
  const { splitParams, commit } = options;
  const qstrs = [];
  if (splitParams) qstrs.push(`splitParams=${splitParams}`);
  if (commit) qstrs.push(`commit=${commit}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/${taskId}/split${qstr}`).then((res) => Promise.resolve(res.data));
}

export function routeTask(api, taskId, options = {}) {
  const { stepId, availableDate, userId, extUserId, commit } = options;
  const qstrs = [];
  if (stepId) qstrs.push(`stepId=${stepId}`);
  if (availableDate) qstrs.push(`availableDate=${availableDate}`);
  if (userId) qstrs.push(`userId=${userId}`);
  if (extUserId) qstrs.push(`extUserId=${extUserId}`);
  if (commit) qstrs.push(`commit=${commit}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/${taskId}/route${qstr}`).then((res) => Promise.resolve(res.data));
}

export function unlockTask(api, taskId) {
  return api.post(`api/tasks/${taskId}/unlock`).then((res) => Promise.resolve(res.data));
}

// TaskAttributes

export function getTaskAttributeById(api, taskId, id) {
  return api.get(`api/tasks/${taskId}/attributes/${id}`).then((res) => Promise.resolve(res.data));
}

export function getTaskAttributeByName(api, taskId, name) {
  return api.get(`api/tasks/${taskId}/attributes/${name}`).then((res) => Promise.resolve(res.data));
}

export function getTaskAttributes(api, taskId) {
  return api.get(`api/tasks/${taskId}/attributes`).then((res) => Promise.resolve(res.data));
}

export function setTaskAttributeById(api, taskId, id, content) {
  return api
    .post(`api/tasks/${taskId}/attributes/${id}`, content)
    .then((res) => Promise.resolve(res.data));
}

export function setTaskAttributeByName(api, taskId, name, content) {
  return api
    .post(`api/tasks/${taskId}/attributes/${name}`, content)
    .then((res) => Promise.resolve(res.data));
}

// Tasks

export function createTask(api, content) {
  return api.post('api/tasks/', content).then((res) => Promise.resolve(res.data));
}

export function getPostTasks(api, options = {}) {
  const { filter, skip, top } = options;
  const qstrs = [];
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.post(`api/tasks/find${qstr}`, filter).then((res) => Promise.resolve(res.data));
}

export function getTasks(api, options = {}) {
  const {
    tasks,
    availableDateStart,
    availableDateEnd,
    flows,
    excludeFlows,
    steps,
    excludeSteps,
    assignedTo,
    taskStatus,
    excludeStatus,
    lockable,
    orderBy,
    lockedBy,
    debug,
    skip,
    top,
  } = options;
  const qstrs = [];
  if (tasks) qstrs.push(`tasks=${tasks}`);
  if (availableDateStart) qstrs.push(`availableDateStart=${availableDateStart}`);
  if (availableDateEnd) qstrs.push(`availableDateEnd=${availableDateEnd}`);
  if (flows) qstrs.push(`flows=${flows}`);
  if (excludeFlows) qstrs.push(`excludeFlows=${excludeFlows}`);
  if (steps) qstrs.push(`steps=${steps}`);
  if (excludeSteps) qstrs.push(`excludeSteps=${excludeSteps}`);
  if (assignedTo) qstrs.push(`assignedTo=${assignedTo}`);
  if (taskStatus) qstrs.push(`taskStatus=${taskStatus}`);
  if (excludeStatus) qstrs.push(`excludeStatus=${excludeStatus}`);
  if (lockable) qstrs.push(`lockable=${lockable}`);
  if (orderBy) qstrs.push(`orderBy=${orderBy}`);
  if (lockedBy) qstrs.push(`lockedBy=${lockedBy}`);
  if (debug) qstrs.push(`debug=${debug}`);
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/tasks${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getTasksByFileId(api, fileId, options = {}) {
  const {
    tasks,
    availableDateStart,
    availableDateEnd,
    flows,
    excludeFlows,
    steps,
    excludeSteps,
    assignedTo,
    taskStatus,
    excludeStatus,
    lockable,
    orderBy,
    lockedBy,
    debug,
    skip,
    top,
  } = options;
  const qstrs = [];
  if (tasks) qstrs.push(`tasks=${tasks}`);
  if (availableDateStart) qstrs.push(`availableDateStart=${availableDateStart}`);
  if (availableDateEnd) qstrs.push(`availableDateEnd=${availableDateEnd}`);
  if (flows) qstrs.push(`flows=${flows}`);
  if (excludeFlows) qstrs.push(`excludeFlows=${excludeFlows}`);
  if (steps) qstrs.push(`steps=${steps}`);
  if (excludeSteps) qstrs.push(`excludeSteps=${excludeSteps}`);
  if (assignedTo) qstrs.push(`assignedTo=${assignedTo}`);
  if (taskStatus) qstrs.push(`taskStatus=${taskStatus}`);
  if (excludeStatus) qstrs.push(`excludeStatus=${excludeStatus}`);
  if (lockable) qstrs.push(`lockable=${lockable}`);
  if (orderBy) qstrs.push(`orderBy=${orderBy}`);
  if (lockedBy) qstrs.push(`lockedBy=${lockedBy}`);
  if (debug) qstrs.push(`debug=${debug}`);
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/files/${fileId}/tasks${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getTasksByFileIdPost(api, fileId, options = {}) {
  const { filter, skip, top } = options;
  const qstrs = [];
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api
    .post(`api/files/${fileId}/tasks${qstr}`, filter)
    .then((res) => Promise.resolve(res.data));
}

export function updateTask(api, taskId, content) {
  return api.post(`api/tasks/${taskId}`, content).then((res) => Promise.resolve(res.data));
}
