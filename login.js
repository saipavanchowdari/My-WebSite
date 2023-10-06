const dragP = document.getElementById('source');
const textBox = document.getElementById('target');

dragP.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', dragP.textContent);
});

textBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});

textBox.addEventListener('drop', (e) => {
  e.preventDefault();
  const droppedText = e.dataTransfer.getData('text/plain');
  textBox.value = droppedText;
  console.log("YESSS")

});

function apicall()
{ 
const textBox = String(document.getElementById('target').value);
//console.log(textBox)
const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '7431caa912msh883380ca7e32099p1ea4a7jsnd5a52eb808e8',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: 'English is hard, but detectably so'
	})
};

fetch('https://text-analysis12.p.rapidapi.com/language-detection/api/v1.1' , options)
    //First Promise response (turn into JSON with another Promise)
    .then(response => response.json())
    //.json() Promise response 
    .then(data => {
        console.log(data);
    }).catch(err => console.error(err));
}


function submitlogin()
{
    console.log("YES");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if((localStorage.getItem("user") === null) && (localStorage.getItem("pass") === null))
    {
        console.log("YES")
        localStorage.setItem("user", username); 
        localStorage.setItem("pass", password); 
    }

    if (localStorage.getItem("user") == username)
    {
        if(localStorage.getItem("pass") == password)
        {
            console.log("Loged in successful")
            window.location.reload(true);
        } 
    }    
}
  
function setCookie(name, pass) {
    document.cookie = "user" + "=" + name + ";" + "pass" + "=" + pass + ";"
    console.log(document.cookie);
  }

function getCookie(cname, cpass) {
    let name = cname + "=";
    let password = cpass + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let res= ""
    console.log(ca)
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0 && c.indexOf(password) == 0 ) {
        res = c.substring(name.length, c.length) + c.substring(password.length, c.length);
        return res
      }
    }
    return "";
}

function sendEmail() 
{
  window.location.assign("mailto:epavanchowdary11@gmail.com");
}