 let fun1 =() => {
            return 'Welcome To'
        }
        
        let fun2 = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res('React Js')
                }, 3000)
            })
        }
        let fun3 = () => {
            return new Promise((res)=>{
                setTimeout(()=>{
                    res('Class')
                },3000)
            })
        }
        let mainfun = async () => {
            console.log(fun1())
            console.log(await fun2())
            console.log(await fun3()); 
        }
        mainfun();
        
