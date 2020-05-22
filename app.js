const url= `https://restcountries.eu/rest/v2/alpha/col`;

async function getCountry(url){
   let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${url}`);
   const data= await res.json();
   return {
     data: data,
     borders: data.borders
   };
}

getCountry('col')
  .then((res)=>{
    console.log(res.data);
    console.log(res.borders);
    getCountriesByBorder(res.borders)
    .then((data)=>{
      console.log(data);
    });
  })




  async function getCountryName(url){
    let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${url}`);
    const data= await res.json();
    return data.name
 }

const borders=["BRA", "ECU", "PAN", "PER", "VEN"];


  async function getCountriesByBorder(borders){
    
    return new Promise((resolve,reject)=>{
      let arr=[];
     return borders.map((border)=>{
        getCountryName(border)
           .then((data)=>{
             console.log(data);
            //  arr.push(data);
             resolve(data);
             // return data;
           });
       });
      
    })
   
    console.log(arr);
  }


  // console.log(getCountriesByBorder(borders))
  // getCountriesByBorder(borders)

  // getCountriesByBorder(borders).then((data)=>{console.log(data)});