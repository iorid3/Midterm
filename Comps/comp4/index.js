function Comp4UI(url='https://placekitten.com/300/300',text='Bread & Bakery',x='0',y='0', anidelay='0') {
    return `
         <div style='
            display: flex;
            flex-direction: row;
            align-item: center;
            justify-content: center;
            width: 250px;
            height: 50px;
            margin: 10px;
            position: absolute;
            top: ${x}px;
            left: ${y}px;
            animation-name: bouncing;
            animation-duration: 2s;
            animation-direction: alternate;
            animation-iteration-count: 3;
            animation-delay: ${anidelay}s;

        '   
        >
            <div style='
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
            font-family: 'Poppins', sans-serif;
            text-align: center;
            padding-top: 18px;
            padding-left: 5px; 
        '
         >${text}</div>
    `
}



// export const Comp4 = Comp4UI(); 