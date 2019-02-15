// Users
export function changeUserPassword(api, content) {
  return api.post('api/users/changepassword', content).then((res) => Promise.resolve(res.data));
}

export function getCurrentUser(api) {
  return api.get('api/users/currentuser').then((res) => Promise.resolve(res.data));
}

export function getCurrentUserData(api) {
  return api.get('api/users/currentuser/userdata').then((res) => Promise.resolve(res.data));
}

export function getUserData(api, userId) {
  return api.get(`api/users/${userId}/userdata`).then((res) => Promise.resolve(res.data));
}
