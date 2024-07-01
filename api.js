

document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("Fetching").style.display="block"

let link = document.getElementById("api").value;

    fetch(link)

    .then(Response => Response.json())
    .then((data)=>{
        console.log(data);
       
    setTimeout(() => {
        document.getElementById("Fetching").style.display="none"

        for (let i = 0; i < 2; i++) {
            document.querySelector(".fetch").innerHTML += `
            <p>${JSON.stringify(data[i])}</p>  <br>
            `            
        }
    }, 2000);
    })
    .catch((error)=>{
        console.log("api is inccorect"+error);
    })
})
