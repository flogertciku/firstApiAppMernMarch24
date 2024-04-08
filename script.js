let username=""
var nameH2 = document.getElementById("name")
var h3 = document.getElementById("otherData")
var image = document.getElementById("image")
async function getCoderData() {
    var response = await fetch("https://api.github.com/users/"+username);
    var coderData = await response.json();
    console.log(coderData);
    if (coderData.message) {
        nameH2.innerHTML = "user doesnt exist"
        
    } else {
        nameH2.innerHTML= "userid : " +coderData.id
        h3.innerHTML= coderData.repos_url
        image.src = coderData.avatar_url
        
    }

   
}

function SaveName(elem) {
    // let name="flogert"
    console.log(elem.value)
    username=elem.value
    
}

