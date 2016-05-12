#! /usr/local/bin/node

var fs = require('fs');
var path = require('path');

var trailsDir = 'trails';
var fileNameAll = 'all.geojson';

var fileNames = fs.readdirSync(trailsDir)
var all = {type: 'FeatureCollection', features: []};

fileNames.forEach(function (fileName) {
  if (fileName === fileNameAll) {
    return;
  }

  if (fileName.indexOf('.geojson') < 0) {
    return;
  }

  var fileContents = fs.readFileSync(path.join(trailsDir, fileName));
  var obj = JSON.parse(fileContents);

  Array.prototype.push.apply(all.features, obj.features);
});

fs.writeFileSync(path.join(trailsDir, fileNameAll), JSON.stringify(all))
