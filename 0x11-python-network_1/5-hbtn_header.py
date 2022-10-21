#!/usr/bin/python3
"""
A script that takes in a URL, sends a requestt to the URL and displays the value of
the variable X-Request-Id in the response header
"""
if __name__ == "__main__":
    import requests
    from sys import argv
    re = requests.get(argv[1])
    print(re.headers.get('x-request-id'))
