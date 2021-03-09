function Comp4UI(url='https://placekitten.com/300/300',text='Bread & Bakery') {
    return `
        <div style='
            display: flex;
            flex-direction: row;
            align-item: center;
            justify-content: center;
            width: 250px;
            height: 50px;
            margin: 10px;
            animation-name: bouncing;
            animation-duration: 1.5s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-delay: 2s;
        
        '
        >
            <div style='
                display:flex; 
                width: 50px;
                height: 50px;
                
            '>
                <img style='
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                '    
                src='${url}' />    
            </div>  
            <div style='
            font-family: monospace;
            text-align: center;
            padding-top: 18px;
            padding-left: 5px; 
            '
            >${text}</div>
        
        </div> 
    `
}




// export const Comp4 = Comp4UI(); 