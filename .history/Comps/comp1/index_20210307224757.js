function Comp1UI(url="Images/confusion.png", size ="10px", font= "Poppins", text="text"){
    return `<div style='
            display: flex;
            width: 300px;
            height: 200px;
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
            width: 200px;
            height: 200px;

            position: relative;

        'src="${url}" />

        <div>
            <img style='
                display: inline-flex;
                position: relative;
                width: 100%;
                height: 100%;
                left: 50px;
                bottom: 10px;
                z-index: 0;
            'src="Images/chat.svg" />

            <div style='
                display: inline-flex;
                position: relative;
                z-index: 0;
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
