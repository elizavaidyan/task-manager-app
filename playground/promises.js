const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([7, 4, 1])
        reject('Things went wrong')
        //resolve([4, 3, 2])
        reject('New error');
    })
}, 2000)  

doWorkPromise.then((result) =>{
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})