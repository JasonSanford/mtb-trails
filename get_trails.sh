# Lake Norman State Park
echo '[out:json][timeout:25];(way["highway"="cycleway"](35.654506,-80.948209,35.681631,-80.913877););out body;>;out skel qt;' | ./node_modules/query-overpass/cli.js --flat-properties > trails/lake_norman_state_park.geojson

# US National Whitewater Center
echo '[out:json][timeout:25];(way["highway"="cycleway"](35.257779,-81.013956,35.283602,-80.991897););out body;>;out skel qt;' | ./node_modules/query-overpass/cli.js --flat-properties > trails/us_national_whitewater_center.geojson

# Colonel Francis Beatty Park
echo '[out:json][timeout:25];(way["highway"="cycleway"](35.055645,-80.752945,35.071839,-80.730543););out body;>;out skel qt;' | ./node_modules/query-overpass/cli.js --flat-properties > trails/beatty.geojson
