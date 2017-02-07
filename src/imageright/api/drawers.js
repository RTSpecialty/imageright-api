export function getDrawers(api) {
  return api.get('api/drawers')
    .then(res => Promise.resolve(res.data));
}

export function getDrawerById(api, id) {
  return api.get(`api/drawers/${id}`)
    .then(res => Promise.resolve(res.data));
}

export function getDrawerByName(api, name) {
  return api.get(`api/drawers/${name}`)
    .then(res => Promise.resolve(res.data));
}

export function getDrawersInContainer(api, containerId) {
  return api.get(`api/containers/${containerId}/drawers`)
    .then(res => Promise.resolve(res.data));
}

export function getDrawersInContainerByName(api, containerId, name) {
  return api.get(`api/containers/${containerId}/drawers/${name}`)
    .then(res => Promise.resolve(res.data));
}
