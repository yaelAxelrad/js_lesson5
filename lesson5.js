for(let i = 0; i<catalog.length;i++)
{
    catalog[i]["id"] = 100+i;
}
function func1()
{
    let find = document.querySelector("#disk").value;
    const contain = catalog.filter((item) => item.title.includes(find));
    console.log(contain);
    for(let x = 0 ;x<contain.length;x++)
    {
        document.querySelector("#list").innerHTML += (contain[x].title + "<br> ") ;
    }
    func4(contain);

}

    let arr2 = catalog.map(item => item.country);
    let arr1 = arr2.filter((item, index,arr) => !arr.includes(item, index + 1));
    for(let x = 0 ;x<arr1.length;x++)
    {
        document.querySelector("#country").innerHTML += "<option>" + arr1[x] + "</option>";
    }
    function func2()
    {
        document.querySelector("#list2").innerHTML = "";
        let find = document.querySelector("#country").value;
        const contain = catalog.filter((item) => item.country.includes(find));
    for(let x = 0 ;x<contain.length;x++)
    {
        document.querySelector("#list2").innerHTML += (contain[x].title + "<br> ") ;
    }
    func4(contain);
    }

function func3()
{
    let find = catalog.find((item) => item.year > document.querySelector("#from").value && item.year < document.querySelector("#to").value); 
    document.querySelector("#list3").innerHTML += find.title ;

}

function func4(arr)
{
   let tbl = arr.map(item => `<tr>
    <td>  ${item.title}</td>
    <td>${item.artist}</td>
    <td>${item.country}</td>
    <td>${item.company}</td>
    <td>${item.price}</td>
    <td>${item.year}</td>
    <td>${item.id}</td>

    </tr>`);
         document.querySelector("#list4").innerHTML += tbl ;


}

function add()
{
    let a = document.querySelector("#title").value;
    let b = document.querySelector("#artist").value;
    let c = document.querySelector("#country").value;
    let d = document.querySelector("#company").value;
    let e = document.querySelector("#price").value;
    let f = document.querySelector("#year").value;
    

   const newItem = { title: a,artist:b,country:c,company:d,price:e,year:f};
   catalog.push(newItem);
   print(newItem);
}
function print(p)
{
    document.querySelector("#print").innerHTML = p.title + "<br>" ;
    document.querySelector("#print").innerHTML += p.artist + "<br>" ;
    document.querySelector("#print").innerHTML += p.country + "<br>" ;
    document.querySelector("#print").innerHTML += p.company + "<br>" ;
    document.querySelector("#print").innerHTML += p.price + "<br>" ;
    document.querySelector("#print").innerHTML += p.year + "<br>" ;
    document.querySelector("#print").innerHTML += p.id + "<br>" ;


}
function find()
{
    let id =document.querySelector("#erase").value;
    let fi = catalog.findIndex((item, index) => item.id == id ); // '0'
    catalog.splice(fi,1); 
}

    console.log(arr1);





