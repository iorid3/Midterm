function Comp2UI(padding="70px", size ="10px", text="text", width="200px", url="Images/professor.svg"){
    return `
        <div style='
            display: inline-flex;
            justify-content: center;
            margin: 20px;
            transition: opacity 1s;
            opacity: 0.15;
        '
        onclick='Comp1UI.HandleClick(this)'
        >
        <div style='
            width: 300px;
            background-color: white;
            border: 2px solid #00000;
            border-radius: 50px;
            padding-top:${padding};
            text-align: center;
            border: 2px solid black;
            margin: 10px;
        '>

            <div style='
                font-size: ${size};
                font-weight: bold;
            '> ${text}</div>
        </div>

        <img style='
            width: ${width};
            object-fit: cover;
            margin: 10px;
        'src="${url}"/>

    </div>
    `
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}