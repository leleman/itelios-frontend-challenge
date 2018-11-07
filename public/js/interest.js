function loadJSON(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {               
                	let json = JSON.parse(xhr.responseText);
                	let products = json[0].data.recommendation;
                	for(let i=0; i<products.length; i++){
                       let img = products[i].imageName;
                       let name = products[i].name.substr(0,60);
                       let valor = products[i].price;
                       let parcela = products[i].productInfo.paymentConditions;
                        let text = `
                            <div class="advertisement">
                                <div class="product-info">
                                    <div class="image">
                                        <img src="${img}">
                                    </div>
                                    <p class="product_name">${ name.length > 60 ? name+'...': name}</p>
                                    <p class="product_price">Por <big class="bold_price bold">R$ ${valor}</big></p>
                                    <p class="product_price line-hight">ou até <span class="bold_price bold">${parcela}</span> sem juros</p>
                                    <button class="btn-card bold_price">adicionar ao carrinho<i class=" material-icons card-icon">add_shopping_cart</i></button>
                                </div>
                            </div>
                            `;     
                        document.getElementById('interest').innerHTML += text;}
        }
    };
    xhr.open("GET", "products.json", true);
    xhr.send();
}
loadJSON();
function value(id){    
    setDotColor(id);
    switch(id){
        case "0" : element = document.getElementById('interest').style;
                    element.transition = "left 0.5s linear 0s";
                    element.left = '0px';
        break;
        case "1" :  element = document.getElementById('interest').style;
                    element.transition = "left 0.5s linear 0s";
                    element.left = '-852px';                   
        break;
        case "2" :  element = document.getElementById('interest').style;
                    element.transition = "left 0.5s linear 0s";
                    element.left = '-1704px';                   
        break;
    }    
}

function setDotColor(selected){       
    array = ["0","1","2"];    
    selection = array.splice(selected,1); 
    document.getElementById(selection).classList.toggle('black-dot', true);
    document.getElementById(array[0]).classList.toggle('black-dot', false);      
    document.getElementById(array[1]).classList.toggle('black-dot', false);    
    
}
