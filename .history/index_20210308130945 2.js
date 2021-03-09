
document.querySelector(".comp6").innerHTML +=  Carboncomp(text = "Waste food that ends up in the landfill produces methane gas",url= "Images/garbage.svg");
document.querySelector(".comp6").innerHTML +=  Carboncomp(text ="which 21x more potent than carbon dioxide. It may give serious damage to our society. ",url ="Images/skull.svg" );
document.querySelector(".comp6").innerHTML +=  Carboncomp(text = "From the time we harvest foods, to processing,to distribution,to decomposition", url ="Images/barn.svg");
document.querySelector(".comp6").innerHTML +=  Carboncomp();
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/fridge.svg",text ="Leftovers(59.3%)",color ="orange",width ="200px");
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/vegetable.svg",text ="Vegetables(55.6%)",color ="blue",width ="190px");
document.querySelector(".comp7").innerHTML +=  Graphcomp("Images/fruits.svg",text ="Fruits(33.3%)",color ="red",width ="120px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/fridge.svg",text ="Forgot about theif food in fridge(63%)",color ="orange",width ="240px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/vegetable.svg",text ="Less motivated to cook(48.1%)",color ="blue",width ="190px");
document.querySelector(".comp8").innerHTML +=  Graphcomp2("Images/fruits.svg",text ="Made excessive food (37.3%)",color ="red",width ="150px");


//add claudia's componenets

document.querySelector(".comp3_1").innerHTML += Comp3UI('Average Canadian wastes 140kg of food in a year', 'Images/crowd.svg')
document.querySelector(".comp3_2").innerHTML += Comp3UI('That’s worth about $1,100 Canadian dollars', 'Images/plant.svg')
document.querySelector(".comp3_3").innerHTML += Comp3UI('About 63% of the food that is thrown away could be eaten or used', 'Images/garbage.svg')
document.querySelector(".comp3_4").innerHTML += Comp3UI('A single household waste approximately $100 per month', 'Images/family.svg')

document.querySelector(".comp4_1").innerHTML += Comp4UI('Images/vegetable.svg', 'Vegetables',70,370)
document.querySelector(".comp4_2").innerHTML += Comp4UI('Images/bread.svg', 'Bread & Bakery',70,570)
document.querySelector(".comp4_3").innerHTML += Comp4UI('Images/fruits.svg', 'Fruits',130,380)
document.querySelector(".comp4_4").innerHTML += Comp4UI('Images/fridge.svg', 'Leftover',130,545)

document.querySelector(".comp5").innerHTML += Comp5UI(50,500,'Images/down-arrow.svg')

