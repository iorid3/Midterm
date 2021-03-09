function Comp1UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
            width: 100vw;
            height: 30vh;
            display: inline-flex;
            justify-content: center;
            align-items: center;

            z-index: 0;
            transition: opacity 1s;
            opacity: 0.25;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: inline-flex;
            width: 200px;

            left: 140px;
            top: 60px;
        'src="${url}" />

        <div>
            <img style='
                display: inline-flex;

                width: 500px;
                left: 100px;
                bottom: 10px;
            'src="Images/chat.svg" />

            <div style='
                display: inline-flex;
                position: relative;
                bottom: 280px;
                right: 265px;
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