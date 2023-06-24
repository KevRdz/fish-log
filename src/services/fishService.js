import * as tokenService from './tokenService'
// eslint-disable-next-line no-undef
const BASE_URL = `${process.env.REACT_APP_BACK_END_ERVER_URL}/api/fishes`

async function create(fish) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(fish)
  })
  return res.json()
}

export {
  create
}