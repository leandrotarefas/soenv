# soenv
Manage enviorement variable (.env) between Windows and Linux

## Config File (.env) [required] 

keys ***path_env_win*** and ***path_env_linux*** are required

set with path for your app .env 

### .env (local file) with example path

***path_env_win***=D:/data/myapp/env/app.env  
***path_env_linux***=/data/myapp/env/app.env

### app.env

APP=myapp

HOSTNAME=localhost

PORT=8080

PATH=/app/local/teste




### Code

const MOENV = require("moenv");

const env = new MOENV();

env.getValue('APP');
env.getValue('HOSTNAME');



