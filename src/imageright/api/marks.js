export function getFileMarkDefinitions(api) {
  return api.get('api/marks')
    .then(res => Promise.resolve(res.data));
}

export function getFileMarkDefinitionsByFileTypeId(api, fileTypeId) {
  return api.get(`api/marks?fileTypeId=${fileTypeId}`)
    .then(res => Promise.resolve(res.data));
}

// V2

export function getFileMarkDefinitionsByFileTypeIdV2(api, fileTypeId) {
  return api.get(`api/v2/objectypes/${fileTypeId}/filemarks`)
    .then(res => Promise.resolve(res.data));
}

export function getFileMarkDefinitionsV2(api) {
  return api.get('api/v2/filemarks')
    .then(res => Promise.resolve(res.data));
}

export function getImageDataForFileMark(api, markId) {
  return api.get(`api/v2/filemarks/${markId}/image`)
    .then(res => Promise.resolve(res.data));
}

export function getImageDataForPageMark(api, markId) {
  return api.get(`api/v2/pagemarks/${markId}/image`)
    .then(res => Promise.resolve(res.data));
}

export function getMarksForFile(api, fileId) {
  return api.get(`api/v2/files/${fileId}/marks`)
    .then(res => Promise.resolve(res.data));
}

export function getMarksForPage(api, pageId) {
  return api.get(`api/v2/pages/${pageId}/marks`)
    .then(res => Promise.resolve(res.data));
}

export function getPageMarkDefinitions(api) {
  return api.get('api/v2/pagemarks')
    .then(res => Promise.resolve(res.data));
}

export function getPageMarkDefinitionsByFileTypeId(api, fileTypeId) {
  return api.get(`api/v2/objectypes/${fileTypeId}/pagemarks`)
    .then(res => Promise.resolve(res.data));
}

export function getPageMarksForFile(api, fileId) {
  return api.get(`api/v2/files/${fileId}/pagemarks`)
    .then(res => Promise.resolve(res.data));
}
