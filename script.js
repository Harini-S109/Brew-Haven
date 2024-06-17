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




