let shop_open=true;//toggle this
let order=(task)=>
{
    return new Promise((resolve,reject)=>{

            if (shop_open) 
			{
                resolve(task())
            } 
			else 
            {
                reject(console.log("sorry sir shop closed"))
            }
        }
    )
}

order(()=>console.log("Welcome sir"))
.then(()=>console.log("please have a chair"))
.catch(()=>{console.log("at sunday our shops is closed")})
