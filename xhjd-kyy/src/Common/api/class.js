import api from '../js/require'

export function getClassList() {
  return api.getClass()
    .then((response) => {
      return Promise.resolve(JSON.parse(response).data)
    }).catch((err) => {
      return Promise.reject(err)
    })
}
