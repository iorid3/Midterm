function Comp9UI(url="Images/1.svg", text="4 Ways to Make it Better") {
    return `
        <img style='
            width: 80px;
            height: 80px;
            transition: width 0.2s;
            transition-timing-function: ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        '
        
        onmouseover='Comp9UI.HandleImageHover(this)'
        onmouseout='Comp9UI.HandleImageHoverOut(this)'

        src="${url}"/>
    
        <div style='
            width: 180px;
            height: 180px;
            margin: 10px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.6);
            border: 3px solid rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.1em;
            line-height: 1.2em;
            text-align: center;
            transition: width 0.2s;
            transition-timing-function: ease-in-out;
        '
            onmouseover='Comp9UI.HandleHover(this)'
            onmouseout='Comp9UI.HandleHoverOut(this)'

        >${text}</div>

    `
}

Comp9UI.HandleImageHover = (el) => {
    el.style.width = "120px";
    el.style.height = "120px";
}

Comp9UI.HandleImageHoverOut = (el) => {
    el.style.width = "80px";
    el.style.height = "80px";
}

Comp9UI.HandleHover = (el) => {
    el.style.color = "#2E8B57";
    // el.style.width = "210px";
    // el.style.height = "210px";
    // el.style.fontSize = "1.4em";
}

Comp9UI.HandleHoverOut = (el) => {
    el.style.color = "#000000";
    // el.style.width = "180px";
    // el.style.height = "180px";
    // el.style.fontSize = "1.1em";
}
// export const comp9 = Comp9UI();
