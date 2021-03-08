function Graphcomp(url ="images/vegetable.svg",text ="Leftovers(59.3%)",color ="pink",width ="200px" ){
    return `<div style = "
                          display:inline-flex;
                          align-items:flex-start;
                          justify-content:flex-start;
                          ">
                            <div style = "display:flex;
                            padding:10px;
                            width:80px;
                            height:80px;
                            ">
                            <img src  = "${url}"></div>
                            <div class = "graph"
                            style ="
                            width:${width};
                            height:30px;
                            margin-top:10px;
                            background-color:${color};
                            box-shadow: 3px 3px ;
                            transition:background-color,1s,box-shadow, 1s;"
                            onmouseover = "Graphcomp.HandleMouseover(this)">
                            <div style ="
                            display:flex;
                            padding:10px;
                            font-size:25px;"><p>${text}</p></div> 
                            </div>
                            


            </div>`

           
}

Graphcomp.HandleMouseover = (el)=>{
   el.style.boxShadow = "8px 8px";
//    el.style.width = "400px";
 }