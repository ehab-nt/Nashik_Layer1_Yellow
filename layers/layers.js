var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_Consolidated_MAP_redLinesWards_georeferenced_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Consolidated_MAP_redLinesWards_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Consolidated_MAP_redLinesWards_georeferenced_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8200651.717973, 2259217.551610, 8234875.737979, 2284902.385845]
                            })
                        });
var format_layer1_yellow_2 = new ol.format.GeoJSON();
var features_layer1_yellow_2 = format_layer1_yellow_2.readFeatures(json_layer1_yellow_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer1_yellow_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer1_yellow_2.addFeatures(features_layer1_yellow_2);cluster_layer1_yellow_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_layer1_yellow_2
});
var lyr_layer1_yellow_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_layer1_yellow_2, 
                style: style_layer1_yellow_2,
                popuplayertitle: "layer1_yellow",
                interactive: true,
                title: '<img src="styles/legend/layer1_yellow_2.png" /> layer1_yellow'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Consolidated_MAP_redLinesWards_georeferenced_1.setVisible(true);lyr_layer1_yellow_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Consolidated_MAP_redLinesWards_georeferenced_1,lyr_layer1_yellow_2];
lyr_layer1_yellow_2.set('fieldAliases', {'WD': 'WD', 'OUTLET_ID': 'OUTLET_ID', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'LAST_VISIT_DATE': 'LAST_VISIT_DATE', 'BASE_GOI_MARKET_ID': 'BASE_GOI_MARKET_ID', 'State/UT': 'State/UT', 'GOI District': 'GOI District', 'GOI Sub-District': 'GOI Sub-District', 'Base GOI Market Name': 'Base GOI Market Name', 'Base GOI Pop Group': 'Base GOI Pop Group', 'Last Date of Sync': 'Last Date of Sync', 'DS ID': 'DS ID', 'DS Name': 'DS Name', 'Need to consider': 'Need to consider', });
lyr_layer1_yellow_2.set('fieldImages', {'WD': 'TextEdit', 'OUTLET_ID': 'Range', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LAST_VISIT_DATE': 'Range', 'BASE_GOI_MARKET_ID': 'Range', 'State/UT': 'TextEdit', 'GOI District': 'TextEdit', 'GOI Sub-District': 'TextEdit', 'Base GOI Market Name': 'TextEdit', 'Base GOI Pop Group': 'TextEdit', 'Last Date of Sync': 'TextEdit', 'DS ID': 'TextEdit', 'DS Name': 'TextEdit', 'Need to consider': 'TextEdit', });
lyr_layer1_yellow_2.set('fieldLabels', {'WD': 'no label', 'OUTLET_ID': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'LAST_VISIT_DATE': 'no label', 'BASE_GOI_MARKET_ID': 'no label', 'State/UT': 'no label', 'GOI District': 'no label', 'GOI Sub-District': 'no label', 'Base GOI Market Name': 'no label', 'Base GOI Pop Group': 'no label', 'Last Date of Sync': 'no label', 'DS ID': 'no label', 'DS Name': 'no label', 'Need to consider': 'no label', });
lyr_layer1_yellow_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});