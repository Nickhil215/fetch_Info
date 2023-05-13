
//  function fetchData1(url, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             resolve(true);
//             // console.log(data);
//             let tableRow = document.createElement('tr');
//             // let tableData = data.map((item) => `<td>${item.title}</td>`).join('');
//             for(let i of data){
//                 console.log(i.id);
//             }
//             tableRow.innerHTML = tableData;
//             document.getElementById('table').appendChild(tableRow);
//           });
//       }, delay);
//     });
//   }
  let table=document.getElementById('table');
async function fetchDatapost(url , delay){
    const response=await fetch(url);
    const data=await response.json();
    for(let i in data){
        let obj=data[i];
        for(let j in obj){
            // console.log(obj[j].title);
            let tableRow=document.createElement('tr');
            let id=document.createElement('td');
            let title=document.createElement('td');
            let body=document.createElement('td');
//id---title--body---userid--tags--reactions===>posts
            id.innerText=obj[j].id;
            title.innerText=obj[j].title;
            body.innerText="body:-"+obj[j].body+",userID:-"+obj[j].userid+",tags:- "+obj[j].tags+",reactions:-"+obj[j].reactions+".";
            tableRow.appendChild(id);
            tableRow.appendChild(title);
            tableRow.appendChild(body);
            table.appendChild(tableRow);            
        }
    }
}

async function fetchDataproducts(url , delay){
    let headTR=document.createElement('tr');
    let products=document.createElement('th');
    products.innerText="Products";
    headTR.appendChild(products);
    table.appendChild(headTR);

    let items=document.createElement('tr');

    let idth=document.createElement('th');
    let bodyth=document.createElement('th');
    let titleth=document.createElement('th');


    idth.innerText="ID";
    titleth.innerText=" TITLE";
    bodyth.innerText="BODY";

    items.appendChild(idth);   
    items.appendChild(titleth);
    items.appendChild(bodyth);

   table.appendChild(items);



    const response=await fetch(url);
    const data=await response.json();
    for(let i in data){
        let obj=data[i];
        for(let j in obj){
            // console.log(obj[j].title);
            // id--title--description --- price--discountPercentage--rating--stock--brand-- category ---thumbnail --- images ===> products;
          
            let tableRow=document.createElement('tr');
            let id=document.createElement('td');
            let title=document.createElement('td');
            let body=document.createElement('td');

            id.innerText=obj[j].id;
            title.innerText=obj[j].title;
            body.innerText=obj[j].description+"," + obj[j].price + "," + ","+ obj[j].discountPercentage+" ," + obj[j].rating+","+obj[j].stock + ", "+obj[j].brand+","+ obj[j].category+","+obj[j].thumbnail;


            tableRow.appendChild(id);
            tableRow.appendChild(title);
            tableRow.appendChild(body);
            table.appendChild(tableRow);

        }
    }
}

async function fetchDatatodos(url , delay){

    let headTr=document.createElement('tr');
    let products=document.createElement('th');
    products.innerText="TODOS";
    headTr.appendChild(products);
    table.appendChild(headTr);


    let items=document.createElement('tr');

    let idth=document.createElement('th');
    let bodyth=document.createElement('th');
    let titleth=document.createElement('th');


    idth.innerText="ID";
    titleth.innerText=" TODOS";
    bodyth.innerText="USER-ID";

    items.appendChild(idth);   
    items.appendChild(titleth);
    items.appendChild(bodyth);

   table.appendChild(items);

    

    const response=await fetch(url);
    const data=await response.json();
    for(let i in data){
        let obj=data[i];
        for(let j in obj){
            console.log(obj[j].todo);
            let tableRow= document.createElement('tr');
            let id=document.createElement('td')
            let title=document.createElement('td')
            let body=document.createElement('td')

            id.innerText=obj[j].id;
            title.innerText=obj[j].todo;
            body.innerText=obj[j].userId;

            tableRow.appendChild(id);
            tableRow.appendChild(title);
            tableRow.appendChild(body);
            // tableRow.appendChild(tableRow);
            table.appendChild(tableRow)
        }
    }
}


document.getElementById('btn').addEventListener('click',()=>{
    fetchDatapost('https://dummyjson.com/posts',1000)
    .then((result)=>{
        return fetchDataproducts('https://dummyjson.com/products',2000)
    }).then((result)=>{
        return fetchDatatodos('https://dummyjson.com/todos',3000)
    })
});
