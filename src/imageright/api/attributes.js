export function getAttributeById(api, objId, attId) {
  return api.get(`api/containers/${objId}/attributes/${attId}`)
    .then(res => Promise.resolve(res.data));
}

export function getAttributeByName(api, objId, attName) {
  return api.get(`api/containers/${objId}/attributes/${attName}`)
    .then(res => Promise.resolve(res.data));
}

export function getAttributeByObject(api, objId) {
  return api.get(`api/attributes/${objId}`)
    .then(res => Promise.resolve(res.data));
}
