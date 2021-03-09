function Comp2UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
        width: 100vw;
        height: 30vh;
        display: inline-flex;
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
            width: 200px;
            position: relative;
            left: 500px;
            top:60px;
        ' src="${url}"/>

        <div>
            <img style='
                display: inline-flex;
                position: relative;
                width: 500px;
                right: 200px;
                bottom: 10px;
                z-index:-1;
                transform: rotateY(180deg)
            ' src="https://static.thenounproject.com/png/739210-200.png" />

            <div style='
                display: inline-flex;
                position: relative;
                bottom: 280px;
                right: 560px;
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
