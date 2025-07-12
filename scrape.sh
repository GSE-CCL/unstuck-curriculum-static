#!/bin/sh

SITE=ccl-unstuck-curriculum-466181022071.us-central1.run.app

# delete existing site files
rm *.html
rm -rf static modules translations

# scrape dynamic site
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-host-directories https://$SITE
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-host-directories https://$SITE/strategies.html

# use wget2 to scrape extra media-width-specific files; wget2 appears to have bugs/limitations
# that prevent it from being generally useful, but it's helpful for this one task
# `sudo apt get wget2` (if needed)
wget2 --mirror --convert-links --adjust-extension --page-requisites --no-parent https://$SITE
cp -rf $SITE/static/img/* static/img/
rm -rf $SITE
