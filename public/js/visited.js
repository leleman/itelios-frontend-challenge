/*Gera o codigo html com os dados do advertisement*/
function loadJSON(path, success, error)
{    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
                	var json = JSON.parse(xhr.responseText);
                	var product = json[0].data.item;
                    console.log(product.imageName)
                        var divIn = document.createElement("div");
                        divIn.className ='product-info';  
                            var image = document.createElement("img");
                            var divimage = document.createElement("div");
                            divimage.className = 'image';
                            image.src = product.imageName;
                            divimage.appendChild(image);
                            divIn.appendChild(divimage);
                    		var product_name = document.createElement("p");                        
                    		var name = document.createTextNode(product.name);
                            var name2 = product.name;
                            var finalName = name2.slice(0,60);                            
                            var nameString = document.createTextNode(finalName);
                            var length = nameString.length;
                            if(length >= 60){
                              var points = document.createTextNode("...");                              
                              product_name.appendChild(nameString);
                              product_name.appendChild(points)                      
                                                      
                            }else{
                                product_name.appendChild(nameString);                        
                            }

                            product_name.className = 'product_name';
                            divIn.appendChild(product_name);
                            var price = document.createElement("p");                        
                            var name = document.createTextNode("Por ");
                            price.className = 'product_price';
                            price.appendChild(name);
                            var priceDraft = document.createElement("big");                        
                            priceDraft.className = 'bold_price bold';
                            var draft = document.createTextNode(product.price);   

                            priceDraft.appendChild(draft);
                            price.appendChild(priceDraft);
                            divIn.appendChild(price);
                            
                            var plots = document.createElement("p");
                            var plotsText = document.createTextNode('ou até ');
                            var plotsTextEnd = document.createTextNode(' sem juros');
                            var portion = document.createElement("span");
                            
                            var portionVal = product.productInfo.paymentConditions;
                            var portionValue = document.createTextNode(portionVal);
                            
                            var par = JSON.stringify(portionVal);
                            var tirarComeco = [par][0].split("ou até ");
                            var finalprice = tirarComeco[1].split(" sem juros");
                            var final = document.createTextNode(finalprice.splice(0,1));



                            portion.className= 'bold_price bold';
                            plots.className = 'product_price line-hight';
                            plots.appendChild(plotsText);
                            portion.appendChild(final);
                            plots.appendChild(portion);  
                            plots.appendChild(plotsTextEnd);
                            
                            divIn.appendChild(plots);
                            var button = document.createElement("button");
                            button.className = "btn-card bold_price";
                            var icon = document.createElement("i");
                            icon.className = " material-icons card-icon";

                            var textButton = document.createTextNode("adicionar ao carrinho");
                            var textIcon = document.createTextNode("add_shopping_cart");

                            button.appendChild(textButton);
                            icon.appendChild(textIcon);
                            button.appendChild(icon);
                            divIn.appendChild(button);


                        /*Div para colocar advertisements*/    
                        var divVisited = document.createElement("div");
                        divVisited.className ='advertisement';
                        divVisited.appendChild(divIn);                             
                        document.getElementById('visited').appendChild(divVisited);
                        
                	
                    
            } else {
                if (error)
                    error(xhr);
            }

        }

    };
    xhr.open("GET", path, true);
    xhr.send();
    
}

loadJSON('products.json');
