///Fonction ajax
function ajax(url,callbackSucces){
    $.get(url, function(result){
        callbackSucces(result);
      });
}

function navmenuAfterClick(){
    let navmenulinks = document.querySelectorAll('#navmenu a');
    navmenulinks.forEach(navmenulink=>{
        //alert(navmenulink.hash)
        if(!document.querySelector(navmenulink.hash)){
            navmenulink.classList.remove('active');
        }else{
            navmenulink.classList.add('active');
        }
    })
}
//Changement contenue
function changementNavigation(fichier){
    ajax(fichier,(resultHtml)=>{
        document.getElementById("contenueid").innerHTML=resultHtml;
        navmenuAfterClick();
    })
}