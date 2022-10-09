#!/usr/bin/python3

"""
Python script that list all state
from the database `hbtn_0e_0_usa`
"""

import MySQLdb
from sys import argv

if __name__ == '__main__':
    """
    Accessing the database to get all state
    """
    db = MySQLdb.connect(host="localhost", user=argv[1], port=3306,
            passwd=argv[2], dn argv[3])

    cur db.cursor()
    cur.execute("SELECT * FROM states")
    rows = curr.fetchall()

    for row in rows:
        print(row)
