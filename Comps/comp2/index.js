function Comp2UI(url="Images/professor.svg", size ="10px", text="text"){
    return `
      <div style='
        width: 150px;
        height: 150px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: opacity 1s;
        opacity: 0.25;
    '
    onclick='Comp1UI.HandleClick(this)'
    >
    
        <img style='
            display: inline-flex;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: 500px;
            top:60px;
        ' src="${url}"/>

        <div style='
        width: 200px;
        height: 200px;
        '>
            <img style='
                display: inline-flex;
                width: 100%;
                height: 100%;
                object-fit: cover;
                right: 200px;
                bottom: 10px;
                transform: rotateY(180deg)
            ' src="Images/chat.svg" />

            <div style='
                display: inline-flex;
                position: relative;
                bottom: 280px;
                right: 560px;
                font-size: ${size};
                font-weight: bold;
                font-family: 'Poppins';
            ' >${text}</div>
        </div>
    </div>`
}

Comp2UI.HandleClick = (el) => { 
    el.style.opacity = 1;
}
