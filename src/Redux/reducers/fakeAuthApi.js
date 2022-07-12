
const signupUser=()=>new Promise((resolve,reject)=>{
    console.log("called")
    setTimeout(()=>{
        resolve(
            {
                body:{
                    email:'piyush@gmail.com',
                    token:"bfkdbfdjkfbsjdkbfjdsbfjsdbfsjd.fdsfsdf.dfsdfsd",
                    name:"Shyft Team"
                },
                status:200
            }
            
        )
    },4000)
})

export default signupUser