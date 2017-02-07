export function getConcurrentLoginData(api, featureName) {
  return api.get(`api/licensing/${featureName}/currentlogindata`)
    .then(res => Promise.resolve(res.data));
}

export function getMessages(api, referenceKey) {
  return api.get(`api/licensing/${referenceKey}`)
    .then(res => Promise.resolve(res.data));
}

export function login(api, programId, featureName) {
  return api.post(`api/licensing/${programId}/${featureName}/login`)
    .then(res => Promise.resolve(res.data));
}

export function logout(api, loginId, featureName) {
  return api.post(`api/licensing/${loginId}/${featureName}/logout`)
    .then(res => Promise.resolve(res.data));
}

export function stillAlive(api, referenceKey, programId, featureName) {
  return api.post(`api/licensing/${referenceKey}/${programId}/${featureName}/stillalive`)
    .then(res => Promise.resolve(res.data));
}

export function validateLicense(api, feature) {
  return api.get(`api/licensing/ValidateLicese/${feature}`)
    .then(res => Promise.resolve(res.data));
}
