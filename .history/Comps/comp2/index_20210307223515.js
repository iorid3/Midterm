function Comp2UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 0;
        transition: opacity 1s;
        opacity: 0.25;
    '
    onclick='Comp1UI.HandleClick(this)'
    >
    
        <img style='
            display: inline-flex;
            width: 100px;
            height: 100px;
            position: relative;
            left: 0px;
            top:0px;
        ' src="${url}"/>

        <div>
            <img style='
                display: inline-flex;
                position: relative;
                width: 10px;
                right: 10px;
                bottom: 10px;
                z-index:-1;
                transform: rotateY(180deg)
            ' src="Images/chat2.svg" />

            <div style='
                display: inline-flex;
                position: relative;
                bottom: 0px;
                right: 0px;
                font-size: ${size};
                font-weight: bold;
                font-family: ${font};
            ' >${text}</div>
        </div>
    </div>`
}

Comp2UI.HandleClick = (el) => {  
    el.style.opacity = 1;
}
