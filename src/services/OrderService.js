import axios from "axios";

const API_URL = "http://localhost:8080/customerscooters";

const createOrder =async(scooter)=>{
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(scooter[0])
    const order = await axios.post(API_URL,{ScooterId:scooter[0].id},{
        headers:{
            authorization:token
        }
    })
    return order
}

const orderService ={
    createOrder
}

export default orderService