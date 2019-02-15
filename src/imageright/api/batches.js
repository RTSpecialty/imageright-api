/* eslint-disable import/prefer-default-export */

export function createBatch(api, batch) {
  return api.post('api/batches', batch).then((res) => Promise.resolve(res.data));
}
