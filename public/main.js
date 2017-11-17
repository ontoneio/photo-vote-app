function getNewImage () {
    const pictureURL =`https://picsum.photos/800/500/?image=${Math.round(Math.random()*49)}`;
    const photoElement = document.querySelector('.view-blk img');
    console.log (`picture: ${pictureURL}\nphotoElem: ${photoElement}`);
};

getNewImage()
