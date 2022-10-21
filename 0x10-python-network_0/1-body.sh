#!/bin/bash
# a script that takes in URL and send GETT request and display body of response
curl -sX GET "$1" -L 200
