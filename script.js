let arr ;
let table = document.getElementById("table")
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then((res)=>res.json())
    .then((res)=>{
        arr = res
        arr.forEach(element => {
            table.innerHTML+=
            `<tr>
                    <td>
                        <div class="img-container">
                            <img src="${element.image}" alt="image">
                            <p>${element.name}</p>
                        </div> 
                    </td>
                    <td>${(element.symbol).toUpperCase()}</td>
                    <td>${element.current_price}</td>
                    <td>$${element.total_volume}</td>
                    <td id="${element.id}">${element.ath_change_percentage.toFixed(2)}</td>
                    <td class="mkr">Mkr Cap:$${element.market_cap}</td>
                </tr>`
            let colored = document.getElementById(element.id)
            if(element.ath_change_percentage>0){
                colored.style.color = "green"
            }
            else{
                colored.style.color = "red"
            }
        });
        })
    .catch((err)=>console.log(err))


function sortMrk(){
    let sortedarr = arr
    sortedarr.sort((a,b)=>b.market_cap-a.market_cap)
    table.innerHTML = ""
    sortedarr.forEach(element => {
        table.innerHTML+=
        `<tr>
                <td>
                    <div class="img-container">
                        <img src="${element.image}" alt="image">
                        <p>${element.name}</p>
                    </div> 
                </td>
                <td>${(element.symbol).toUpperCase()}</td>
                <td>${element.current_price}</td>
                <td>$${element.total_volume}</td>
                <td id="${element.id}">${element.ath_change_percentage.toFixed(2)}</td>
                <td class="mkr">Mkr Cap:$${element.market_cap}</td>
            </tr>`
        let colored = document.getElementById(element.id)
        if(element.ath_change_percentage>0){
            colored.style.color = "green"
        }
        else{
            colored.style.color = "red"
        }
    });

}
function sortPct(){
    let sortedarr = arr
    sortedarr.sort((a,b)=>b.ath_change_percentage-a.ath_change_percentage)
    table.innerHTML = ""
    sortedarr.forEach(element => {
        table.innerHTML+=
        `<tr>
                <td>
                    <div class="img-container">
                        <img src="${element.image}" alt="image">
                        <p>${element.name}</p>
                    </div> 
                </td>
                <td>${(element.symbol).toUpperCase()}</td>
                <td>${element.current_price}</td>
                <td>$${element.total_volume}</td>
                <td id="${element.id}">${element.ath_change_percentage.toFixed(2)}</td>
                <td class="mkr">Mkr Cap:$${element.market_cap}</td>
            </tr>`
        let colored = document.getElementById(element.id)
        if(element.ath_change_percentage>0){
            colored.style.color = "green"
        }
        else{
            colored.style.color = "red"
        }
    });

}
function sortByName(){
    let inputValue = document.getElementById("inputValue").value
    let sortedarr = arr.filter((element)=>{
        if(element.id.includes(inputValue) || element.symbol.includes(inputValue)){
        return element
    }})
    table.innerHTML = ""
    sortedarr.forEach(element => {
        table.innerHTML+=
        `<tr>
                <td>
                    <div class="img-container">
                        <img src="${element.image}" alt="image">
                        <p>${element.name}</p>
                    </div> 
                </td>
                <td>${(element.symbol).toUpperCase()}</td>
                <td>${element.current_price}</td>
                <td>$${element.total_volume}</td>
                <td id="${element.id}">${element.ath_change_percentage.toFixed(2)}</td>
                <td class="mkr">Mkr Cap:$${element.market_cap}</td>
            </tr>`
        let colored = document.getElementById(element.id)
        if(element.ath_change_percentage>0){
            colored.style.color = "green"
        }
        else{
            colored.style.color = "red"
        }
    });
}