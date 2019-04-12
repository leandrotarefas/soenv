function MyEnv() {  

    require('dotenv').config()

    const os = process.platform;

    let path_value = "";
    if (os == "linux"){
        path_value = process.env.path_env_linux;
    }else{
        path_value = process.env.path_env_win;
    }
    require('dotenv').config({path: path_value})  
}

MyEnv.prototype.getValue = function(key) {
    return process.env[key]
}

module.exports = MyEnv;