/* eslint-disable import/prefer-default-export */

export function getImageById(api, imageId, version) {
  const qstr = version ? `?version=${version}` : '?version=0';
  const options = { responseType: 'arraybuffer' };
  return api.get(`api/images/${imageId}${qstr}`, options).then((res) => Promise.resolve(res.data));
}
