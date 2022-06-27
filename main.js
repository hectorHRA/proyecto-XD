function accionparaelsi () {
    alert('ahora somos novios </3')
}

function mueveelboton () {
    with = window.innerWidth ();
    height = window.innerHeight ();
    newwith =  ( math.random () *  with  ) ;
    newheight =  math.ramdon () * height ;

    document.getElementById('btn no').style.position = "absolute";
    document.getElementById('btn no').style.left = newwith + "px";
    document.getElementById('btn no').style.top = newheight + "px";
}