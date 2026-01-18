# MkFriends

## Run deepface

```bash
# Update apt
sudo apt update

# Clone the deepface repo:
git clone https://github.com/serengil/deepface.git
cd deepface
pip install -e .

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
./service.sh
```
