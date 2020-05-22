// const url= `https://restcountries.eu/rest/v2/alpha/col`;


// this function fetches data from the api and retuns the date of the country alongside it's borders

async function getCountry(url){
   let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${url}`);
   const data= await res.json();
   return {
     data: data,
     borders: data.borders
   };
}


// This function does exactly what the function above does except that this one 
// recieves an array as parameters and then fetches for each element in the array
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
    
  });
}

// this  function does exactly what is above but only returns the name value in the returned object

async function getCountryName(url){
  let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${url}`);
  const data= await res.json();
  return data.name
}


// this is where the above function is called,
// the returned data is then harnessed and another function is called amognst the above is called for each of the 
// elements returned in the array gotten from the first call
getCountry('col')
  .then((res)=>{
    console.log(res.data);
    console.log(res.borders);
    getCountriesByBorder(res.borders)
    .then((data)=>{
      console.log(data);
    });
  })





// const borders=["BRA", "ECU", "PAN", "PER", "VEN"];





  // console.log(getCountriesByBorder(borders))
  // getCountriesByBorder(borders)

  // getCountriesByBorder(borders).then((data)=>{console.log(data)});