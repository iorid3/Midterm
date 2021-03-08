function Comp1UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: opacity 1s;
            opacity: 0.25;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: inline-flex;
            width: 100vw;
            height: 100vh;

            position: relative;
            left: 100px;
            top: 500px;
        'src="${url}" />

        <div>
            <img style='
                display: inline-flex;
                position: relative;
                width: 0px;
                left: 0px;
                bottom: 10px;
                z-index: 0;
            'src="Images/chat.svg" />

            <div style='
                display: inline-flex;
                position: relative;
                bottom: 0px;
                right: 0px;
                font-size: ${size};
                font-weight: bold;
                font-family: ${font};
            '> ${text}</div>
        </div>
    </div>`
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
