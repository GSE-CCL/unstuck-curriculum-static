#!/bin/sh

SITE=https://ccl-unstuck-curriculum-amye4qzbia-uc.a.run.app
EXTRA=https://ccl-unstuck-curriculum-amye4qzbia-uc.a.run.app/strategies.html

# delete existing site files
rm *.html
rm -rf static

# scrape dynamic site
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-host-directories $SITE
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-host-directories $EXTRA