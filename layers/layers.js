var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Clippedhighrisk2_1 = new ol.format.GeoJSON();
var features_Clippedhighrisk2_1 = format_Clippedhighrisk2_1.readFeatures(json_Clippedhighrisk2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clippedhighrisk2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clippedhighrisk2_1.addFeatures(features_Clippedhighrisk2_1);
var lyr_Clippedhighrisk2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clippedhighrisk2_1, 
                style: style_Clippedhighrisk2_1,
                popuplayertitle: "Clipped high risk 2",
                interactive: true,
    title: 'Clipped high risk 2<br />\
    <img src="styles/legend/Clippedhighrisk2_1_0.png" /> Extreme<br />\
    <img src="styles/legend/Clippedhighrisk2_1_1.png" /> High<br />\
    <img src="styles/legend/Clippedhighrisk2_1_2.png" /> <br />'
        });
var format_Clippedrangepastures2_2 = new ol.format.GeoJSON();
var features_Clippedrangepastures2_2 = format_Clippedrangepastures2_2.readFeatures(json_Clippedrangepastures2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clippedrangepastures2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clippedrangepastures2_2.addFeatures(features_Clippedrangepastures2_2);
var lyr_Clippedrangepastures2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clippedrangepastures2_2, 
                style: style_Clippedrangepastures2_2,
                popuplayertitle: "Clipped range pastures 2",
                interactive: true,
                title: '<img src="styles/legend/Clippedrangepastures2_2.png" /> Clipped range pastures 2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Clippedhighrisk2_1.setVisible(true);lyr_Clippedrangepastures2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Clippedhighrisk2_1,lyr_Clippedrangepastures2_2];
lyr_Clippedhighrisk2_1.set('fieldAliases', {'PRT_WRC_SD': 'PRT_WRC_SD', 'FR_CNTRE': 'FR_CNTRE', 'FIRE_ZONE': 'FIRE_ZONE', 'RISK_CLASS': 'RISK_CLASS', 'W_PLYGN_NM': 'W_PLYGN_NM', 'LABEL': 'LABEL', 'FEAT_AREA': 'FEAT_AREA', 'FEAT_LEN': 'FEAT_LEN', 'SHAPE': 'SHAPE', 'OBJECTID': 'OBJECTID', 'UNIT_ID': 'UNIT_ID', 'PSTRE_ID': 'PSTRE_ID', 'PSTRE_NAME': 'PSTRE_NAME', 'F_CODE': 'F_CODE', 'DIST_REP_C': 'DIST_REP_C', 'DATA_SRC_C': 'DATA_SRC_C', 'OWNRSHP_C': 'OWNRSHP_C', 'CAP_METH_C': 'CAP_METH_C', 'CAP_D': 'CAP_D', 'LOAD_SRCE': 'LOAD_SRCE', 'LOAD_DATE': 'LOAD_DATE', 'AREA_SQM': 'AREA_SQM', 'FEAT_LEN_2': 'FEAT_LEN_2', 'OBJECTID_2': 'OBJECTID_2', 'PRT_PFSD_D': 'PRT_PFSD_D', 'PRT_PFTR_D': 'PRT_PFTR_D', 'GRIDCODE': 'GRIDCODE', 'FR_THRT_CS': 'FR_THRT_CS', 'FR_STRT_DY': 'FR_STRT_DY', 'FR_THRT_CC': 'FR_THRT_CC', 'FEAT_AREA_': 'FEAT_AREA_', 'FEAT_LEN_3': 'FEAT_LEN_3', 'SHAPE_2': 'SHAPE_2', 'OBJECTID_3': 'OBJECTID_3', 'Final_Area': 'Final_Area', });
lyr_Clippedrangepastures2_2.set('fieldAliases', {'UNIT_ID': 'UNIT_ID', 'PSTRE_ID': 'PSTRE_ID', 'PSTRE_NAME': 'PSTRE_NAME', 'F_CODE': 'F_CODE', 'DIST_REP_C': 'DIST_REP_C', 'DATA_SRC_C': 'DATA_SRC_C', 'OWNRSHP_C': 'OWNRSHP_C', 'CAP_METH_C': 'CAP_METH_C', 'CAP_D': 'CAP_D', 'LOAD_SRCE': 'LOAD_SRCE', 'LOAD_DATE': 'LOAD_DATE', 'AREA_SQM': 'AREA_SQM', 'FEAT_LEN': 'FEAT_LEN', 'OBJECTID': 'OBJECTID', 'PSTRE_NM2': 'PSTRE_NM2', 'PSTRE_NM3': 'PSTRE_NM3', });
lyr_Clippedhighrisk2_1.set('fieldImages', {'PRT_WRC_SD': 'TextEdit', 'FR_CNTRE': 'TextEdit', 'FIRE_ZONE': 'TextEdit', 'RISK_CLASS': 'Range', 'W_PLYGN_NM': 'TextEdit', 'LABEL': 'TextEdit', 'FEAT_AREA': 'TextEdit', 'FEAT_LEN': 'TextEdit', 'SHAPE': 'TextEdit', 'OBJECTID': 'TextEdit', 'UNIT_ID': 'TextEdit', 'PSTRE_ID': 'TextEdit', 'PSTRE_NAME': 'TextEdit', 'F_CODE': 'TextEdit', 'DIST_REP_C': 'TextEdit', 'DATA_SRC_C': 'TextEdit', 'OWNRSHP_C': 'TextEdit', 'CAP_METH_C': 'TextEdit', 'CAP_D': 'TextEdit', 'LOAD_SRCE': 'TextEdit', 'LOAD_DATE': 'TextEdit', 'AREA_SQM': 'TextEdit', 'FEAT_LEN_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'PRT_PFSD_D': 'TextEdit', 'PRT_PFTR_D': 'TextEdit', 'GRIDCODE': 'Range', 'FR_THRT_CS': 'TextEdit', 'FR_STRT_DY': 'TextEdit', 'FR_THRT_CC': 'TextEdit', 'FEAT_AREA_': 'TextEdit', 'FEAT_LEN_3': 'TextEdit', 'SHAPE_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'Final_Area': 'TextEdit', });
lyr_Clippedrangepastures2_2.set('fieldImages', {'UNIT_ID': 'TextEdit', 'PSTRE_ID': 'TextEdit', 'PSTRE_NAME': 'TextEdit', 'F_CODE': 'TextEdit', 'DIST_REP_C': 'TextEdit', 'DATA_SRC_C': 'TextEdit', 'OWNRSHP_C': 'TextEdit', 'CAP_METH_C': 'TextEdit', 'CAP_D': 'TextEdit', 'LOAD_SRCE': 'TextEdit', 'LOAD_DATE': 'TextEdit', 'AREA_SQM': 'TextEdit', 'FEAT_LEN': 'TextEdit', 'OBJECTID': 'TextEdit', 'PSTRE_NM2': 'TextEdit', 'PSTRE_NM3': 'TextEdit', });
lyr_Clippedhighrisk2_1.set('fieldLabels', {'PRT_WRC_SD': 'no label', 'FR_CNTRE': 'no label', 'FIRE_ZONE': 'no label', 'RISK_CLASS': 'no label', 'W_PLYGN_NM': 'no label', 'LABEL': 'no label', 'FEAT_AREA': 'no label', 'FEAT_LEN': 'no label', 'SHAPE': 'no label', 'OBJECTID': 'no label', 'UNIT_ID': 'no label', 'PSTRE_ID': 'no label', 'PSTRE_NAME': 'no label', 'F_CODE': 'no label', 'DIST_REP_C': 'no label', 'DATA_SRC_C': 'no label', 'OWNRSHP_C': 'no label', 'CAP_METH_C': 'no label', 'CAP_D': 'no label', 'LOAD_SRCE': 'no label', 'LOAD_DATE': 'no label', 'AREA_SQM': 'no label', 'FEAT_LEN_2': 'no label', 'OBJECTID_2': 'no label', 'PRT_PFSD_D': 'no label', 'PRT_PFTR_D': 'no label', 'GRIDCODE': 'no label', 'FR_THRT_CS': 'no label', 'FR_STRT_DY': 'no label', 'FR_THRT_CC': 'no label', 'FEAT_AREA_': 'no label', 'FEAT_LEN_3': 'no label', 'SHAPE_2': 'no label', 'OBJECTID_3': 'no label', 'Final_Area': 'no label', });
lyr_Clippedrangepastures2_2.set('fieldLabels', {'UNIT_ID': 'no label', 'PSTRE_ID': 'no label', 'PSTRE_NAME': 'no label', 'F_CODE': 'no label', 'DIST_REP_C': 'no label', 'DATA_SRC_C': 'no label', 'OWNRSHP_C': 'no label', 'CAP_METH_C': 'no label', 'CAP_D': 'no label', 'LOAD_SRCE': 'no label', 'LOAD_DATE': 'no label', 'AREA_SQM': 'no label', 'FEAT_LEN': 'no label', 'OBJECTID': 'no label', 'PSTRE_NM2': 'no label', 'PSTRE_NM3': 'no label', });
lyr_Clippedrangepastures2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});