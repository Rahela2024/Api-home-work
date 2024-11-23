let div = document.getElementById('item');

fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    data.products.map((item)=>{

           let itemDiv = document.createElement('div')
           itemDiv.classList.add("itemDiv")

      div.innerHTML += ` <img class="itemimg" src="${item.thumbnail}"> 
                             <h3 class="title" >${item.title} </h3>
                        <p class="price">$${item.price}</p>`;
         div.appendChild(itemDiv);
    });
});




