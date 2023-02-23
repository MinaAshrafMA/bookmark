var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteContainer = [];



if (localStorage.getItem('sites') != null) {
    siteContainer = JSON.parse(localStorage.getItem('sites'));
    displaySites(siteContainer);
}

function visitSite() {
    window.location.href = "facebook.com";
}

function addSite() {

    var site = {
        name: siteName.value,
        url: siteUrl.value
    }
    if (site.name != "" && site.url != "") {
        if (site.url === -1) {
            siteContainer.push(site);
            localStorage.setItem("sites", JSON.stringify(siteContainer));
            displaySites(siteContainer);
            clearForm();
            document.getElementById("warning1").classList.add('d-none')
            document.getElementById("warning2").classList.add('d-none')
        } else {
            alert("site already exists")
        }

    }
    else {
        document.getElementById("warning1").classList.remove('d-none')
        document.getElementById("warning2").classList.remove('d-none')
    }

}

function clearForm() {
    siteName.value = "";
    siteUrl.value = "";
}




function displaySites(arr) {
    var cartoona = ``;
    for (var i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="sites py-4 px-3 mt-3 mb-3 d-flex align-items-center">
        <p class=" w-25 fw-bold fs-5  me-3  "> ${arr[i].name}</p>
        <a href="https://${arr[i].url}/" target="_blank"><button class=" btn Button text-white ms-3"  >Visit</button></a> 
        <button class=" btn deleteBtn text-white ms-2" id="${i}" onclick="deleteSite(${i})" >Delete</button>
    </div>`
    }
    document.getElementById('body').innerHTML = cartoona;
}

function deleteSite(siteIndex) {
    siteContainer.splice(siteIndex, 1)
    localStorage.setItem("sites", JSON.stringify(siteContainer));
    displaySites(siteContainer);
}

