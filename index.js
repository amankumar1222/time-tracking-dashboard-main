
console.log("AASanhai ");











const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

const heading = document.querySelector('#work-cr')
const lastpr = document.querySelector('#work-pr')

const heading1 = document.querySelector('#work-cr1')
const lastpr1 = document.querySelector('#work-pr1')

const heading2 = document.querySelector('#work-cr2')
const lastpr2 = document.querySelector('#work-pr2')

const heading3 = document.querySelector('#work-cr3')
const lastpr3 = document.querySelector('#work-pr3')

const heading4 = document.querySelector('#work-cr4')
const lastpr4 = document.querySelector('#work-pr4')

const heading5 = document.querySelector('#work-cr5')
const lastpr5 = document.querySelector('#work-pr5')

const color1 = document.getElementById('daily')
const color2 = document.getElementById('weekly')
const color3 = document.getElementById('monthly')




let userData;
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    userData = data;
    console.log(data);
    // console.log(data[0]['timeframes']['daily']['current']);
    // console.log(data[0]['timeframes']['daily']['previous']);
    daily.addEventListener("click", () => {

      color1.classList.add('color');
      color3.classList.remove('color');
      color2.classList.remove('color');


      heading.innerHTML = data[0]['timeframes']['daily']['current']
      // lastpr.innerHTML = data[0]['timeframes']['daily']['previous']
      lastpr.innerHTML = `daily ${data[0]['timeframes']['daily']['previous']}`

      heading1.innerHTML = ` ${data[1]['timeframes']['daily']['current']}`
      lastpr1.innerHTML = `daily ${data[1]['timeframes']['daily']['previous']}`


      heading2.innerHTML = ` ${data[2]['timeframes']['daily']['current']}`
      lastpr2.innerHTML = `daily ${data[2]['timeframes']['daily']['previous']}`


      heading3.innerHTML = ` ${data[3]['timeframes']['daily']['current']}`
      lastpr3.innerHTML = `daily ${data[3]['timeframes']['daily']['previous']}`


      heading4.innerHTML = ` ${data[4]['timeframes']['daily']['current']}`
      lastpr4.innerHTML = `daily ${data[4]['timeframes']['daily']['previous']}`

      heading5.innerHTML = `${data[5]['timeframes']['daily']['current']}`
      lastpr5.innerHTML = `daily ${data[5]['timeframes']['daily']['previous']}`

    })

    weekly.addEventListener("click", () => {
      color2.classList.add('color');
      color1.classList.remove('color');
      color3.classList.remove('color');




      heading.innerHTML = `${data[0]['timeframes']['weekly']['current']}`
      lastpr.innerHTML = `Week ${data[0]['timeframes']['weekly']['previous']}`

      heading1.innerHTML = `${data[1]['timeframes']['weekly']['current']}`
      lastpr1.innerHTML = `Week ${data[1]['timeframes']['weekly']['previous']}`


      heading2.innerHTML =`${ data[2]['timeframes']['weekly']['current']}`
      lastpr2.innerHTML = `Week ${data[2]['timeframes']['weekly']['previous']}`


      heading3.innerHTML = `${data[3]['timeframes']['weekly']['current']}`
      lastpr3.innerHTML = `Week ${data[3]['timeframes']['weekly']['previous']}`


      heading4.innerHTML = `${data[4]['timeframes']['weekly']['current']}`
      lastpr4.innerHTML = `Week ${data[4]['timeframes']['weekly']['previous']}`

      heading5.innerHTML = `${data[5]['timeframes']['weekly']['current']}`
      lastpr5.innerHTML = `Week  ${data[5]['timeframes']['weekly']['previous']}`




    })
    monthly.addEventListener("click", () => {

      color3.classList.add('color');

      color2.classList.remove('color');
      color1.classList.remove('color');



      heading.innerHTML = data[0]['timeframes']['monthly']['current']
      lastpr.innerHTML = data[0]['timeframes']['monthly']['previous']


      heading1.innerHTML = ` monthly ${ data[1]['timeframes']['monthly']['current']}hrs666`
      lastpr1.innerHTML = data[1]['timeframes']['monthly']['current']
      lastpr1.innerHTML =`Monthly ${ data[1]['timeframes']['monthly']['previous']}`
      heading.innerHTML = data[0]['timeframes']['monthly']['current']
      lastpr.innerHTML = `Monthly ${data[0]['timeframes']['monthly']['previous']}`
      heading1.innerHTML = data[1]['timeframes']['monthly']['current']
      lastpr1.innerHTML =`Monthly ${ data[1]['timeframes']['monthly']['previous']}`
      heading2.innerHTML = data[2]['timeframes']['monthly']['current']
      lastpr2.innerHTML = `Monthly ${data[2]['timeframes']['monthly']['previous']}`
      heading3.innerHTML = data[3]['timeframes']['monthly']['current']
      lastpr3.innerHTML =`Monthly ${ data[3]['timeframes']['monthly']['previous']}`
      heading4.innerHTML = data[4]['timeframes']['monthly']['current']
      lastpr4.innerHTML = `Monthly ${data[4]['timeframes']['monthly']['previous']}`
      heading5.innerHTML = data[5]['timeframes']['monthly']['current']
      lastpr5.innerHTML = `Monthly ${data[5]['timeframes']['monthly']['previous']}`

    })






  })
  .catch((error) => console.log(error));

























    // for(var i = 0; i<data.length; i++){
    //     // console.log(data[i]['timeframes']['daily']['current']);
    //     let current = data[i]['timeframes']['daily']['previous'];

    //     console.log(current);

    // }

  // https://github.com/dialejo24/time-tracking-dashboard/blob/main/javascript/script.js


  // https://github.com/andykallian/time-tracking-dashboard/blob/main/index.js
