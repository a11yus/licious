var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showSlides() 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
  }

//   login Sidebar
var loginBtn = document.querySelector("#login")
loginBtn.addEventListener("click", loginOpen)
function loginOpen(){
    var cLogin = document.querySelector("#closelogin")
    var loginArea = document.querySelector("#loginside")
    loginArea.classList.add("loginactive")
    // var cLogin = document.querySelector("#clogin")
    cLogin.style.display = "block"

}
var cLogin = document.querySelector("#closelogin")
cLogin.addEventListener("click", loginClose)
function loginClose(){
  
    var loginArea = document.querySelector("#loginside")
    loginArea.classList.remove("loginactive")
    cLogin.style.display = "none"
}


function getMobile(){
    var m = document.querySelector("#mobile").value;
    console.log(m.length);
    // for(var i = 0; i<=10; i++){
    //     if(m[i]==10){
    //         alert("1234")
    //     }
    // }

    if(m.length == 10){

        alert("123456 is the OTP to access your Licious account. Do not share this with anyone. Thank you for using Licious. - Licious")
    }
    else if(m.length>10){
        alert("Please!! Enter a Valid Mobile 📱 Number")
    }

}

var x;
function getOtp(event){
    
    var otp = document.querySelector("#onetimepass").value;
    console.log(typeof(otp))
    // x=otp;
    if(otp=="123456" ){
        console.log("hi user")
        var login = document.querySelector("#login")
        login.style.display = "none";
        document.querySelector("#loginside").classList.remove("loginactive")
        var cLogin = document.querySelector("#closelogin")
        cLogin.style.display = "none";
      var logout = document.querySelector("#logouttext")
      logout.style.display = "block"
      document.querySelector("#mobile").value = "";
      document.querySelector("#onetimepass").value = "";
      localStorage.setItem("confirm", "1")
      
        // otp="";
    }
}


document.querySelector("#confirmLogin").addEventListener("click",function(event){
    getOtp();
})
function logoutFun(){
    // if(a!){
        var login = document.querySelector("#login")
        login.style.display = "block";
        // document.querySelector("#loginside").classList.remove("loginactive")
        // var cLogin = document.querySelector("#closelogin")
        // cLogin.style.display = "none";
      var logout = document.querySelector("#logouttext")
      logout.style.display = "none"
      localStorage.setItem("confirm", "0")
    // }
    
}
var a = JSON.parse(localStorage.getItem("confirm"))
if(a=="1"){
    var login = document.querySelector("#login")
        login.style.display = "none";
        var logout = document.querySelector("#logouttext")
      logout.style.display = "block"
}
else{
    
    var login = document.querySelector("#login")
        login.style.display = "block";
        var logout = document.querySelector("#logouttext")
      logout.style.display = "none";
}

var cartBtn = document.querySelector("#carttext")
cartBtn.addEventListener("click", cartOpen)
function cartOpen()
{
var cartArea =  document.querySelector("#cartside")
cartArea.classList.add("cartactive")
var closeBtn = document.querySelector("#closecart")
closeBtn.style.display = "block"
// document.body.style.overflow = "hidden"
}
var closeBtn = document.querySelector("#closecart")
closeBtn.addEventListener("click", cartClose)
function cartClose(){
var cartArea =  document.querySelector("#cartside")
cartArea.classList.remove("cartactive")
closeBtn.style.display = "none"
}


