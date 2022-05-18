const select=document.getElementById("form-select");
const input=document.getElementById("input");

const darkmod= document.getElementById("darkmod");

darkmod.addEventListener("click",()=>{
  const body=document.body;
    body.classList.toggle("dark-mode");
 
})

axios.get(`https://restcountries.com/v3.1/all`).then(
  (response) => {
    const values = response.data;
    $(".galerry").html("")
    values.forEach((e) => {
      $(".galerry").append(`
                <div class="card my-5" style="width: 18rem">
            <img src="${e.flags.png}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${e.name.common}</h5>
              <p class="card-text">Population: ${e.population}</p>
              <p class="card-text">Region: ${e.region}</p>
              <p class="card-text">Capital: ${e.capital}</p>
            </div>
          </div>
                `);
    });
  },
  (error) => {
    console.log(error);
  }
);




select.addEventListener("change",(e)=>{
  const sech=e.target.value;
  if (sech==0) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/all`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }
  if (sech==1) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/region/africa`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }
  else if (sech==2) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/region/america`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }
  else if (sech==3) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/region/asia`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  } else if (sech==4) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/region/europe`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  } else if (sech==5) {
    $(".galerry").html("")
    axios.get(`https://restcountries.com/v3.1/region/oceania`).then(
      (response) => {
        const values = response.data;
    
        values.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }
})




input.addEventListener("keyup",(search)=>{
  const tap=search.target.value;

  $(".galerry").html("")
  axios.get(`https://restcountries.com/v3.1/all`).then(
    (response) => {
      const values = response.data;
      let result = values.filter(c => c.name.common.toLowerCase().includes(tap))
      // const okey=values.forEach(element => {
      //   element.name.common
      // });
      console.log(result);
        result.forEach((e) => {
          $(".galerry").append(`
                    <div class="card my-5" style="width: 18rem">
                <img src="${e.flags.png}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${e.name.common}</h5>
                  <p class="card-text">Population: ${e.population}</p>
                  <p class="card-text">Region: ${e.region}</p>
                  <p class="card-text">Capital: ${e.capital}</p>
                </div>
              </div>
                    `);
        });
     
    },
    (error) => {
      console.log(error);
    }
  );


})