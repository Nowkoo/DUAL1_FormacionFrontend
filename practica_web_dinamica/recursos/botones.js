addListenerToColorButtons();
addListenerToPurchaseButton();

function addListenerToColorButtons() {
    let colors = document.getElementsByClassName("colors")[0];
    let colorDivs = colors.querySelectorAll("span");
    
    colorDivs.forEach((element) => {
        element.addEventListener("click", (event)=> {
            changeColor(event.target);
        });
    });
}

function changeColor(target) {
    changePictureColor(target);
    changeTagColor(target);            
}

function changePictureColor(target) {
    let color = target.getAttribute("class");
    let imgDiv =  document.getElementsByClassName("product-image")[0];
    imgDiv.style.backgroundImage = `url(public/img/evoque-${color}.png)`;
}

function changeTagColor(target) {
    const suvTag = document.getElementsByClassName("tag")[0];
    let tagStyle = getComputedStyle(target);
    suvTag.style.background = tagStyle['background'];
}

function addListenerToPurchaseButton() {
    let purchaseButton = document.getElementById("button");
    purchaseButton.addEventListener("click", (e)=> {
        purchase();
    });
}

function purchase() {
    removeOldDescription();
    appendNewDescription();    
}

function removeOldDescription() {
    let description = document.getElementsByClassName("product-description")[0];
    description.remove();
}

function appendNewDescription() {
    let productDescription = newProductDescription();
    let productCard = document.querySelector(".product-card");
    productCard.appendChild(productDescription);
}

function newProductDescription() {
    let productTitle = newProductTitle();
    let div = document.createElement("div");
    div.classList.add("product-description");
    div.appendChild(productTitle);
    return div;
}

function newProductTitle() {
    let title = "Enhorabuena, has adquirido un espectacular Range Rover Evoque"
    let h1 = document.createElement("h1");
    h1.classList.add("product-title");
    h1.innerText = title;
    return h1;
}