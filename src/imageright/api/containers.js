/* eslint-disable import/prefer-default-export */

export function getContainers(api, containerId, recursive) {
  const qstr = (recursive) ? '?recursive=true' : '';
  return api.get(`api/containers/${containerId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}
