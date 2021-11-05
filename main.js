// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// creo l'array di oggetti
let postList = document.querySelector(".posts-list")
let postCont = document.querySelector(".post");
let likeBtn  = document.getElementsByClassName("likes__cta");
let likeBtn2  = document.getElementsByClassName("like-button", "js-like-button");
const arrPost = [
    {
        'nomeprofilo' : "Phil Mangione",
        'fotoprofilo' : "https://i.picsum.photos/id/496/300/300.jpg?hmac=n5Ml0FS01mB2Edd10qDhL0A0ov7073qkZJG8Mee0JNM",
        'datacreazione' : "3 mesi fa",
        'testopost' : "lorem ipsum Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immagine' : "https://unsplash.it/300/300?image=15" 
    },

    {
        'nomeprofilo' : "Bob Lucas",
        'fotoprofilo' : "https://i.picsum.photos/id/40/200/200.jpg?hmac=xkvWvgGjMuaPySCsshiYpLBOaphxinRhPkMRgx-LIYQ",
        'datacreazione' : "ieri",
        'testopost' : "lorem ipsum ",
        'immagine' : "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
    },

    {
        'nomeprofilo' : "Gina ",
        'fotoprofilo' : "https://i.picsum.photos/id/1060/200/200.jpg?hmac=M0E6SK-_reDe8rAPtwDpww5ihTgL6yewgERGc7eX5z8",
        'datacreazione' : "1 anno fa",
        'testopost' : "lorem ipsum",
        'immagine' : "" //https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68
    },

    {
        'nomeprofilo' : "Stella",
        'fotoprofilo' : "https://i.picsum.photos/id/987/200/200.jpg?hmac=9X6IIE8qZgx6bJb7rf3dZELTmfyt3rZAHw65r8_ko_4",
        'datacreazione' : "una settimana fa",
        'testopost' : "lorem ipsum",
        'immagine' : "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
    },

    {
        'nomeprofilo' : "Alberto",
        'fotoprofilo' : "https://i.picsum.photos/id/238/200/200.jpg?hmac=O4Jc6lqHVfaKVzLf8bWssNTbWzQoaRUC0TDXod9xDdM",
        'datacreazione' : "20 ore fa",
        'testopost' : "lorem ipsum",
        'immagine' : ""
    }

];


for (let i = 0; i < arrPost.length; i++) {

    let objPost = arrPost[i];
    dataName=objPost.nomeprofilo;
    dataTime= objPost.datacreazione
    dataPhotoProfile=objPost.fotoprofilo;
    dataText = objPost.testopost
    dataImg=objPost.immagine;

    if(dataImg === "") {
        postList.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${dataPhotoProfile}" alt="">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${dataName}</div>
                        <div class="post-meta__time">${dataTime}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${dataText}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
       

    }else {
        postList.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${dataPhotoProfile}" alt="">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${dataName}</div>
                        <div class="post-meta__time">${dataTime}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${dataText}</div>
            <div class="post__image">
                <img src="${dataImg}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }
    
   
    

    
}
// INCREMENTO LIKES
likeBtn.addEventListener("click",
    function() {
        console.log("ok");

    }
);