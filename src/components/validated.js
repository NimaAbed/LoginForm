const validated= (data,type)=>{
    const errors = {}
    
    if(type == "signup"){

        if(!data.name.trim()){
            errors.name = "Enter a Name"
        }else {
            delete errors.name
        }

        if(!data.comfirmPassword){
            errors.comfirmPassword="Comfirm The Password"
        }else if(data.comfirmPassword !=data.password){
            errors.comfirmPassword = "Comfirm & Password Not Match"
        }else{
            delete errors.comfirmPassword
        }
    
        if(!data.isAccepted){
            errors.isAccepted="Accepept The Roules"
        }else{
            delete errors.isAccepted
        }


    }

    

    if(!data.email){
        errors.email = "Enter a Email"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        errors.email="Enter a Valid Email"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password="Enter a Password"
    }else if(data.password.length<6){
        errors.password="Enter a Password 6 Charecter Or More"
    }else{
        delete errors.password
    }

    

    return errors
}

export default validated