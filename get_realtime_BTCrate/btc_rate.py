import requests 
import json, csv
import time
import os.path
#response = 


count = 0
data = (requests.get("https://www.bitstamp.net/api/v2/ticker/btcusd/").json())

os.path.exists('./bitcoin.csv')

outfile = open("bitcoin.csv", "a")


writer = csv.writer(outfile)


writer.writerow(['Date', 'Open', 'High', 'low', 'Close', 'Vol'])


writer.writerow([ time.strftime("%d/%m/%Y"), data['open'] , data['high'], data['low'],data['last'], data['volume']])
#for g in data:
#	print(g)

outfile.close()

print (data['high'] )
