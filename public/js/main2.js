const cityname = document.getElementById('city_name');
const submit_btn = document.getElementById('submit_btn');
const temperature = document.getElementById("temperature");


const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval != ""){
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2ee87c8fd33f520f67ab9bc272ca42a0`;
            const response = await fetch(url); 
            const data = await response.json();
            const arr = [data];
            // temperature.innerText = temperature;
            temperature.innerText=Math.round(arr[0].main.temp-273,2);
        }
        catch{
            temperature.innerText = `-`;
            console.log("Failed")
        }
    }
    else{
        console.log("not found");
    }
}


submit_btn.addEventListener("click",getInfo);