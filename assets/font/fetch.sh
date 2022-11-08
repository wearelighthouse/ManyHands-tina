#!/bin/sh
#
# Fetches font files, and @font-face CSS for loading the fonts.
# They're not hosted on GitHub due to licence conditions.
#
# To zip up this file, from within a fonts/ directory, run:
# $ zip -er9 fonts.zip sailec tiempos
#

echo "Fetching font files. The password is in the Lighthouse 1Pass!"
cd src/assets/font

# Try wget, if that fails, use curl:
wget -O fonts.zip https://drive.google.com/uc?export=download\&id=1sJCRhTucWoYCEY6XtXMGOUK-mBtOQEyB || \
curl -L -o fonts.zip https://drive.google.com/uc?export=download\&id=1sJCRhTucWoYCEY6XtXMGOUK-mBtOQEyB

echo "Extracting files then removing the .zip"
unzip -q fonts.zip
rm fonts.zip
