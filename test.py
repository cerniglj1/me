import urllib
import json
import urllib.request

riot_api_key = "RGAPI-6e89fe68-5185-4845-8604-7962a7b40db8"
SUMMONER_NAME = "BIG%20SQUEEZER"

url2 = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + \
    SUMMONER_NAME + "?api_key=" + riot_api_key

with urllib.request.urlopen(url2) as url:
    data = json.loads(url.read().decode())
    print(data)
