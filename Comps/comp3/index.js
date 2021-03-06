function Comp3UI(Text='Average Canadian wastes 140kg of food in a year', url='https://placekitten.com/400/400') {
    return `
        <div style='
            display: inline-flex;
            align-items: center;
            justify-content: center;

            transition-property: transform;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            
    
        '>
            <div style='
                flex-basis: 220px;
                text-align: center;
                font-size: 18px;
                padding-right: 10px;
                font-family: 'Poppins', sans-serif;

            
            '
            >${Text}</div>

            <div style='
                width: 100px;
                height: 100px;
            '
            // onclick='Comp3UI.HandleClick(this)'
            >
                <img  style='
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                '
                src='${url}' />
        </div>
    `
}

// Comp3UI.HandleClick = (el) => {
//     el.style.top = "110%";
// }


// export const Comp3 = Comp3UI(); 