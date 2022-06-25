
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>navbar>>>>>>>>>>>>>>>
$("#mainbox").click(function(){

   if ( $("#menu").css("width")=="0px"){
      $("#menu").innerWidth("250px")
      $(".animation").animate({paddingTop:"500px"})
      $(".item1").animate({opacity:"1", paddingTop:"25px"},900)
      $(".item2").animate({opacity:"1" ,paddingTop:"25px"},1000)
      $(".item3").animate({opacity:"1", paddingTop:"25px"},1100)
      $(".item4").animate({opacity:"1" , paddingTop:"25px"},1200)
      $(".item5").animate({opacity:"1" , paddingTop:"25px"},1300)
      $(".item5").animate({opacity:"1" , paddingTop:"25px"},1500)
      $(".item6").animate({opacity:"1" , paddingTop:"25px"},1500)
      $("#iconBox").css("marginLeft","250px")
      $("#mainbox").removeClass("fa-bars")
      $("#mainbox").addClass("fa-times")
    
   }
   
   else{
      $("#menu").innerWidth("0")
      $("#iconBox").css("marginLeft","0px")
      $("#mainbox").removeClass("fa-times")
      $("#mainbox").addClass("fa-bars")
   }

})
// ............................................................

// ...........................................APIS....................


let row = document.getElementById("displayRows")
let trendingURL= "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
let allMovie=[];

 async function getNews(mediaType="now_playing")
{
  let response= await fetch(`https://api.themoviedb.org/3/movie/${mediaType}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1`)
  let finalResult= await response.json();
  allMovie =  finalResult.results
  displayItems();
}

 async function getTrending()
{
  let response= await fetch(trendingURL)
  let finalResult= await response.json();
  allMovie = finalResult.results
  displayItems();

}

function displayItems(){
  let cartoona= ``;
 for(let i=0 ; i<allMovie.length ; i++)
   {

cartoona+=`
<div class="col-md-6 col-lg-4  text-center ">
<div  class="item overflow-hidden position-relative">
<img class="w-100" src="https://image.tmdb.org/t/p/w500//${allMovie[i].poster_path}" alt="">
<div class="layer pt-5  position-absolute ">
<h2 class="fw-bold" >${allMovie[i].original_title|| allMovie[i].name}</h2>
<p class="fw-bold">${allMovie[i].overview}</p>
<p class="fw-bold">rate: ${allMovie[i].vote_average}</p>
<p class="fw-bold">${allMovie[i].release_date || allMovie[i].first_air_date}</p>
</div>
</div>
</div>` }
   row.innerHTML=cartoona
}

let Links = document.querySelectorAll(".nav-link")
for (i=0 ; i<Links.length ; i++ ){
   Links[i].addEventListener("click",function(e){
     getNews(e.target.getAttribute("id"))
   })
 }

 $("#Trending").click(function(){
   getTrending();
 })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  >>>>>>>>>>>>>>>>>>>>>search>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let searchInput = document.querySelector("#searchInput")
async function searchByWord(word)
{
  let response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)
  let finalResult= await response.json();
  allMovie =  finalResult.results
  displayItems();
  console.log(allMovie);
}
searchInput.addEventListener("keyup",function(){
  searchByWord(searchInput.value);
})


let searchAll = document.querySelector("#search")
function search(value) {
  var tirm = value;
  var temp = "";
  for (var i = 0; i < allMovie.length; i++) {
    if (allMovie[i]?.original_title?.toLowerCase().includes(tirm.toLowerCase()) ||
    allMovie[i]?.name?.toLowerCase().includes(tirm.toLowerCase()) ||
    allMovie[i]?.original_name?.toLowerCase().includes(tirm.toLowerCase())||
    allMovie[i]?.title?.toLowerCase().includes(tirm.toLowerCase())   
    )
    temp+=`
    <div class="col-md-6 col-lg-4  text-center ">
    <div  class="item overflow-hidden position-relative">
    <img class="w-100" src="https://image.tmdb.org/t/p/w500//${allMovie[i].poster_path}" alt="">
    <div class="layer pt-5  position-absolute ">
    <h2 class="fw-bold" >${allMovie[i].original_title|| allMovie[i].name}</h2>
    <p class="fw-bold">${allMovie[i].overview}</p>
    <p class="fw-bold">rate: ${allMovie[i].vote_average}</p>
    <p class="fw-bold">${allMovie[i].release_date || allMovie[i].first_air_date}</p>
    </div>
    </div>
    </div>` }
       row.innerHTML=temp
}

$(searchAll).keyup(function(){
  search(searchAll.value)
})
getNews();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// .................................Validation..................
let regexName = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/;
let regexemail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 let regexPhone =/^\+?[0-9](?:[- ]?[0-9]){9,11}$/
 let regexAge= /^[0-9]{0,3}$/;
 let regexPass = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


let nameInput = document.querySelector("#nameInput")
let nameAlert = document.querySelector("#namealert")
let emailInput = document.querySelector("#emailInput")
let emailalert = document.querySelector("#emailalert")
let PhoneInput = document.querySelector("#phoneInput")
let phoneAlert = document.querySelector("#phoneAlert")
let ageInput = document.querySelector("#ageInput")
let ageAlert = document.querySelector("#ageAlert")
let passInput = document.querySelector("#passInput")
let passAlert = document.querySelector("#passAlert")
let RepasswordInput = document.querySelector("#RepasswordInput")
let repasswordAlert = document.querySelector("#repasswordAlert")



$("#nameInput").keyup(function(){
  if (regexName.test(nameInput.value)) {
    nameAlert.classList.replace("d-block","d-none")
  }
  else {
    nameAlert.classList.replace("d-none","d-block")
  }

})
$("#emailInput").keyup(function(){
  if (regexemail.test(emailInput.value)) {
    emailalert.classList.replace("d-block","d-none")
  }
  else {
    emailalert.classList.replace("d-none","d-block")
  }

})

$("#phoneInput").keyup(function(){
  if (regexPhone.test(PhoneInput.value)) {
    phoneAlert.classList.replace("d-block","d-none")
  }
  else {
    phoneAlert.classList.replace("d-none","d-block")
    return false;
  }

})

$("#ageInput").keyup(function(){
  if (regexAge.test(ageInput.value)) {
    ageAlert.classList.replace("d-block","d-none")
  }
  else {
    ageAlert.classList.replace("d-none","d-block")
  }

})
$("#passInput").keyup(function(){
  if (regexPass.test(passInput.value)) {
    passAlert.classList.replace("d-block","d-none")
  }
  else {
    passAlert.classList.replace("d-none","d-block")
  }

})
$("#RepasswordInput").keyup(function(){
  if (passInput.value == RepasswordInput.value) {
    repasswordAlert.classList.replace("d-block","d-none")

  }
  else {
    repasswordAlert.classList.replace("d-none","d-block")
  
  }

})












