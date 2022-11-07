window.onload = () => {
  console.log("로딩되었음");
};

async function handleSignin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  const response = await fetch("http://127.0.0.1:8000/users/signup/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  console.log(response);
}

async function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  const response = await fetch("http://127.0.0.1:8000/users/api/token/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const response_json = await response.json();

  console.log(response_json);

  localStorage.setItem("access", response_json.access);
  localStorage.setItem("refresh", response_json.refresh);

  const base64Url = response_json.access.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  localStorage.setItem("payload", jsonPayload);
}

function handleLogout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("payload");
}

async function postComment(movie_pk, comment_content) {
  const commentData = {
    content: comment_content,
  };

  const response = await fetch(
    `http://127.0.0.1:8000/comment/${movie_pk}/comment`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      method: "POST",
      body: JSON.stringify(commentData),
    }
  );

  if (response.status == 200) {
    return response;
  } else {
    alert(response.status);
  }
}
