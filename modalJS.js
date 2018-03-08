window.onload = function() {
    var open = document.getElementsByClassName("openButton");
    var modal = document.getElementsByClassName("modalBox");
    var close = document.getElementsByClassName("close");
    var openYesBox = document.getElementsByClassName("yesBox");
    var openNoBox = document.getElementsByClassName("noBox");
    var openYesButton = document.getElementsByClassName("buttonGameOne");
    var openNoButton = document.getElementsByClassName("buttonGameTwo");
    var closeBoxes = document.getElementsByClassName("closeBox");
    var openSubmit = document.getElementsByClassName("submit");
    var submitBox = document.getElementsByClassName("submitBox")
    
    open[0].addEventListener("click", openModal);
    close[0].addEventListener("click", closeModal);
    openYesButton[0].addEventListener("click", openYes);
    openNoButton[0].addEventListener("click", openNo);
    closeBoxes[0].addEventListener("click", closeBox);
    closeBoxes[1].addEventListener("click", closeBox);
    closeBoxes[2].addEventListener("click", closeBox);
    openSubmit[0].addEventListener("click", openSubmitBox);
    
    function openModal() {
        modal[0].style.display = "block";
        open[0].style.display = "none";
    }
    
    function closeModal() {
        modal[0].style.display = "none";
        open[0].style.display = "block";
    }
    
    function openYes() {
        modal[0].style.display = "none";
        openYesBox[0].style.display = "block";
        openNoBox[0].style.display = "none";
    }
    
    function openNo() {
        modal[0].style.display = "none";
        openYesBox[0].style.display = "none";
        openNoBox[0].style.display = "block";
    }
    
    function closeBox() {
        openNoBox[0].style.display = "none";
        openYesBox[0].style.display = "none";
        submitBox[0].style.display = "none";
        open[0].style.display = "block";
    }
    
    function openSubmitBox() {
        openYesBox[0].style.display = "none";
        submitBox[0].style.display = "block";
    }
    
}