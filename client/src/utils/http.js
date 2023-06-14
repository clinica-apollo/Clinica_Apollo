const SERVER_URL = `https://sad-chivalrous-wicked-brick.deploy.space`;

export async function request(endpoint, {auth = true, ...options} = {}) {
  const url = new URL(endpoint, SERVER_URL);
  const token = auth
    ? localStorage.getItem("token")
    : null;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
      ...options?.headers,
    },
  }).catch(raiseError);

  const data = await res.json();

  if (!res.ok) {
    raiseError(new Error(data.message ?? res.statusText));
  }

  return data;
}

function raiseError(error) {
  alert(error.message);
  throw error;
}
