export async function doRequestWithToken(method, url, body) {
  const token = localStorage.getItem(ACCESS_TOKEN);
  try {
    const headers = {
      ...header,
      'Content-Type': 'application/json',
      Authorization = `Bearer ${token}`
    }
    return await axios.request({ method, url, headers, data: body || {} });
  } catch (error) {
    return error;
  }
}

export async function doRequestWithoutToken(method, url, body) {
  try {
    const headers = {
      ...header,
      'Content-Type': 'application/json',
    }
    return await axios.request({ method, url, headers, data: body || {} });
  } catch (error) {
    return error;
  }
}