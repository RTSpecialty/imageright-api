export function createFile(api, fileObj) {
  return api.post('api/files', fileObj)
    .then(res => Promise.resolve(res.data));
}

export function findFiles(api, searchObj) {
  return api.post('api/files/find', searchObj)
    .then(res => Promise.resolve(res.data));
}

export function getFileById(api, fileId, includeHasNotes) {
  const qstr = (includeHasNotes) ? '?includeHasNotes=true' : '';
  return api.get(`api/files/${fileId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function getRelatedFiles(api, fileId) {
  return api.get(`api/files/${fileId}/related`)
    .then(res => Promise.resolve(res.data));
}
