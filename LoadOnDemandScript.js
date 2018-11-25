/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var scroll;
var cont = 0;
var verfica = true;
var url;
var ultimo;
function my_scroll(){
    
    if(scroll.scrollHeight-scroll.scrollTop === scroll.clientHeight){
        $("#tr2").css(
            "background-color","#0f4341"
        );
        url = "BuscaEstudantes?ultimo=" + ultimo;
        buscaRegistos();
    }
    
};
var timer = setInterval(insere_lista_vazia, 1000);
function insere_lista_vazia(){
    scroll = document.getElementById('neldo_div_2');
    row = document.getElementById('tbon').insertRow();
    row.setAttribute("class", "neldo_tr_0"); 
    row.setAttribute('id', cont);

    $("#h6_total").text(cont);
    if(scroll!=null)
        if(scroll.scrollHeight>scroll.clientHeight){
            $("#neldo_div_2").css(
                "overflow-y","scroll"   
            );
            clearInterval(timer);
            url = "BuscaEstudantes?quantidade=" + cont;
            timer = setInterval(buscaRegistos, 1000);
        }
    cont++;
}
function buscaRegistos() {
    clearInterval(timer);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            inserirRegistos(this);
            
        }
    };
    
    xhttp.open("POST", url, true);
    xhttp.send();
}
function inserirRegistos(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("estudante");
    if(verfica){
        
        for(i=0;i<cont-1;i++){
            var row = document.getElementById(i);
            
            var c = row.insertCell();
        
            var idestudante = x[i].getElementsByTagName("idestudante")[0].childNodes[0].nodeValue;
            
            c.innerHTML = c.innerHTML = x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");

            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");

            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("naturalidade")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");
            
            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("escola")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");
            ultimo = idestudante;
            
        }
        verfica = false;
    }else{
        for (i = 0; i < x.length; i++) {
        
            var row = document.getElementById('tbon').insertRow();;
            row.setAttribute("class", "neldo_tr_0"); 
            
            var c = row.insertCell();
        
            var idestudante = x[i].getElementsByTagName("idestudante")[0].childNodes[0].nodeValue;
            
            c.innerHTML = c.innerHTML = x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");

            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");

            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("naturalidade")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");
            
            c = row.insertCell();
            c.innerHTML = x[i].getElementsByTagName("escola")[0].childNodes[0].nodeValue;
            c.setAttribute("class", "neldo_td_0");
            ultimo = idestudante;

        }
    }
}



