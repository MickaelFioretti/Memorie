// afficher les carte au clic et verifi si elle sont juste
function gameplayDuJeux () {
    
    var imageByName = document.getElementsByTagName('img');

    // appelle de la function pour cree les image
    creationDesImages ();

    
    var touteLesCarte = document.querySelectorAll('img');

    // appelle de la function pour le ramdom
    aleatoireDesCartes (imageByName);

    let game = 0;

    touteLesCarte.forEach(element => {
        element.onclick = function () {
            element.src = element.src1
            verifCarte.push(element.src1)
            tabId.push(element.id);

            if (verifCarte.length === 2) {
                
                if (verifCarte[0] == verifCarte[1]) {
                    verifCarte = [];
                    tabId = [];
                    game++;

                } else {
                    setTimeout(function () {
                        tabId.forEach(function (element) {
                            document.getElementById(element).src = backLinkImg;
                            verifCarte = [];
                            tabId = [];
                        })
                    }, 800)
                        
                        touteLesCarte.forEach(function(element){
                            element.style.pointerEvents="none"
                            setTimeout(function (){
                                element.style.pointerEvents="auto"
                        },800)
                    })
                }

                if ( (game*2) == faceDesCarte[level].length) {
                    if (level == LAST_LEVEL){
                        buttonReplay.hidden = false;
                    }else {
                        level++;
                        gameplayDuJeux ();
                    }
                }
            }
        }
    });
};