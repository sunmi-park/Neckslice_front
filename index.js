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
                            <a href = 'http://127.0.0.1:5500/front/detail.html'>
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
                          <a href = "http://127.0.0.1:5500/front/detail.html">
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
      let movie_id = article[i]["id"];

      let element_card = document.createElement("div"); 
        element_card.setAttribute("class", "card");
      

      let link = document.createElement("a");
        // link.setAttribute("href", "여기에 주소 넣으세요");
      let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        let img_src = "https://image.tmdb.org/t/p/w200" + image_url;
        img.setAttribute("src", img_src);
        img.setAttribute("alt", title);
      link.appendChild(img);
      
      let element_card_body = document.createElement("div");
        element_card_body.setAttribute("class", "card_body");
        let card_body_title = document.createTextNode(title);
      element_card_body.appendChild(card_body_title);
      

      element_card.appendChild(link);
      element_card.appendChild(element_card_body);
      $("#cards-boxss").append(element_card);

      element_card.setAttribute("onclick", "articleDetail(this.id)");
    }
  },
  });
});

//       let temp_html = `<div class="card">
//                             <a href = 'http://127.0.0.1:5500/front/detail.html'></a>
//                             <img
//                                 onmouseup="window.open('http://127.0.0.1:5500/front/detail.html')"
//                                 class="card-img-top"
//                                 src="https://image.tmdb.org/t/p/w200${image_url}"
//                                 alt="${title}"/>
                                

//                             <div class="card-body">
                                  
//                                   ${title}
//                             </div>
//                         </div>`;

//       $("#cards-action").append(temp_html);
//     }
//   },
//   });
// });



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
                            <a href = 'http://127.0.0.1:5500/front/detail.html'>
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
