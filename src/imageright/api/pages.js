export function checkReadPermissions(api, pageId) {
  return api.get(`api/pages/${pageId}/readpermissions`)
    .then(res => Promise.resolve(res.data));
}

export function createPage(api, page) {
  return api.post('api/pages', page.data, { headers: page.headers })
    .then(res => Promise.resolve(res.data));
}

export function getAllPagesFromDocument(api, docId) {
  return api.get(`api/documents/${docId}/pages`)
    .then(res => Promise.resolve(res.data));
}

export function getPageById(api, pageId) {
  return api.get(`api/pages/${pageId}`)
    .then(res => Promise.resolve(res.data));
}

export function getPageImageMetadata(api, pageId) {
  return api.get(`api/pages/${pageId}/imagemetadata`)
    .then(res => Promise.resolve(res.data));
}

export function lockPage(api, pageId) {
  return api.get(`api/pages/${pageId}/lock`)
    .then(res => Promise.resolve(res.data));
}

export function movePage(api, moveObj) {
  return api.post('api/pages/move', moveObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function rotatePage(api, pageId, rotationAngle) {
  return api.post(`api/pages/${pageId}/rotate?rotationAngle=${rotationAngle}`)
    .then(res => Promise.resolve(res.data));
}

export function unlockPage(api, pageId) {
  return api.get(`api/pages/${pageId}/unlock`)
    .then(res => Promise.resolve(res.data));
}

export function updatePageContent(api, pageId, content) {
  return api.post(`api/pages/${pageId}/content`, content)
    .then(res => Promise.resolve(res.data));
}

export function updatePageProperties(api, pageId, properties) {
  return api.post(`api/pages/${pageId}/properties`, properties)
    .then(res => Promise.resolve(res.data));
}

// V2

export function copyPage(api, copyObj) {
  return api.post('api/v2/pages/copy', copyObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function createPageV2(api, page, targetPageId, before) {
  const qstrs = [];
  if (targetPageId) qstrs.push(`targetPageId=${targetPageId}`);
  if (before) qstrs.push(`before=${before}`);
  const qstr = (qstrs.length) ? `?${qstrs.join('&')}` : '';
  return api.post(`api/v2/pages${qstr}`, page)
    .then(res => Promise.resolve(res.data));
}

export function mergeToDocument(api, mergeObj) {
  return api.post('api/v2/pages/merge', mergeObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function movePageV2(api, moveObj) {
  return api.post('api/v2/pages/move', moveObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function updatePageContentV2(api, pageId, content) {
  return api.post(`api/v2/pages/${pageId}/content`, content)
    .then(res => Promise.resolve(res.data));
}
