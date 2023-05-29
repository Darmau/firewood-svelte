export async function load({ cookies }) {
  const token = cookies.get('access_token');
  return {
    token
  }
}