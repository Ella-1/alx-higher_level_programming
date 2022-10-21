#!/bin/bash
# A script that takes URL as an argument and send gets request and display body of response
curl -s "$1" -X GET -H "X-School-User-Id: 98"
