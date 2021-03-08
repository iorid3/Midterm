function Graphcomp2(url ="images/vegetable.svg",text ="Leftovers(59.3%)",color ="pink",width ="200px" ){
    return `<div style = "
                          display:inline-flex;
                          flex-direction:row;
                          justify-content:center;
                          ">
                            <div class = "graph"
                            style ="
                            display:flex;
                            width:${width};
                            height:30px;
                            margin-top:10px;
                            background-color:${color};
                            box-shadow: 3px 3px ;
                            transition:background-color,1s,box-shadow, 1s;"
                            onmouseover = "Graphcomp2.HandleMouseover(this)">
                            <div style ="
                            display:flex;
                            width:200px;
                            padding:10px;
                            font-size:20px;"><p>${text}</p></div> 
                            </div>
                            <div style = "display:flex;
                            padding:10px;
                            width:80px;
                            height:80px;
                            ">
                            <img src  = "${url}"></div>
                            
                            


            </div>`

           
}

Graphcomp2.HandleMouseover = (el)=>{
//    el.style.backgroundColor  = "blue";
   el.style.boxShadow = "8px 8px";
//    el.style.width = "400px";
 }