function Comp10UI(w="55px", tdeg="120deg", top="0px", left="0px", anidelay="1s") {
    return `
    <img style='
        width: ${w};
        transform: rotate(${tdeg});
        position: absolute;
        top: ${top};
        left: ${left};
        
        animation-name: footsteps;
        animation-duration: 4s;
        animation-delay: ${anidelay};
        animation-iteration-count: infinite;
    
    'src="images/footsteps.svg"/>
    
    `
}

// export const Comp10 = Comp10UI();