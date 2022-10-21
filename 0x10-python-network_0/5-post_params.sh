#!/bin/bash
# A script that takes URL and POST request passed to the url sent to the body
curl -s "$1" -X POST -d "email=test@gmail.com&subject=I will always be here for PLD"
