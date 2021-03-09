function Carboncomp(text =" 7% of greenhouse gases produced globally are due to preventable food waste", url= "images/factory.svg"){
    return `<div style = "
                          display:flex;
                          ">
                         <div style = "display:flex;
                         padding:10px;">
                         <img style ="
                          width:100px;
                          height:100px;
                         " src  = "${url}"></div>
                         <div style ="
                         display:flex;
                         padding:10px;"><p>${text}</p></div> 

            </div>`

}