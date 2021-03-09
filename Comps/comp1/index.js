function Comp1UI(size ="10px", text="text"){
    return `
        <div style='
            width: 150px;
            height: 150px;
            display: inline-flex;
            justify-content: center;
            transition: opacity 1s;
            opacity: 0.25;
            position: relative;
            border: 2px solid black;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: inline-flex;
            width: 100%;
            object-fit: cover;
            position: relative;

        'src="Images/question 2.svg" />

        <div style="
        width: 200px;
        height: 200px;
        display: inline-flex;

        ">
            <img style='
                position: relative;
                width: 100%;
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
            '> ${text}</div>
        </div>
    </div>
    `
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
