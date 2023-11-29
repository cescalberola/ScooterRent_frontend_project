import axios from "axios";

const API_URL = "http://localhost:8080/customerscooters";

const createOrder =async(scooter)=>{
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(scooter)
    const productIds = cart.map(product => product.id)
    // console.log(scooter.id)
    // const order = await axios.post(API_URL,{productIds},{
    //     headers:{
    //         authorization:token
    //     }
    // })
    // return order
}

const orderService ={
    createOrder
}

export default orderService