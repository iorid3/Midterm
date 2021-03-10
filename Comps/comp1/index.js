function Comp1UI(padding="70px", size ="10px", text="text"){
    return `
        <div style='
            display: inline-flex;
            justify-content: center;
            margin: 20px;
            transition: opacity 1s;
            opacity: 0.15;
        '
        onmouseover='Comp1UI.HandleOver(this)'
        >

        <img style='
            width: 200px;
            object-fit: cover;
            margin: 10px;
        'src="Images/question.svg"/>

        <div style='
            width: 300px;
            background-color: white;
            border: 2px solid #000000;
            border-radius: 50px;
            padding-top:${padding};
            text-align: center;
            margin: 10px;
        '>

            <div style='
                font-size: ${size};
                font-weight: bold;
            '> ${text}</div>
        </div>
    </div>
    `
}

Comp1UI.HandleOver = (el) => { 
    el.style.opacity = 1;
}
