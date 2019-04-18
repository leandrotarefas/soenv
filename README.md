# soenv
Manage enviorement variable (.env) between Windows and Linux

## Config File (.env) [required] have ***four*** required keys

keys ***path_env_win*** and ***path_env_linux*** are required


set with path for your app .env 

### .env (local file) with example path

***path_env_win***=D:/data/myapp/env/app.env  

***path_env_linux***=/data/myapp/env/app.env

***path_env_other*** = other so path


set with path for your LOG app

***log_path_env_linux***=D:/data/myapp/logs/

***log_path_env_win***=/data/myapp/logs/

***log_path_env_other***=other so path


Function Path Exists:

exists() : boolean - Check if path or file exists



### app.env

APP=myapp

HOSTNAME=localhost

PORT=8080

PATH=/app/local/teste




### Code

const SOENV = require("soenv");

const env = new SOENV();

env.getValue('APP');

env.getValue('HOSTNAME');



