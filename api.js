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
// window.onload = () => {
//   console.log("로딩되었음");
// };

// var xhr = new XMLHttpRequest();

// //요청을 보낼 방식, 주소, 비동기여부 설정
// xhr.open("GET", "http://127.0.0.1:8000/movie/genre/액션/", true);

// //요청 전송
// xhr.send();

// //통신후 작업
// xhr.onload = () => {
//   //통신 성공
//   if (xhr.status == 200) {
//     console.log(xhr.response);
//     console.log("통신 성공");
//   } else {
//     //통신 실패
//     console.log("통신 실패");
//   }
// };

$(document).ready(function () {
  $("#cards-boxss").empty();
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/movie/average7/", //사용자가 가져온 API를 넣으세요
    data: {},
    success: function (response) {
      let article = response;
      for (let i = 0; i < 6; i++) {
        let title = article[i]["title"];
        let image_url = article[i]["poster_path"];

        let temp_html = `<div class="card">
                              <a href = '#'>
                              <img
                                  class="card-img-top"
                                  src="https://image.tmdb.org/t/p/w200${image_url}"
                                  alt="${title}"/>
                                  </a>
  
                              <div class="card-body">
                                    
                                    ${title}
                              </div>
                          </div>`;

        $("#cards-boxss").append(temp_html);
      }
    },
  });
});

$(document).ready(function () {
  $("#cards-ad").empty();
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/movie/genre/모험/", //사용자가 가져온 API를 넣으세요
    data: {},
    success: function (response) {
      let article = response;
      for (let i = 0; i < 6; i++) {
        let title = article[i]["title"];
        let image_url = article[i]["poster_path"];

        let temp_html = `<div class="card">
                              <a href = '#'>
                              <img
                                  class="card-img-top"
                                  src="https://image.tmdb.org/t/p/w200${image_url}"
                                  alt="${title}"/>
                                  </a>
  
                              <div class="card-body">
                                    
                                    ${title}
                              </div>
                          </div>`;

        $("#cards-ad").append(temp_html);
      }
    },
  });
});

$(document).ready(function () {
  $("#cards-action").empty();
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/movie/genre/액션/", //사용자가 가져온 API를 넣으세요
    data: {},
    success: function (response) {
      let article = response;
      for (let i = 0; i < 6; i++) {
        let title = article[i]["title"];
        let image_url = article[i]["poster_path"];

        let temp_html = `<div class="card">
                              <a href = '#'>
                              <img
                                  class="card-img-top"
                                  src="https://image.tmdb.org/t/p/w200${image_url}"
                                  alt="${title}"/>
                                  </a>
  
                              <div class="card-body">
                                    
                                    ${title}
                              </div>
                          </div>`;

        $("#cards-action").append(temp_html);
      }
    },
  });
});

$(document).ready(function () {
  $("#love_").empty();
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/movie/genre/로맨스/", //사용자가 가져온 API를 넣으세요
    data: {},
    success: function (response) {
      let article = response;
      for (let i = 0; i < 6; i++) {
        let title = article[i]["title"];
        let image_url = article[i]["poster_path"];

        let temp_html = `<div class="card">
                              <a href = '#'>
                              <img
                                  class="card-img-top"
                                  src="https://image.tmdb.org/t/p/w200${image_url}"
                                  alt="${title}"/>
                                  </a>
  
                              <div class="card-body">
                                    
                                    ${title}
                              </div>
                          </div>`;

        $("#love_").append(temp_html);
      }
    },
  });
});
