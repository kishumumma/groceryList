let name_text = document.getElementById("data-name");

let price_text = document.getElementById("data-price");
let table_element = document.getElementsByTagName("table");
let total_element = document.querySelector("#total");
let i=1;
let total = 0;
function insertItem() {
     let name=name_text.value;
    let price=price_text.value;
    // let tPrice =

    if(name!="" && price!="" && !isNaN(parseInt(price))){
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let trow=document.createElement("tr");
        // trow.classList.add="extended";

        td2.setAttribute("data-ns-test","item-name");

        td3.setAttribute("data-ns-test","item-price");

        td1.innerHTML=`${i}`;
        td2.innerHTML=name;
        td3.innerHTML=price;
        // td4.innerHTML="Total :";
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        // trow2.appendChild(td4);
        // trow2.appendChild(td5);
        table_element[0].appendChild(trow);
        // table_element[1].appendChild(trow2);

        name_text.value="";
        price_text.value="";
       total=total+parseInt(price);
        total_element.innerHTML=total;
        
        i++;

    }
}