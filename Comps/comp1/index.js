function Comp1UI(url="Images/confusion.png", size ="10px", text="text"){
    return `<div style='
            display: flex;
            width: 100px;
            justify-content: center;
            align-items: center;
            transition: opacity 1s;
            opacity: 0.25;
            position: relative;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display:flex;
            position: relative;
            width: 255px;
            height: 253px;
            right: 0px;
            top: 500px;
            position:absolute;
        'src="${url}" />

        <div>
        <img style='
            width: 300px;
           'src="Images/chat.svg"/>

        <div style='
            display: inline-flex;

            font-size: ${size};
        '> ${text}</div>
        </div>
    </div>`
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