var BestSellers = [
  // 1
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3nqjtznab5c/11/prod_display_image/1636908452.4865--2021-11-1422:17:32--1818?format=webp",
      name:"Chiken Breast - Boneless",
      des:"Tender, boneless fillets of chiken meat cut bre...",
      net_tag:"Net wt:",
      net:"500",
      gross_tag:"Gross:",
      gross:"758",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"285",
      strikePrice:"335",
      off:"14",
      off_tag:"%OFF",
  },
  //2
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/2c5ae5a2-b6fe-52f6-d354-18eff779d367/original/1584770289.1812--2020-03-2111_28_09--738.jpeg?format=webp",
      name:"Chiken Curry(Small Pcs)",
      des:"Bone-in chunky pieces of skinless meat including one le...",
      net_tag:"Net wt:",
      net:"500",
      gross_tag:"Gross:",
      gross:"526",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"169",
      strikePrice:"199",
      off:"15",
      off_tag:"%OFF",
  },
  //3
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/0b19d1e7-8ea8-59b2-5ae1-cbb20c7d5af4/original/1585475209.2224--2020-03-2915_16_49--738.jpeg?format=webp",
      name:"Classic Eggs - Pack Of 6",
      des:"Pack of ^ naturally laid, white eggs from healthy hens",
      net_tag:"Net wt:",
      net:"",
      gross_tag:"Gross:",
      gross:"",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"6",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"59",
      strikePrice:"99",
      off:"20",
      off_tag:"%OFF",
  },
  //4
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ilvkadm3u2k/11/prod_display_image/1634296643.4205--2021-10-1516:47:23--905?format=webp",
      name:"White Pomfret (Paplet)- Steakes",
      des:"Cleaned, gutted, light-coloured, buttery-textured, delica...",
      net_tag:"Net wt:",
      net:"350",
      gross_tag:"Gross:",
      gross:"600",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"729",
      strikePrice:"959",
      off:"23",
      off_tag:"%OFF",
  },
  //5
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_id9jjmp0h34/11/prod_display_image/1634624489.687--2021-10-1911:51:29--1818?format=webp",
      name:"Chiken Drumstick",
      des:"Skinles, bone-in, juicy meat from the lower leg wit...",
      net_tag:"Net wt:",
      net:"500",
      gross_tag:"Gross:",
      gross:"666",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"255",
      strikePrice:"320",
      off:"20",
      off_tag:"%OFF",
  },
  //6
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_5723580b90fd9/11/prod_display_image/1621169507.4097--2021-05-1618:21:47--472?format=webp",
      name:"Seer (Suemai) Large - steaks",
      des:"Precisely-cut, slabs of pink-fleshed seer with central var...",
      net_tag:"Net wt:",
      net:"500",
      gross_tag:"Gross:",
      gross:"649",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"849",
      strikePrice:"999",
      off:"15",
      off_tag:"%OFF",
  },

//end

]


var  BonelessCuts=[ 
//1
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_579a52ccd74d7/11/prod_display_image/1636908916.092--2021-11-1422:25:16--1818?format=webp",
      name:"Goat- Boneless",
      des:"Chunky, even pieces of fat-trimmed, boneless goat meat...",
      net_tag:"Net wt:",
      net:"500",
      gross_tag:"Gross:",
      gross:"758",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"935",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //2
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3rkjm1v51mm/11/prod_display_image/1636908716.2591--2021-11-1422:21:56--1818?format=webp",
      name:"Basa (Sheelan)- Boneless Cubes",
      des:"Relish the mouth, soft texture of Indian Basa cubes in e...",
      net_tag:"Net wt:",
      net:"400",
      gross_tag:"Gross:",
      gross:"1600",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"319",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //3
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_8izjlf6xn0k/11/prod_display_image/1636891645.0269--2021-11-1417:37:25--1818?format=webp",
      name:"Basa (Sheelan) - Fillet, Platinum Grade",
      des:"Form unpolluted Indian water, freshly cleaned, creamy... ",
      net_tag:"Net wt:",
      net:"450",
      gross_tag:"Gross:",
      gross:"1500",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"247",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //4
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_fhijtqu0u5q/11/prod_display_image/1636909487.7158--2021-11-1422:34:47--1818?format=webp",
      name:"Chiken Mini Bites(Boneless)",
      des:"Boneless chiken breast cut into bite-sized piecesthat k...",
      net_tag:"Net wt:",
      net:"250",
      gross_tag:"Gross:",
      gross:"350",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"185",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //5
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_m95jp43ivak/11/prod_display_image/1636909628.4144--2021-11-1422:37:08--1818?format=webp",
      name:"Seer (surmai) Medium - Boneless cubes",
      des:"Relish the smooth, softy texture of seer (Surmai) in every...",
      net_tag:"Net wt:",
      net:"300",
      gross_tag:"Gross:",
      gross:"550",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"664",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //6
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_mmfjrvtibub/11/prod_display_image/1636908640.7895--2021-11-1422:20:40--1818?format=webp",
      name:"Chiken Tenders- Boneless",
      des:"Premier cut of chiken closest to the inner breast bone...",
      net_tag:"Net wt:",
      net:"350",
      gross_tag:"Gross:",
      gross:"460",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"265",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },


]

