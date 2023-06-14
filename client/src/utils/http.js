const SERVER_URL = `http://127.0.0.1:3042`;

export async function request(endpoint, {auth = true, ...options} = {}) {
  const url = new URL(endpoint, SERVER_URL);
  const token = auth
    ? getToken()
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

function getToken() {
  const token = localStorage.getItem("token");
  if (token === null) {
    raiseError(new Error("No authorization token found"));
  }
  return token;
}

function raiseError(error) {
  alert(error.message);
  throw error;
}
