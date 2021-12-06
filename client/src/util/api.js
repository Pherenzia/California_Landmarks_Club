import { token } from "./auth";

// Helper function to send a request using POST method and include a body in JSON format.
async function postJSON(url, body, headers = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    // Stringify body if it isn't a string. Assumes a string means that the body
    // is already in JSON format.
    body: typeof body === "string" ? body : JSON.stringify(body),
  });

  const data = await res.json();
  if (res.ok) {
    return data;
  }

  // response not ok. Assumes errors use json format too.
  throw data;
}

// save book data for a logged in user
// JM export const saveBook = (bookData, token) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(bookData),
//   });
// };

export function login({ email, password }) {
  return postJSON("/api/auth/login", { email, password });
}

export function register({ email, username, password }) {
  return postJSON("/api/auth/register", { email, username, password });
}

export async function findMe() {
  const res = await fetch("/api/auth/me", {
    headers: {
      // Add auth header to requests requiring authentication
      //JM 'Content-Type': 'application/json',
      authorization: `Bearer ${token.get()}`,
    },
  });
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  throw data;
}

// JM export const searchDeveloperHere = (query) => {
//   return fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${query} `);
// }
