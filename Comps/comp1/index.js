function Comp1UI(padding="70px", size ="10px", text="text"){
    return `
        <div style='
            display: inline-flex;
            justify-content: center;
            margin: 20px;
            transition: opacity 1s;
<<<<<<< HEAD
            opacity: 0.20;
=======
            opacity: 0.25;
>>>>>>> 424de52dcfa48d7530f31f4bbe133b5ee01d3ff1
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            width: 200px;
            object-fit: cover;
            margin: 10px;
        'src="Images/question.svg"/>

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
    </div>
    `
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
