import { API_URL } from "$env/static/private";

const loginUser = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  // 登录成功返回200以及access_token
  if (response.status === 200) {
    const { access_token } = await response.json()
    return access_token
  }
  // 登录失败返回401
  return null
}

const verifyUser = async (token: string) => {
  // 以bearer token的形式向接口发送请求
  const response = await fetch(`${API_URL}/auth/validate`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  // 若返回"message": "success" 则说明token有效
  if (response.status === 200) {
    return true
  }

  // 若返回401则说明token无效
  return false;
}

export { loginUser, verifyUser };