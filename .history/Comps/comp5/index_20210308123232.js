function Comp5UI(x='0', y='0', url='https://placekitten.com/300/300') {
    return `
        <div style='
            width: 150px;
            height: 150px;
            position: absolute;
            top: ${x}px;
            left: ${y}px;

        '
        >
            <img style='
                width: 100%;
                height: 100%;
                object-fit: cover;

                animation-name: bounce;
                animation-duration: 1s;
                animation-direction: alternate;
                animation-iteration-count: infinite;
            
            '     
            src='${url}' />
        
        
        </div>
    
    `
}

// export const Comp5 = Comp5UI();