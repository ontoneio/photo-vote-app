
function getNewImage (view) {
    const photoView = document.querySelector("#photo-view");
    const randomPicture = photoView.src =`https://picsum.photos/800/500/?image=${Math.round(Math.random()*49)}`
    // const photoID = randomPicture.match(/\d+$/);
    console.log(`photoID: ${photoID}\nrandomPic: ${randomPicture}`);
}

window.onload = (photoView) => {
    getNewImage(photoView)
}





/**
 *  EVENT HANDLERS
 * 
 */

const likeBtn = document.querySelector("#like-vote");
const dislikeBtn = document.querySelector("#dislike-vote")
