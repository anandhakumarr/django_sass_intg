#!/bin/bash
  
echo "###################################################################################"
echo "Please be Patient: Installation will start now....... It may take some time :)"
echo "###################################################################################"


echo "Update the repositories"

sudo apt-get update

echo "Install OS dependency\n"

sudo apt-get -y install python-pip python-dev build-essential libmysqlclient-dev python-mysqldb 

echo "Installing Application dependency"

sudo apt-get -y install python-lxml libcairo2 libpango1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info libjpeg-dev


echo "Installing Django dependency"

pip install --upgrade pip

sudo pip install -r requirements.txt

