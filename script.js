const loader = document.getElementById("loader")

window.addEventListener("load", () =>{
    loader.style.display="none"
})


// ======== nav =======

const menu = document.querySelector(".menu-sm");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#menu-close");
// ======= open menu =======
menuBtn.addEventListener('click', () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

// ======= close menu ======
closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})





// ======= location ======

const locations = [
    {
        id: 1,
        place: "Main Street Café",
        category:"Downtown",
        img:"images/pexels-lindsey-flynn-494668519-20434764 1.png",
        address: "123 Main Street, Downtown",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
    {
        id: 2,
        place: "Riverside Roastery",
        category:"Riverside",
        img:"images/clifford-VobvKmG-StA-unsplash 1.png",
        address: "456 River Road, Riverside District",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7891",
    },
    {
        id: 3,
        place: "Uptown Espresso Bar",
        category:"Uptown",
        img:"images/rr-abrot-pNIgH0y3upM-unsplash 1.png",
        address: "789 Uptown Avenue, Uptown",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
    {
        id: 4,
        place: "Market Square Lounge",
        category:"Market",
        img:"images/rawkkim-hwYwbz7TAhU-unsplash 1.png",
        address: "321 Market Square, Market District",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
    {
        id: 5,
        place: "Greenfield Terrace",
        img:"/images/toa-heftiba-QnUywvDdI1o-unsplash 1.png",
        address: "987 Greenfield Lane, Greenfield",
        category:"Greenfield",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
    {
        id: 6,
        place: "Coastal Retreat",
        category:"Beachfront",
        img:"images/mihai-moisa-Djtc1T38-GY-unsplash 1.png",
        address: "654 Coastal Highway, Beachfront",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
    {
        id: 7,
        place: "Hilltop Haven",
        category:"Hilltop",
        img:"images/tony-lee-8IKf54pc3qk-unsplash 1.png",
        address: "321 Hilltop Road, Hilltop District",
        WeekDays:  "Mon-Fri 7am-7pm",
        weekEnds: "Sat-Sun 8am-6pm",
        phone: "(123) 456-7890",
    },
]

const locCon = document.querySelector(".loc-card-con1");
const locBtn = document.querySelectorAll(".loc-btn")


//============= loading items ====================
window.addEventListener('DOMContentLoaded', function(){
    displaySpecificLoc(locations);
})

// ========== filtering loc ===============
locBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const category = e.currentTarget.dataset.locid;

       const locationCategory = locations.filter(function(location){
            if(location.category === category){
                return location;
            }
       })
       console.log(locationCategory)
    if(category === 'all'){
        displaySpecificLoc(locations);
    }
    else{
        displaySpecificLoc(locationCategory);
    }

    })
    
})




// ============== filtering methods =========
    function displaySpecificLoc(location){
        let displayLoc = location.map(function(loc){
            return `<div class="loc-card p-4 overflow-hidden">
                    <div class="loc-img " ><img  src="${loc.img}" height="330px" width="250px"></div>
                    <div class="loc-card-p text-start m-1 mb-0 " style="color: #352208; font-family: josefin sans;">${loc.place}</div>
                    <div class="loc-sub-con">
                        <h6 class="lh-1 overflow-hidden Downtown-p1">${loc.address}</h6>
                        <h6 class="lh-1 overflow-hidden"><b>Hours:</b>${loc.WeekDays}</h6>
                        <h6 class="lh-1 overflow-hidden">${loc.weekEnds}</h6>
                        <h6 class="lh-1 overflow-hidden"><b>Phone:</b> ${loc.phone}</h6>
                    </div>
                </div>`;
           }) 
           displayLoc = displayLoc.join("");
           locCon.innerHTML = displayLoc;
    }



// ============== shop ==================

const products = [
    {
        id:1,
        category:"Espresso",
        name:"Espresso Elegance",
        img:"images/Vector.png",
        desc1:"A rich, full-bodied espresso blend.",
        desc2:"A rich, full-bodied espresso blend with a velvety crema and notes of dark chocolate and roasted nuts. Perfect for a bold shot or a creamy latte.",
        price:"$12",
    },
    {
        id:2,
        category:"Espresso",
        name:"Midnight Espresso",
        img:"images/Vector1.png",
        desc1:"A dark roast espresso with intense, smoky undertones",
        desc2:"A dark roast espresso with intense, smoky undertones and a deep, complex flavor profile. Ideal for those who crave a robust, invigorating experience.",
        price:"$12",
    },
    {
        id:3,
        category:"Single-Origin",
        name:"Ethiopian Sunrise",
        img:"images/Vector (2).png",
        desc1:"A bright, floral single-origin coffee with citrus and berry notes",
        desc2:"A bright, floral single-origin coffee with citrus and berry notes. Sourced from the highlands of Ethiopia, this coffee offers a vibrant and refreshing experience.",
        price:"$12",
    },
    {
        id:4,
        category:"Flavored Coffee",
        name:"Vanilla Bean Bliss",
        img:"images/Vector (4).png",
        desc1:"A delightful blend infused with the sweet flavor of vanilla beans",
        desc2:"A delightful blend infused with the sweet and creamy flavor of vanilla beans. Perfect for a comforting and aromatic cup.",
        price:"$12",
    },
    {
        id:5,
        category:"Flavored Coffee",
        name:"Hazelnut Harmony",
        img:"images/Vector (5).png",
        desc1:"A nutty blend with the warm, inviting flavor of roasted hazelnuts",
        desc2:"A rich and nutty blend with the warm, inviting flavor of roasted hazelnuts. Ideal for a cozy and indulgent coffee break.",
        price:"$12",
    },
    {
        id:6,
        category:"Decaf Coffee",
        name:"Decaf Dream",
        img:"images/Vector (6).png",
        desc1:"A smooth and flavorful decaffeinated blend.",
        desc2:"A smooth and flavorful decaffeinated blend that preserves the rich taste of coffee without the caffeine. Perfect for an evening cup.",
        price:"$12",
    },
    {
        id:7,
        category:"Decaf Coffee",
        name:"Decaf Delight",
        img:"images/Vector (7).png",
        desc1:"A decaf blend with notes of cocoa and a hint of sweetness",
        desc2:"A medium roast decaf blend with notes of cocoa and a hint of sweetness. Enjoy the full coffee experience without the jitters.",
        price:"$12",
    },
    {
        id:8,
        category:"Cold Brew",
        name:"Cold Brew Classic",
        img:"images/Vector (8).png",
        desc1:"A refreshing and smooth cold brew with a rich, chocolatey flavor.",
        desc2:" A refreshing and smooth cold brew with a rich, chocolatey flavor and low acidity. Perfect for a cool, invigorating drink.",
        price:"$12",
    },
    {
        id:9,
        category:"Cold Brew",
        name:"Citrus Cold Brew",
        img:"images/Vector (9).png",
        desc1:"A zesty and bright cold brew infused with hints of citrus.",
        desc2:" A zesty and bright cold brew infused with hints of citrus for a refreshing and unique flavor profile. Great for hot summer days.",
        price:"$12",
    },
    {
        id:10,
        category:"Specialty Blends",
        name:"Signature Reserve",
        img:"images/Vector (10).png",
        desc1:"A premium blend of carefully selected beans, roasted to perfection.",
        desc2:"A premium blend of carefully selected beans, roasted to perfection. Offers a complex flavor profile with notes of dark chocolate, caramel, and a hint of spice.",
        price:"$12",
    },
    {
        id:11,
        category:"Specialty Blends",
        name:"Artisan's Choice",
        img:"images/Vector (11).png",
        desc1:"A handcrafted blend created by our master roasters.",
        desc2:"A handcrafted blend created by our master roasters, featuring a harmonious balance of fruity, floral, and nutty notes. A true coffee connoisseur's delight.",
        price:"$12",
    },
    {
        id:12,
        category:"Seasonal Blends",
        name:"Autumn Harvest",
        img:"images/Vector (12).png",
        desc1:"A cozy blend with warm notes of cinnamon, nutmeg, and caramel.",
        desc2:"A cozy blend with warm notes of cinnamon, nutmeg, and caramel. Perfect for crisp fall mornings.",
        price:"$12",
    },
    {
        id:13,
        category:"Seasonal Blends",
        name:"Winter Wonderland",
        img:"images/Vector (13).png",
        desc1:"A festive blend with hints of peppermint and dark chocolate.",
        desc2:"A festive blend with hints of peppermint and dark chocolate, capturing the essence of the holiday season. Ideal for warming up on a chilly day.",
        price:"$12",
    },
]



const shopContainer = document.querySelector(".shop-card-con1")
const proBtn = document.querySelectorAll(".shop-btn")


window.addEventListener('DOMContentLoaded',() => {
    DisplaySpecificProducts(products)
})


proBtn.forEach(function(btn){
    btn.addEventListener('click',(e) =>{
        const category = e.currentTarget.dataset.proid
        const productCategory = products.filter((shopItems) => {
            if(shopItems.category === category){
                 return shopItems
            }
        })
        
        if(category === "all"){
            DisplaySpecificProducts(products)
        }
        else{
            DisplaySpecificProducts(productCategory)
        }
        
    })
})



function DisplaySpecificProducts(products){
    let displayProducts = products.map(function(products){
        return `<div class="pro-card  mx-sm-auto overflow-hidden" >
              <h6 class="tag text-end mx-4 mt-2 overflow-hidden">New arrival</h6>
              <div class="f-pro-img  mx-4">
                  <img src="${products.img}" alt="">
              </div>
              <!-- ===== content ==== -->
              <div class="pro-con ms-4 lh-1">
                  <h3 class=" mt-3 lh-1 fw-bolder">${products.name}</h3>
                  <h6 class="overflow-hidden">${products.desc1}</h6>
                  <!-- ======= card-footer ======= -->
                  <div class="pro-footer d-flex column-gap-1 mt-1">
                      <h1 class="pro-price fw-bolder mt-1">$12</h4>
                      <button class="btn buttons">Add to cart</button>
                      <button class="arrow buttons mt-1"><span><img src="images/arrow-up-right.png" width="20px"></span></button>
                  </div>
              </div>
          </div>`  
      })
      displayProducts = displayProducts.join("")
      shopContainer.innerHTML = displayProducts
}
