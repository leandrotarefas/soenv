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
    
}

module.exports = MyEnv;