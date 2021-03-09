function Comp1UI(url="Images/chat.svg", size ="10px", text="text"){
    return `
        <div style='
            width: 150px;
            height: 150px;
            display: inline-flex;
            justify-content: center;
            transition: opacity 1s;
            opacity: 0.25;
            border: 2px solid black;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: inline-flex;
            width: 100%;
            object-fit: cover;
        'src= ${url} />

        <div style='
            width: 200px;
            height: 200px;
            display: inline-flex;
        '>

            <div style='
                display: inline-flex;
                bottom: 200px;
                right: 200px;
                font-size: ${size};
                font-weight: bold;
            '> ${text}</div>
        </div>
    </div>
    `
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
