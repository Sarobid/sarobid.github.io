///Fonction ajax
function ajaxPost(url,data,callbackSucces){
    $.post(url, data, function(result){
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
    ajaxPost(fichier,{},(resultHtml)=>{
        document.getElementById("contenueid").innerHTML=resultHtml;
        navmenuAfterClick();
    })
}