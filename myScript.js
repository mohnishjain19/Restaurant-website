var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="white";
        node.style.color="black";
    });
    tabButtons[panelIndex].style.backgroundColor="#FFFDD0";
    tabButtons[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="#FFFDD0";
	tabPanels[panelIndex].style.color="black";
}
showPanel(0);