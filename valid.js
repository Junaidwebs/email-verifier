
let resultcont = document.querySelector(".resultcont");
let btn = document.querySelector(".btn");
let stat = document.getElementById("stat")

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "wowebss",
    "email": "wowebss@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}


btn.addEventListener("click", async (e) => {
    e.preventDefault()
    let email = document.getElementById("username").value;
    let key = "ema_live_3A4YZH9rTTcjE7OLyRfRZFIzQqiZBIGgp0SHeFvp";
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();
    let str = '';
    if(result.state != "undeliverable"){
        stat.innerHTML = "Deliverable"
        stat.style.backgroundColor = 'green'


    }
    else{
         stat.innerHTML = "unDeliverable"
        stat.style.backgroundColor = 'red'
    }

   
    for (key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== ""){
            str = str + `<div> ${key} ${result[key]}</div>`
          
        }
        console.log(result.stat)
        
    }
    
    console.log(str)
    resultcont.innerHTML = str

})





