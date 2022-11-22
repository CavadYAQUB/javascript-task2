function Show() {
  
   let x=document.getElementById('inp').value;
   let result=x.slice(-3);
   
   let y=Number(result);

    if (isNaN(y)&&y<101&&y>399) {
        document.body.innerHTML="Reesssaad duzgun qrup adi gir"
        document.body.style.color='red'
        document.body.style.backgroundColor='blanchedalmond'

    }
    else if(y>100&&y<200)
    {
        document.body.innerHTML="Resssssad seher qrupusan"
        document.body.style.color='green'
        document.body.style.backgroundColor='bisque'
        
    }
    else if(y>199&&y<300){
        document.body.innerHTML="Resssad gunorta qrupusan"
          document.body.style.backgroundColor='red'
          document.body.style.color='#fff'

    }else if(y>299&&y<400){
        document.body.innerHTML="resssad axsam qrupusan"
        document.body.style.backgroundColor="#fff";
        document.body.style.color='blue'
    }
    else{
        document.body.innerHTML="duzgun ifade girin"
        document.body.style.backgroundColor="black";
        document.body.style.color='#fff'
    }
    

}
function Prompt() {
    let yas=prompt("Yasinizi girin")
    if (yas>18) {
        document.getElementById("second").innerHTML='sayta xos gelmissiniz qrupunuzu secin'
        
    }else{
       document.getElementById("second").innerHTML='sayta girmek sene olmaz'
       document.getElementById("inp").style.display='none'
       document.getElementById("four").style.display='none'
    }   
}
function escape() {
    document.getElementById('important').style.display='block'
    document.getElementById("inp").style.display='inline-block'
       document.getElementById("four").style.display='inline-block'
}