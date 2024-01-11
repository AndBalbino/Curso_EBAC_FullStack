document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector('#avatar');
    const firstName = document.querySelector('#name');
    const username = document.querySelector('#username');
    const bio = document.querySelector('#bio');
    const repositorio = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');



    fetch('https://api.github.com/users/AndBalbino')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        firstName.innerText = json.name;
        username.innerText = json.login;
        bio.innerText = json.bio;
        following.innerText = json.following;
        followers.innerText = json.followers;
        repositorio.innerText = json.public_repos;
        link.href = json.html_url;
       
    })
})