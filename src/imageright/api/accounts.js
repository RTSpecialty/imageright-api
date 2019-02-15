export function getAccount(api, accountId, type) {
  const qstr = type ? `?type=${type}` : '';
  return api.get(`api/accounts/${accountId}${qstr}`).then((res) => Promise.resolve(res.data));
}

export function getAccountGroups(api, accountId) {
  return api.get(`api/accounts/${accountId}/groups`).then((res) => Promise.resolve(res.data));
}

export function getAllAccounts(api) {
  return api.get('api/accounts').then((res) => Promise.resolve(res.data));
}

export function getCurrentUserAccount(api) {
  return api.get('api/accounts/current').then((res) => Promise.resolve(res.data));
}

export function getCurrentUserGroups(api) {
  return api.get('api/accounts/current/groups').then((res) => Promise.resolve(res.data));
}
