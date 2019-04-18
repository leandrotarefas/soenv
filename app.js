function MyEnv() {  

    require('dotenv').config()

    const os = process.platform;

    let path_value = "";
    if (os == "linux"){
        path_value = process.env.path_env_linux;
    }else if(os == "win32"){
        path_value = process.env.path_env_win;
    }else{
        path_value = process.env.path_env_other
    }

    require('dotenv').config({path: path_value})  
}

MyEnv.prototype.getValue = function(key) {
    return process.env[key]
}

MyEnv.prototype.validateEnv = function(keys) {
    keys.forEach(element => {
        const key = process.env[element]
        if(!key){
            console.log(element + " not found at .env file")
            process.exit();
        }
    });
}

MyEnv.prototype.getLogPath = function(key) {
    const os = process.platform;

    let path_value = "";
    if (os == "linux"){
        path_value = process.env.log_path_env_linux;
    }else if(os == "win32"){
        path_value = process.env.log_path_env_win;
    }else{
        path_value = process.env.log_path_env_other
    }

    return path_value    
}

MyEnv.prototype.exists = function() {  
    
    const os = process.platform;

    let path_value = "";
    let log_path_value = "";

    if (os == "linux"){
        path_value = process.env.path_env_linux;
        log_path_value = process.env.log_path_env_linux;
    }else if(os == "win32"){
        path_value = process.env.path_env_win;
        log_path_value = process.env.log_path_env_win;
    }else{
        path_value = process.env.path_env_other
        log_path_value = process.env.log_path_env_other
    }

    const fs = require("fs");
    return (fs.existsSync(path_value) && fs.existsSync(log_path_value));   
}

module.exports = MyEnv;