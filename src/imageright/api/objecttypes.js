export function getAllowedTypes(api, typeId) {
  return api
    .get(`api/objecttypes/allowedtypes?typeId=${typeId}`)
    .then((res) => Promise.resolve(res.data));
}

export function getAllowedTypesForContainer(api, objectId) {
  return api
    .get(`api/containers/${objectId}/allowedtypes`)
    .then((res) => Promise.resolve(res.data));
}

export function getAttributeDefinitionsForType(api, objectTypeId) {
  return api
    .get(`api/objecttypes/${objectTypeId}/attributes`)
    .then((res) => Promise.resolve(res.data));
}

export function getFileTypeExtensions(api, fileTypeId) {
  return api
    .get(`api/objecttypes/${fileTypeId}/extensions`)
    .then((res) => Promise.resolve(res.data));
}

export function getFileTypeTemplate(api, fileTypeId) {
  return api.get(`api/objecttypes/${fileTypeId}/template`).then((res) => Promise.resolve(res.data));
}

export function getObjectType(api, objectTypeId) {
  return api.get(`api/objecttypes/${objectTypeId}`).then((res) => Promise.resolve(res.data));
}

export function getSortOptionsForType(api, objectTypeId) {
  return api
    .get(`api/objecttypes/${objectTypeId}/sortoptions`)
    .then((res) => Promise.resolve(res.data));
}

export function getTypesForClass(api, standardObjectClass) {
  return api.get(`api/objecttypes/${standardObjectClass}`).then((res) => Promise.resolve(res.data));
}
