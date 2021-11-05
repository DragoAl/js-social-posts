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
        'fotoprofilo' : "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        'datacreazione' : "ieri",
        'testopost' : "lorem ipsum ",
        'immagine' : "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
    }

    // {
    //     'nome profilo' : "",
    //     'foto profilo' : "",
    //     'data creazione' : "",
    //     'testo post' : "",
    //     'immagine' : "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    // },

    // {
    //     'nome profilo' : "",
    //     'foto profilo' : "",
    //     'data creazione' : "",
    //     'testo post' : "",
    //     'immagine' : ""
    // },

    // {
    //     'nome profilo' : "",
    //     'foto profilo' : "",
    //     'data creazione' : "",
    //     'testo post' : "",
    //     'immagine' : ""
    // }

];

for (let i = 0; i < arrPost.length; i++) {

    let objPost = arrPost[i];
    // CON UN CICLO "FOR IN" 
    for (let key in objPost) {
        console.log((key, objPost[key]));
        dataName=objPost.nomeprofilo;
        dataTime= objPost.datacreazione
        dataPhotoProfile=objPost.fotoprofilo;
        dataText = objPost.testopost
        dataImg=objPost.immagine;

    }

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