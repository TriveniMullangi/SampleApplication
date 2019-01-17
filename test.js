function myFun()
{
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve ([1,2,3])
        },2000)
    })
    
}

async function mani()
{
    var data = await myFun();
    console.log(data);
}

mani();