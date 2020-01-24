import folium
import json
'''
Data provided by: https://data.ny.gov/widgets/i9wp-a4ja
'''

folium_map = folium.Map(location=[40.738, -73.98],
                        zoom_start=13,
                        tiles="CartoDB dark_matter")

with open('data.json') as json_file:
    data = json.load(json_file)
map_data = data["data"]

for i in map_data:

    '''
    lat  = i[11]
    long = i[12]
    station-name=i[10]
    line=i[9]
    divison=i[8]
    entrance-type=i[24]
    entry=i[25]
    '''
    # print(i[25])
    # print(i[11],i[12])
    if i[25] == "YES":
        desc = "Division: "+i[8]+", Line: "+i[9] + \
            ", Entry Allowed, Entrance Type: "+i[24]
        marker = folium.CircleMarker(location=[i[39][1], i[39][2]], radius=7, tooltip=i[10], popup=desc, color='#048E00',
                                     fill_color='#75DC72')
    else:
        desc = "Division: "+i[8]+", Line: " + \
            i[9]+", Exit only, Exit Type: "+i[24]
        marker = folium.CircleMarker(location=[i[39][1], i[39][2]], radius=7, tooltip=i[10], popup=desc, color='#8E1900',
                                     fill_color='#FF5733')

    marker.add_to(folium_map)
folium_map.save("EntranceLocations.html")
