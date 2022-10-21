#!/bin/bash
# A script that displays HTTP methods that server will accept
curl -sI "$1" -X OPTIONS | grep "Allow:" | cut -d':' -f2 | sed 's/ //'
