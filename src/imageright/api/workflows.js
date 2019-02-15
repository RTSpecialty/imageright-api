// Workflows
export function getDefaultStepLink(api, stepId, options = {}) {
  const { isDefault, status } = options;
  const qstrs = [];
  if (isDefault) qstrs.push(`isDefault=${isDefault}`);
  if (status) qstrs.push(`status=${status}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api
    .get(`api/steps/${stepId}/links/default${qstr}`)
    .then((res) => Promise.resolve(res.data));
}

export function getPriorityList(api, stepId) {
  return api.get(`api/steps/${stepId}/priorities`).then((res) => Promise.resolve(res.data));
}

export function getSplitLinkParameters(api, stepId, options = {}) {
  const { isDebug } = options;
  const qstrs = [];
  if (isDebug) qstrs.push(`isDebug=${isDebug}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/steps/${stepId}/splitparams${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getStepAttributeById(api, stepId, id) {
  return api.get(`api/steps/${stepId}/attributes/${id}`).then((res) => Promise.resolve(res.data));
}

export function getStepAttributeByName(api, stepId, name) {
  return api.get(`api/steps/${stepId}/attributes/${name}`).then((res) => Promise.resolve(res.data));
}

export function getStepAttributes(api, stepId) {
  return api.get(`api/steps/${stepId}/attributes`).then((res) => Promise.resolve(res.data));
}

export function getStepLinks(api, srcStepId, options = {}) {
  const { targetStepId, status } = options;
  const qstrs = [];
  if (targetStepId) qstrs.push(`targetStepId=${targetStepId}`);
  if (status) qstrs.push(`status=${status}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/steps/${srcStepId}/links${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getSteps(api, flowId, options = {}) {
  const { includeBuddies, flag } = options;
  const qstrs = [];
  if (includeBuddies) qstrs.push(`includeBuddies=${includeBuddies}`);
  if (flag) qstrs.push(`flag=${flag}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/workflows/${flowId}/steps${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getUsersToAssign(api, stepId) {
  return api.get(`api/steps/${stepId}/users`).then((res) => Promise.resolve(res.data));
}

export function getWorkflows(api, options = {}) {
  const { includeBuddies } = options;
  const qstrs = [];
  if (includeBuddies) qstrs.push(`includeBuddies=${includeBuddies}`);
  const qstr = qstrs.length ? `?${qstrs.join('&')}` : '';
  return api.get(`api/workflows${qstr}`).then((res) => Promise.resolve(res.data));
}
