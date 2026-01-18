# MkFriends

## Run deepface

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

# Install dependencies:
sudo apt install -y libgl1 libglib2.0-0

# Run deepface as a service:
cd scripts
mv service.sh deepface-service.sh
nohup ./deepface-service.sh > deepface.log 2>&1 &
```

To check that the process is running do:

```bash
ps aux | grep deepface-service.sh
```
