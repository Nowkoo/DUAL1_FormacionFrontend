colorButtons();
comprar();

function colorButtons() {
    let colors = document.getElementsByClassName("colors")[0];
    let colorDivs = colors.querySelectorAll("span");
    
    colorDivs.forEach((element) => {
        element.addEventListener("click", (e)=> {
            let color = e.target.getAttribute("class");
            let imgDiv =  document.getElementsByClassName("product-image")[0];
            imgDiv.style.backgroundImage = `url(public/img/evoque-${color}.png)`;

            const suvTag = document.getElementsByClassName("tag")[0];
            let tagStyle = getComputedStyle(e.target);
            suvTag.style.background = tagStyle['background'];
        });
    });
}

function comprar() {
    let purchaseButton = document.getElementById("button");
    purchaseButton.addEventListener("click", (e)=> {
        let description = document.getElementsByClassName("product-description")[0];
        description.remove();
    });
}