# MkFriends

## Run deepface

Make sure Nginx is setup to proxy localhost:5005 on the server.

First time:
```bash
# Update apt
sudo apt update

# Clone the deepface repo:
git clone https://github.com/serengil/deepface.git
cd deepface

# Setup Python:
sudo apt install python3-full python3-venv python3-pip
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
pip install tf-keras
pip install torch

# Install dependencies:
sudo apt install -y libgl1 libglib2.0-0

# Run deepface as a service:
cd scripts
mv service.sh deepface-service.sh
nohup ./deepface-service.sh > deepface.log 2>&1 &
```

Rerun:
```bash
cd deepface
source .venv/bin/activate
cd scripts
nohup ./deepface-service.sh > deepface.log 2>&1 &
```

To check that the process is running do:

```bash
ps aux | grep deepface-service.sh
```

## Setup Nginx

```bash
sudo apt update
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/reverse-proxy
sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

```

For /etc/nginx/sites-available/reverse-proxy :
```
server {
    listen 80;
    server_name example.com www.example.com;

    root /var/www/example.com/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```