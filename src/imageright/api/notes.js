export function addNoteContainer(api, objectId, category) {
  return api.post(`api/objects/${objectId}/notes/${category}`)
    .then(res => Promise.resolve(res.data));
}

export function addNoteItem(api, objectId, noteObj) {
  return api.post(`api/objects/${objectId}/notes`, noteObj.toJSON())
    .then(res => Promise.resolve(res.data));
}

export function getNotes(api, objectId, category, status, includeHidden, includeDeleted) {
  const qstrs = [];
  if (status) qstrs.push(`status=${status}`);
  if (includeHidden) qstrs.push(`includeHidden=${includeHidden}`);
  if (includeDeleted) qstrs.push(`includeDeleted=${includeDeleted}`);
  const qstr = (qstrs.length) ? `?${qstrs.join('&')}` : '';
  return api.get(`api/objects/${objectId}/notes/${category}${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function lockNote(api, objectId, category, version) {
  const qstr = `?version=${version}`;
  return api.post(`api/objects/${objectId}/notes/${category}/lock${qstr}`)
    .then(res => Promise.resolve(res.data));
}

export function setNoteAsDefault(api, objectId, category, collectionId) {
  return api.post(`api/objects/${objectId}/notes/${category}/${collectionId}/setasdefault`)
    .then(res => Promise.resolve(res.data));
}

export function unlockNote(api, objectId, category) {
  return api.post(`api/objects/${objectId}/notes/${category}/unlock`)
    .then(res => Promise.resolve(res.data));
}
