window.onload = run;
function run(){
    let message = document.getElementById('result');

    let countryBtn = document.getElementById('lookup');
    countryBtn.addEventListener('click',function(action){
        action.preventDefault();
        let countryReq = document.getElementById("country").value;
        fetch("world.php" + "?country=" + countryReq)
        .then(response =>{
            if (response.ok){ 
                return response.text()
            }else{
                return Promise.reject("There was an issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
        .catch(error => console.log("Error: " + error));
    });

    let cityBtn = document.getElementById('lookupCity');
    cityBtn.addEventListener('click',function(action){
        action.preventDefault();
        let cityReq = document.getElementById("country").value;
        fetch("world.php" + "?country=" + cityReq + "&context=cities")
        .then(response =>{
            if (response.ok){
                return response.text()
            } else{
                return Promise.reject("There was issue with the request.")
            }
        })
        .then(data => {
            message.innerHTML = data;
        })
        .catch(error => console.log("Error: " + error));
    });
}