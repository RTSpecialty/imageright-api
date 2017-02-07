export function createDocument(api, docObj) {
  return api.post('api/documents', docObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function findDocuments(api, searchObj) {
  return api.post('api/documents/find', searchObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function getDocumentById(api, docId) {
  return api.get(`api/documents/${docId}`)
    .then(res => Promise.resolve(res.data));
}

export function moveDocument(api, moveObj) {
  return api.post('api/documents/move', moveObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function updateProperties(api, docId, propObj) {
  return api.post(`api/documents/${docId}/properties`, propObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

// V2

export function copyDocument(api, copyObj) {
  return api.post('api/v2/documents/copy', copyObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function deleteDocument(api, docId, force) {
  const qstr = (force) ? '?force=true' : '';
  return api.delete(`api/v2/documents/${docId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function moveDocumentV2(api, moveObj) {
  return api.post('api/v2/documents/move', moveObj.toJSON())
    .then(res => Promise.resolve(res.data));
}
