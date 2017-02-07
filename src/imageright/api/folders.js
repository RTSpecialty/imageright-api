export function createFolder(api, folderObj) {
  return api.post('api/folders', folderObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function findFolders(api, searchObj) {
  return api.post('api/folders/find', searchObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function getFolderById(api, folderId, includeHasNotes) {
  const qstr = (includeHasNotes) ? '?includeHasNotes=true' : '';
  return api.get(`api/folders/${folderId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}
