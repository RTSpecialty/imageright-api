export function createInstances(api, id, instObj) {
  return api.post(`api/instances/${id}/children`, instObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function getInstanceChildren(api, id) {
  return api.get(`api/instances/${id}/children`)
    .then(res => Promise.resolve(res.data));
}

export function getParentPath(api, id, isContainer) {
  const qstr = `?id=${id}&isContainer=${isContainer}`;
  return api.get(`api/instances/getparentpath${qstr}`)
    .then(res => Promise.resolve(res.data));
}
