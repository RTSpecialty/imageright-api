/* eslint-disable import/prefer-default-export */

export function getImageById(api, imageId, version) {
  const qstr = (version) ? `?version=${version}` : '?version=0';
  return api.get(`api/images/${imageId}${qstr}`)
    .then(res => Promise.resolve(res.data));
}
