
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
