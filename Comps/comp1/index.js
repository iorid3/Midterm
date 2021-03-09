function Comp1UI(size ="10px", text="text"){
    return `
        <div style='
            width: 150px;
            height: 150px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            transition: opacity 1s;
            opacity: 0.25;
            position:absolute;
        '
        onclick='Comp1UI.HandleClick(this)'
        >

        <img style='
            display: inline-flex;
            width: 100%;
            height:100%;
            object-fit: cover;
            position: relative;
            left: 140px;
            top: 60px;
        'src="Images/confusion.png"/>

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
                font-family: "Poppins";
            '> ${text}</div>
        </div>
    </div>
    `
}

Comp1UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
