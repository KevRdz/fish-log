import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/fishes`

async function create(fish) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(fish)
    })
    return res.json()
  } catch (err) {
    console.log(err);
  }
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export {
  create,
  getAll
}