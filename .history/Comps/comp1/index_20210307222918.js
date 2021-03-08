function Comp1UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            position: relative;
            z-index: 0;
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
            bottom: 100px;
        'src="${url}" />

        <div>
            <img style='
                display: inline-flex;
                position: relative;
                width: 200px;
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
