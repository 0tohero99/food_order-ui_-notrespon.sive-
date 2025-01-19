
const changemode = () => {
    let body = document.body;
    body.classList.toggle('dark-mode');
}

const showcoupons = () => {
    setTimeout(function () {
        document.getElementById("coupons").style.display = "block";
        document.getElementById("search").style.opacity = ".3";
    }, 5000);
}
const closecoupons = () => {
    document.getElementById("coupons").style.display = "none";
    document.getElementById("search").style.opacity = "1";
}


// http://3.17.216.66:4000/location
// http://3.17.216.66:4000/restaurants
// http://3.17.216.66:4000/restaurant?stateId=3

const base_url = "http://3.17.216.66:4000";

const getcity = async () => {
    let response = await fetch(`${base_url}/location`, { method: "get" })
    let data = await response.json()
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let element = document.createElement("option")
        let option_content = document.createTextNode(data[i].state)
        element.appendChild(option_content)
        element.value = (data[i].state_id)
        document.getElementById("city").appendChild(element)
    }
}

const getrest = async () => {
    let cityid = document.getElementById("city").value;
    let restaurant = document.getElementById("restaurent");
    while (restaurant.length > 0) {
        restaurant.remove(0)
    }
    let response = await fetch(`${base_url}/restaurant?stateId=${cityid}`, { method: "get" })
    let data = await response.json()
    for (let i = 0; i < data.length; i++) {
        let element = document.createElement("option")
        let option_content = document.createTextNode(`${data[i].restaurant_name} - ${data[i].address}`)
        element.appendChild(option_content)
        restaurant.appendChild(element)
    }
}


// const getcity = () => {
//     fetch(`${base_url}/location`, { method: "GET" })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             for (i = 0; i < data.length; i++) {
//                 let element = document.createElement("option"); //<Option></Option>//
//                 let option_content = document.createTextNode(data[i].state)// Delhi //
//                 element.appendChild(option_content);//<Option>Delhi</Option>//
//                 element.value = (data[i].state_id);//<Option value="1">Delhi</Option>//
//                 document.getElementById("city").appendChild(element);//<Select id="city"><Option value="1">Delhi</Option></Select>//
//             }
//         })

// } 