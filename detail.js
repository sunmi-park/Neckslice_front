var xhr = new XMLHttpRequest();
//요청을 보낼 방식, 주소, 비동기여부 설정
xhr.open("GET", "http://127.0.0.1:8000/movie", true);

//요청 전송
xhr.send();

//통신후 작업
xhr.onload = () => {
  //통신 성공
  if (xhr.status == 200) {
    console.log(xhr.response);
    console.log("통신 성공");
  } else {
    //통신 실패
    console.log("통신 실패");
  }
};

window.onload = () => {
  console.log("로딩되었음");
};

app.get("http://127.0.0.1:8000/movie/`${movie_pk}`", (request, response) => {
  const movie = movies.find((movie) => movie.id === Number(request.params.id));
  if (!movie) {
    return res.status(404).send("영화 정보를 찾을 수 없습니다");
  }
  res.status(200).send(movie);
});

async function postComment() {
  const comment_content = document.getElementById("comment_content");
  const comment = await postComment(comment_content.value);

  console.log(response);
}


// async function loadArticle(){
//     articles = await getElementById()
//     console.log(articles)
//     const article_list = document.getElementById("articles")

// }
//     article.forEach(article =>{
//         const newArticle = document.createElement('li')
//         newArticle.setAttribute('id', article._id)
//         newArticle.innerText = article.title
//         newArticle.setAttribute('onclick','articleDetail(this.id')

//         article_list.appendChild(newArticle)


//     })


    function articleDetail(movie_id){
        console.log(movie_id)
        const url = `${frontend_base_url}/detail.html?id=${movie_id}`
        location.href= url
    }

