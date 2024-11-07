class APIUtils {
    constructor(apiContext,loginPayload)
    {
        this.apiContext = apiContext;
        this.loginPayload=loginPayload;

    }

    async getToken()
    {
        const loginresponseObject = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{data:this.loginPayload});
        console.log(await loginresponseObject.json());
        const res = await loginresponseObject.json();
        const token=res.token;
        return token;
    }

    async createOrder(orderDetails)
    {
        let response ={};
        response['token']= await this.getToken();
        const orderResponseObj = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {data:orderDetails,
            headers:{
                'Authorization':response.token ,
                'Content-Tyoe':'application/json'
            }
            }); 
            const orderJson = await orderResponseObj.json();
            console.log(orderJson);
            const orderId=orderJson.orders[0];
            response['orderId']=orderId;
            return response;
    }
}

export {APIUtils};


