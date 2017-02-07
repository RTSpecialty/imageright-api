export function findVapTasks(api, filterObj, skip, top) {
  const qstrs = [];
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  const qstr = (qstrs.length >= 0) ? `?${qstrs.join('&')}` : '';
  return api.post(`api/integration/vap/tasks/find${qstr}`, filterObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function findVapTasksByClientId(api, clientId, filterObj, skip, top, includeDeletedFiles) {
  const qstrs = [];
  if (skip) qstrs.push(`skip=${skip}`);
  if (top) qstrs.push(`top=${top}`);
  if (includeDeletedFiles) qstrs.push(`includeDeletedFiles=${includeDeletedFiles}`);
  const qstr = (qstrs.length >= 0) ? `?${qstrs.join('&')}` : '';
  return api.post(`api/integration/vap/client/${clientId}/tasks/find${qstr}`, filterObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function getClientFiles(api, clientId, includeDeletedFiles) {
  const qstr = (includeDeletedFiles) ? `?includeDeletedFiles=${includeDeletedFiles}` : '';
  return api.get(`api/integration/vap/files/client/${clientId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function getPolicyFolder(api, policyId, includeDeletedFiles) {
  const qstr = (includeDeletedFiles) ? `?includeDeletedFiles=${includeDeletedFiles}` : '';
  return api.get(`api/integration/vap/files/policy/${policyId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function getVersion(api) {
  return api.get('api/integration/version')
    .then(res => Promise.resolve(res.data));
}
