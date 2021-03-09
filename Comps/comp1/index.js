function Comp1UI(size ="10px", text="text"){
    return `
        <div style='
            width: 150px;
            height: 150px;
            display: inline-flex;
            flex-direction: row;
            wrap: row-wrap;
            justify-content: ;
            transition: opacity 1s;
            opacity: 0.25;
            border: 2px solid black;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: flex;
            width: 100%;
            object-fit: cover;
        'src="Images/question.svg"/>

        <div style='
            width: 300px;
            height: 300px;
            background-color: white;
            border: 2px solid #00000;
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
