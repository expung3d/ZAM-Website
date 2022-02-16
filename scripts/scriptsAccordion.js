var accordionItems = document.getElementsByClassName("ezm-accordion-link");
var i;


for(i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var iconText = this.querySelector('.ezm-accordion-show');
        var content = this.nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
            iconText.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            iconText.style.transform = 'rotate(180deg)';
        }
    });
}