
/* index.html  
Navigation bar*/
function openNav() {
    document.getElementById("mySidenav").style.width = "max-width";

}

  /* index.html 
  Navigation bar*/  
function closeNav() {
    document.getElementById("mySidenav").style.width = "max-width";
  }

/* index.html 
Opens page in content */
function load_page(page, dest) {
    fetch(page)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById(dest).innerHTML = html;
    })
    .catch((error) => {
        console.error("Error loading content:", error);
    });
}

/* Work.htm  
onclick shows selected tab */ 
function openTab(evt, company) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  document.getElementById(company).style.display = "inline";
  evt.currentTarget.className += " active";
}

  // Work.htm  
  //Get the element with id="defaultOpen" above and click on it */
function clickTab() {    
  
    document.getElementById("defaultOpen").click();
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  } let slideIndex = 0;
  showSlides();
}




