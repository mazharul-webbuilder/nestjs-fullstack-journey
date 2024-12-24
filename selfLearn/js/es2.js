// Released 1998

// Error Handle Improve
function errorHandling(){
    try{
        throw new Error('Something went wrong')
    }catch (error){
        console.log(error.message)
    }
}

errorHandling()