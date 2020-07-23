// create img
function creationDesImages () {
    document.querySelector('#createImg').innerHTML = "";
    for (var iterator = 0; iterator < cardsByLevel[level]; iterator++) {
        var img = document.createElement('img');
        img.className = "btn p-0"
        img.type = "image/png"
        img.src = backLinkImg
        img.id = "idImage" + iterator
        document.querySelector('#createImg').appendChild(img);
    }
};

// ramdom des carte a trouver
function aleatoireDesCartes (imageByName) {
    for (let i = faceDesCarte[level].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = faceDesCarte[level][i]
        faceDesCarte[level][i] = faceDesCarte[level][j]
        faceDesCarte[level][j] = temp
    }
    
    // ajout des carte
    for (var iterator = 0; iterator < imageByName.length; iterator++) {
        imageByName[iterator].src1 = "./assets/img/carteAtrouver/" + faceDesCarte[level][iterator] + ".png"
    }
};