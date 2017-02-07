export function getDocumentOverlayInfo(api, docId) {
  return api.get(`api/documents/${docId}/overlayInfo`)
    .then(res => Promise.resolve(res.data));
}

export function getOverlayImage(api, overlayId, overlayImageId) {
  return api.get(`api/overlays/${overlayId}?overlayImageId=${overlayImageId}`)
    .then(res => Promise.resolve(res.data));
}
