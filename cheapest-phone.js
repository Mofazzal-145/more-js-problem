const phones = [

    {name:'samsungs5', price:45000, camera:10, Storage:32},
    {name:'walton m32', price:15000, camera:8, Storage:8},
    {name:'shawomi m3', price:12000, camera:8, Storage:16},
    {name:'oppo a2', price:17000, camera:8, Storage:32},
    {name:'nokia n95', price:8000, camera:8, Storage:4},
    {name:'htc h34', price:25000, camera:8, Storage:16}


];

let cheapest = phones [0];
for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
   
}

console.log(cheapest);


