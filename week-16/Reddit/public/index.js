document.addEventListener('DOMContentLoaded', () =>{ //for to upload everything when page onloaded
const postsDiv = document.getElementById("posts-div");

fetch("/api/posts", {// endpoint created //ANSWER FROM BROWSER
        method: "GET",
    })
    .then((response) => {
        return response.json();  //json() return promise
    })
    .then((posts) =>{ //in json format (in POSTMAN)
        posts.forEach(post => {
            let postId = post.id; //id for current post in for loop

            const newPostDiv = document.createElement("div")
            newPostDiv.setAttribute("class", "div-for-post");
            const voting = document.createElement("div");
            voting.setAttribute("class", "voting");
            const imgUp= document.createElement("img");

            
            imgUp.addEventListener("click", (e) =>{
                fetch(`/api/posts/${postId}/upvote`, { //fetch returns promise
                   method: "PUT", 
                })
                .then((response) => {//returns object
                    if(response.ok){
                        return response.text();
                    }
                })
                .then((body)=>{ //body = string (body of answer)
                    console.log(body);
                    h2.innerText = body;
                }) //
                .catch((err) => console.log(err))
            })
            imgUp.setAttribute("src", "assets/upvote.png");
            imgUp.setAttribute("alt","upvote");

            const h2 = document.createElement("h2")
            h2.setAttribute("class", "voting-score");
            h2.innerText = post.score; //as default 

            const imgDown= document.createElement("img");
            imgDown.addEventListener("click", (e) =>{
                fetch(`/api/posts/${postId}/downvote`, {
                    method: "PUT", 
                 })
                 .then((response) => {//
                     if(response.ok){
                         return response.text();//promise
                     }
                 })
                 .then((body)=>{ //body = string (body of answer)
                     console.log(body);
                     h2.innerText = body;
                 }) //
                 .catch((err) => console.log(err))
             })
            imgDown.setAttribute("src", "assets/downvote.png");
            imgDown.setAttribute("alt","downvote");
            const newPost = document.createElement("div");
            newPost.setAttribute("class","new-post");

            const h2Title = document.createElement("h2");
            h2Title.setAttribute("class", "title");
            h2Title.innerText = post.title;

            const pUrl = document.createElement("p");
            pUrl.setAttribute("class", "url");
            pUrl.innerText = post.url;

            const buttModify = document.createElement("button");
            buttModify.innerText = "Modify ";
            buttModify.addEventListener("click", (e)=> {
                window.location.href = "/new-post.html";
                document.cookie = JSON.stringify({id:postId});
                
                // fetch(`/api/posts/${postId}`, {
                //     method: "PUT", 
                //  })
                // //  .then((res)=>{})
                //  .catch((err) => console.log(err))
            })           

            const buttRemove = document.createElement("button");            
            buttRemove.innerText = "Remove ";
            buttRemove.addEventListener("click", (e) => {
                fetch(`/api/posts/${post.id}`, {
                    method: 'DELETE',
                  }).then((response) => {
                    if (response.ok) { //response.ok = response === 200;
                      postsDiv.removeChild(newPostDiv);
                    }
                  });
                }); 

            postsDiv.appendChild(newPostDiv);
            newPostDiv.appendChild(voting);
            newPostDiv.appendChild(newPost);
            voting.appendChild(imgUp);
            voting.appendChild(h2);
            voting.appendChild(imgDown);
            newPost.appendChild(h2Title);
            newPost.appendChild(pUrl);
            newPost.appendChild(buttModify);
            newPost.appendChild(buttRemove);         
            
    })
    })
    .catch((err) => console.log(err));
});