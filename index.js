//section1 components
document.querySelector(".comp1").innerHTML += Comp1UI("70px", "25px", "What's the issue?");
document.querySelector(".section2_comp1").innerHTML += Comp1UI("70px", "25px", "What do people waste most?");
document.querySelector(".comp2").innerHTML += Comp2UI("70px", "25px", "Good Question!", "200px", "Images/professor.svg");
document.querySelector(".comp2_section4").innerHTML += Comp2UI("50px", "30px", "Only 33% of participants plan their grocery shopping", "400px", "Images/pie_chart.svg");

//section2 components
document.querySelector(".comp3_1").innerHTML += Comp3UI('Average Canadian wastes 140kg of food in a year', 'Images/crowd.png')
document.querySelector(".comp3_2").innerHTML += Comp3UI('That’s worth about $1,100 Canadian dollars', 'Images/plant.svg')
document.querySelector(".comp3_3").innerHTML += Comp3UI('About 63% of the food that is thrown away could be eaten or used', 'Images/garbage.svg')
document.querySelector(".comp3_4").innerHTML += Comp3UI('A single household waste approximately $100 per month', 'Images/family.svg')


document.querySelector(".comp4_1").innerHTML += Comp4UI('Images/vegetable.svg', 'Vegetables',70,-150)
document.querySelector(".comp4_2").innerHTML += Comp4UI('Images/bread.svg', 'Bread & Bakery',70,50)
document.querySelector(".comp4_3").innerHTML += Comp4UI('Images/fruits.svg', 'Fruits',130,-140)
document.querySelector(".comp4_4").innerHTML += Comp4UI('Images/fridge.svg', 'Leftover',130,20)

document.querySelector(".comp5_section2").innerHTML += Comp5UI(200,-60,'Images/down-arrow.svg')



// document.querySelector(".comp5").innerHTML += Comp5UI(50,500,'Images/down-arrow.svg')

//this one is belong to section 4 
// document.querySelector(".comp1_section2").innerHTML += Comp1UI("25px", "Only 33% of participants plan their grocery shopping");


document.querySelector(".comp6").innerHTML +=  Carboncomp(text = "Food waste that ends up in the landfill produces methane gas which 21x more potent than carbon dioxide ",url= "Images/garbage.svg");
document.querySelector(".comp6").innerHTML +=  Carboncomp(text ="It may give serious damage to our society",url ="Images/skull.svg" );
document.querySelector(".comp6").innerHTML +=  Carboncomp(text = "From the time we harvest foods, to processing, distribution and decomposition", url ="Images/barn.svg");
document.querySelector(".comp6").innerHTML +=  Carboncomp();
document.querySelector(".comp6").innerHTML +=  Carboncomp(text = "Each stage of the food system produces gas emissions and negatively impact the climate",url ="Images/temperature.svg");
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/fridge.svg",text ="Leftovers (59.3%)",color ="orange",width ="200px");
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/vegetable.svg",text ="Vegetables (55.6%)",color ="blue",width ="190px");
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/fruits.svg",text ="Fruits (33.3%)",color ="red",width ="120px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/confusion.png",text ="Forgot about their food in fridge (63%)",color ="orange",width ="240px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/motivation.png",text ="Less motivated to cook (48.1%)",color ="blue",width ="190px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/soup.png",text ="Made excessive food (37.3%)",color ="red",width ="150px");

document.querySelector(".comp9").innerHTML += Comp9UI("Images/1.svg", "Have a smaller shopping list and increase the frequency of your grocery shopping trips");
document.querySelector(".comp9").innerHTML += Comp9UI("Images/2.svg", "Consume your leftover food first");
document.querySelector(".comp9").innerHTML += Comp9UI("Images/3.svg", "Make foods that can be preserved longer such as jam, sauces, and pickled food");
document.querySelector(".comp9").innerHTML += Comp9UI("Images/4.svg", "Be mindful of saving the environment by reducing food waste");

document.querySelector(".comp10").innerHTML += Comp10UI("40px", "120deg", "10px", "-100px", "1s");
document.querySelector(".comp10").innerHTML += Comp10UI("50px", "80deg", "20px", "20px", "1.5s");
document.querySelector(".comp10").innerHTML += Comp10UI("65px", "80deg", "40px", "120px", "2s");
document.querySelector(".comp10").innerHTML += Comp10UI("75px", "100deg", "50px", "250px", "2.5s");
document.querySelector(".comp10").innerHTML += Comp10UI("90px", "130deg", "100px", "320px", "3s");
document.querySelector(".comp10").innerHTML += Comp10UI("100px", "150deg", "180px", "300px", "3.5s");

document.querySelector(".comp5_arrowsteps").innerHTML += Comp5UI(-350, -70, 'Images/down-arrow.svg')
document.querySelector(".comp5_arrowphone").innerHTML += Comp5UI(-320, 180, 'Images/down-arrow.svg')