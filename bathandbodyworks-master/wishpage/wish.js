//   Data fetching---------------------------------------------------------------------------------->

var cartData = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cartData);

// wish 
var wishData = JSON.parse(localStorage.getItem("wish")) || [];  //wish
console.log(wishData) ;




//  <-----------------------------------------wishData-------------------------------------->



  //   js function------------------------------------------------------------------------------------------->



  wishData.map(function (elem, index) {

    var box = document.createElement("tr");
    box.setAttribute("class","suggestion_box")
   
  

    var items1 = document.createElement("div")
        items1.setAttribute("id","conitem")

        var items5 = document.createElement("div")
        items5.setAttribute("id","conitem2")

    var img = document.createElement("img");
        img.src = elem.image;
        img.setAttribute("class","suggestion_img")
    

    var name = document.createElement("p");
        name.setAttribute("id","itemname")
    name.textContent = elem.titel;

    let des = document.createElement("p");
       des.setAttribute("id","itemname")
   des.textContent = elem.description;
        
  // -------------td2--------------------

  var newdiv = document.createElement("td");
    let seodiv = document.createElement("div");
    let price = document.createElement("h4");
    price.innerText = elem.price1;
    price.setAttribute("id","net") ;
    // let offer = document.createElement("p");
    //     offer.innerText =elem.offer ;
    //     offer.setAttribute("id","offer")
    // let p  = document.createElement("p");
    //     p.innerText ="IN STOCK"

   
      let divend = document.createElement("td");     
          divend.setAttribute("id","neka")

    var btnwish = document.createElement("button")
      btnwish.setAttribute("class","cartwish")
        btnwish.innerText="ADD TO BAG"
        btnwish.addEventListener("click",function (){
          addTocart(elem)
          });


          var rbtn = document.createElement("button");
      rbtn.innerText = "💔 Remove";
      rbtn.setAttribute("id","Remove-1")

      rbtn.addEventListener("click", function () {
        removeItem(elem, index);
      });
      


      items5.append(name,des) 
        items1.append(img,items5)
        seodiv .append(price)
        newdiv.append(seodiv )
        divend.append(btnwish,rbtn)
    box.append(items1, newdiv,divend);
    document.querySelector("#Wishbody").append(box);

    
  });

//   Remove function & data added for next page-------------------------------------------------------------->
let count=1;
  function removeItem(elem, index) {

    count-- ;
    console.log(elem, index);
    wishData.splice(index, 1);
    // console.log(cartData);
    localStorage.setItem("wish", JSON.stringify(wishData));
    window.location.reload();
    
  }

  // wishlis add--------------------------------------------------------------------------------------------->

  function addTocart(ele){
            var cartData = JSON.parse(localStorage.getItem("cart")) || []; //cart
            console.log(ele)
            cartData.push(ele)
            localStorage.setItem("cart",JSON.stringify(cartData))
            window.location.reload()

        }

