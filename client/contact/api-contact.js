const create = async (user) => {
  try {
    let response = await fetch("/api/contacts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const list = async (signal) => {
  try {
    let response = await fetch("/api/contacts/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const read = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/contacts/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const update = async (params, credentials, user) => {
  try {
    let response = await fetch("/api/contacts/" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const remove = async (params, credentials) => {
  try {
    let response = await fetch("/api/contacts/" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const removeAll = async (credentials) => {
  try {
    let response = await fetch("/api/contacts/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${credentials.t}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Failed to delete contacts:", err);
    return { error: err.message }; 
  }
};

export { create, list, read, update, remove, removeAll };