var  BreakfastSnackingSpecials =[
//1
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5ry5e/11/prod_display_image/1634636534.1399--2021-10-1915:12:14--1818?format=webp",
      name:"Chunky Butter Chiken Spread",
      des:"Mildly spiced chunks of freshly rosted chiken bkended with t...",
      net_tag:"Net wt:",
      net:"200",
      gross_tag:"Gross:",
      gross:"250",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"149",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //2
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6d8cefaa-06fa-494a-b67d-74a7f0d78387/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
      name:"Chunky Shawarma Chiken Spread",
      des:"A creamy base with freshly rosted chiken chunks alon...",
      net_tag:"Net wt:",
      net:"200",
      gross_tag:"Gross:",
      gross:"200",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"149",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //3
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c809b2e0-66c5-301a-7e62-fa18244d77ea/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp",
      name:"Chunky Herby Tamato Chiken Spread",
      des:"A plesant contrast of Meaty chiken chunks flavoured with chill...",
      net_tag:"Net wt:",
      net:"200",
      gross_tag:"Gross:",
      gross:"200",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"199",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //4
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/5aac262d-d37c-4d19-ecfb-f3ce4dfd4d5f/original/Peppery-Chicken-Salami+NEw.jpg?format=webp",
      name:"Peppery Chiken Salami (Mini) | Ready To Eat",
      des:"8 pieces of peppery Chiken Salami",
      net_tag:"Net wt:",
      net:"125",
      gross_tag:"Gross:",
      gross:"",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"8",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"199",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //5
  {
      imgUrl:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_mmfjrt702db/11/prod_display_image/1634296743.2532--2021-10-1516:49:03--905?format=webp",
      name:"Chiken Breakfast Sausage with Chives| Ready to Eat",
      des:"Close cousins onions and chives add flavour to this breakfast tr...",
      net_tag:"Net wt:",
      net:"250",
      gross_tag:"Gross:",
      gross:"255",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"315",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //6
  {
      imgUrl:"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/8c46eca1-e9dc-cf08-c99a-4f65e037e162/original/1574101584.1331--2019-11-1823_56_24--260.jpeg?format=webp",
      name:"Smoked Chiken Frankfurter| Ready to Eat",
      des:"Smoked to perfection, indugle in this protein-pack...",
      net_tag:"Net wt:",
      net:"250",
      gross_tag:"Gross:",
      gross:"255",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"315",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },



]

var Blog=[  
   //1
  {
      imgUrl:"https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1827919127-min.jpg",
      name:"Try This Easy Recipe And savour Flaky Marinated and Shallow-Fried Pomfret!",
      des:"",
      net_tag:"Net wt:",
      net:"",
      gross_tag:"Gross:",
      gross:"",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //2
  {
      imgUrl:"https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1488206756-min.jpg",
      name:"Make Spicy Parwan Fry At Home In A Few Simple Steps Savour Them!",
      des:"",
      net_tag:"Net wt:",
      net:"",
      gross_tag:"Gross:",
      gross:"",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //3
  {
      imgUrl:"https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1023331516-min.jpg",
      name:"Snacking Fiesta:Spicy fried Chiken, Enjoy A Crunchy, Juicy Meal At Home!",
      des:"",
      net_tag:"Net wt:",
      net:"",
      gross_tag:"Gross:",
      gross:"",
      unit:"gms",
      Pieces_tag:"Pieces:",
      pieces:"",
      price_tag:"MRP:",
      cuurency:"₹",
      price:"",
      strikePrice:"",
      off:"",
      off_tag:"%OFF",
  },
  //4

]   
          localStorage.setItem("BestSellers", JSON.stringify(BestSellers));
          localStorage.setItem("BonelessCuts", JSON.stringify(BonelessCuts));
          localStorage.setItem("Blog", JSON.stringify(Blog));
          console.log(BestSellers)
          console.log(BonelessCuts)
          console.log(Blog)


// add to cart

var BestSellers=JSON.parse(localStorage.getItem("BestSellers"))||[];
var BonelessCuts=JSON.parse(localStorage.getItem("BonelessCuts"))||[];
var Blog=JSON.parse(localStorage.getItem("Blog"))||[];
console.log("BestSellers",BestSellers);
  _bestSell(BestSellers);
  _bonelessCuts(BonelessCuts);
  _blog(Blog);


  function  _bestSell(BestSellers){



    BestSellers.map(function(e,index,array){
  var main= document.createElement("div");
  main.setAttribute("class","main");
  var img=document.createElement("img");
  
  img.setAttribute("src",e.imgUrl);
  img.setAttribute("class","image");
  var name=document.createElement("h4");
  name.innerText=e.name;
  var des=document.createElement("p");
  des.setAttribute("class","des");
  des.innerText=e.des;
  var wgt=document.createElement("div");
  wgt.setAttribute("class","wgt");
  var net_tag=document.createElement("h6");
  net_tag.innerText=e.net_tag;

  var net=document.createElement("h6");
      net.innerText=e.net;
      var n_gm=document.createElement("h6");
      n_gm.innerText=e.unit;

  var gross_tag=document.createElement("h6");
  gross_tag.innerText=e.gross_tag;
  var gross=document.createElement("h6");
  gross.innerText=e.gross;
  var g_gm=document.createElement("h6");
  g_gm.innerText=e.unit;

  var hold=document.createElement("div");
  hold.setAttribute("class","hold");
  var pri=document.createElement("div");
  pri.setAttribute("class","pri");
  var price_tag=document.createElement("h5");
  price_tag.innerText=e.price_tag;
  var cuurency=document.createElement("h5");
  cuurency.innerText=e.cuurency;
  var price=document.createElement("h5");
  price.innerText=e.price;
  var strikePrice=document.createElement("strike");
  strikePrice.innerText=e.strikePrice;


  var btndiv=document.createElement("div");
  btndiv.setAttribute("class","btndiv");
 var  addCart=document.createElement("button");
 addCart.setAttribute("class","addcartbtn");
 addCart.innerHTML="Add to Cart";
 addCart.addEventListener("click", function () {
  addToCart(e);
});

  wgt.append(net_tag,net,n_gm,gross_tag,gross,g_gm);
  pri.append(price_tag,cuurency,price,strikePrice,addCart);
  // btndiv.append(addCart)
  
  main.append(img,name,des,wgt,pri);
  document.querySelector("#container").append(main);

});

  }


  //bonelesscut

  function  _bonelessCuts(BonelessCuts){



      BonelessCuts.map(function(e,index,array){
  var main= document.createElement("div");
  main.setAttribute("class","main");
  var img=document.createElement("img");
  
  img.setAttribute("src",e.imgUrl);
  img.setAttribute("class","image");
  var name=document.createElement("h4");
  name.innerText=e.name;
  var des=document.createElement("p");
  des.setAttribute("class","des");
  des.innerText=e.des;
  var wgt=document.createElement("div");
  wgt.setAttribute("class","wgt");
  var net_tag=document.createElement("h6");
  net_tag.innerText=e.net_tag;

  var net=document.createElement("h6");
      net.innerText=e.net;
      var n_gm=document.createElement("h6");
      n_gm.innerText=e.unit;

  var gross_tag=document.createElement("h6");
  gross_tag.innerText=e.gross_tag;
  var gross=document.createElement("h6");
  gross.innerText=e.gross;
  var g_gm=document.createElement("h6");
  g_gm.innerText=e.unit;

  var hold=document.createElement("div");
  hold.setAttribute("class","hold");
  var pri=document.createElement("div");
  pri.setAttribute("class","pri");
  var price_tag=document.createElement("h5");
  price_tag.innerText=e.price_tag;
  var cuurency=document.createElement("h5");
  cuurency.innerText=e.cuurency;
  var price=document.createElement("h5");
  price.innerText=e.price;
  var strikePrice=document.createElement("strike");
  strikePrice.innerText=e.strikePrice;


  var btndiv=document.createElement("div");
  btndiv.setAttribute("class","btndiv");
 var  addCart=document.createElement("button");
 addCart.setAttribute("class","addcartbtn");
 addCart.innerHTML="Add to Cart";
 addCart.addEventListener("click", function () {
  addToCart(e);
});

  wgt.append(net_tag,net,n_gm,gross_tag,gross,g_gm);
  pri.append(price_tag,cuurency,price,strikePrice,addCart);
  // btndiv.append(addCart)
  
  main.append(img,name,des,wgt,pri);
  document.querySelector("#bonelessCuts").append(main);
})

  }

  //Blog
  function  _blog(Blog){



      Blog.map(function(e,index,array){
  var main= document.createElement("div");
  main.setAttribute("class","b_main");
  var img=document.createElement("img");
  
  img.setAttribute("src",e.imgUrl);
  img.setAttribute("class","b_image");
  var name=document.createElement("h4");
  name.setAttribute("id","b_name");
  name.innerText=e.name;
  main.append(img,name);
  document.querySelector("#blog").append(main);
})

  }

  
  
 function addToCart(e){
  e.quant=1
  cardArr.push(e)
 localStorage.setItem("cardArr", JSON.stringify(cardArr));
  display(cardArr);
  subto();
  addE()
 console.log(cardArr)

};
