var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GMSSatellite6172026_1 = new ol.layer.Tile({
            'title': 'GMS Satellite 6/17/2026',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.com/permissions/geoguidelines/">Map data ©2026 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DataPotensi_2 = new ol.format.GeoJSON();
var features_DataPotensi_2 = format_DataPotensi_2.readFeatures(json_DataPotensi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataPotensi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataPotensi_2.addFeatures(features_DataPotensi_2);
var lyr_DataPotensi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataPotensi_2, 
                style: style_DataPotensi_2,
                popuplayertitle: 'Data Potensi',
                interactive: true,
    title: 'Data Potensi<br />\
    <img src="styles/legend/DataPotensi_2_0.png" /> Fasilitas Umum<br />\
    <img src="styles/legend/DataPotensi_2_1.png" /> Keagamaan<br />\
    <img src="styles/legend/DataPotensi_2_2.png" /> Kesehatan<br />\
    <img src="styles/legend/DataPotensi_2_3.png" /> Pemerintah<br />\
    <img src="styles/legend/DataPotensi_2_4.png" /> Pendidikan<br />\
    <img src="styles/legend/DataPotensi_2_5.png" /> UMKM<br />\
    <img src="styles/legend/DataPotensi_2_6.png" /> Wisata<br />' });
var format_rt_rw_3 = new ol.format.GeoJSON();
var features_rt_rw_3 = format_rt_rw_3.readFeatures(json_rt_rw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_3.addFeatures(features_rt_rw_3);
var lyr_rt_rw_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_3, 
                style: style_rt_rw_3,
                popuplayertitle: 'rt_rw',
                interactive: true,
                title: '<img src="styles/legend/rt_rw_3.png" /> rt_rw'
            });
var format_dusun_4 = new ol.format.GeoJSON();
var features_dusun_4 = format_dusun_4.readFeatures(json_dusun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dusun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dusun_4.addFeatures(features_dusun_4);
var lyr_dusun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dusun_4, 
                style: style_dusun_4,
                popuplayertitle: 'dusun',
                interactive: false,
                title: '<img src="styles/legend/dusun_4.png" /> dusun'
            });
var format_batas_dusun_5 = new ol.format.GeoJSON();
var features_batas_dusun_5 = format_batas_dusun_5.readFeatures(json_batas_dusun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_dusun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_dusun_5.addFeatures(features_batas_dusun_5);
var lyr_batas_dusun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_dusun_5, 
                style: style_batas_dusun_5,
                popuplayertitle: 'batas_dusun',
                interactive: false,
                title: '<img src="styles/legend/batas_dusun_5.png" /> batas_dusun'
            });
var format_batas_desa_bojong_6 = new ol.format.GeoJSON();
var features_batas_desa_bojong_6 = format_batas_desa_bojong_6.readFeatures(json_batas_desa_bojong_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_bojong_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_bojong_6.addFeatures(features_batas_desa_bojong_6);
var lyr_batas_desa_bojong_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_desa_bojong_6, 
                style: style_batas_desa_bojong_6,
                popuplayertitle: 'batas_desa_bojong',
                interactive: false,
                title: '<img src="styles/legend/batas_desa_bojong_6.png" /> batas_desa_bojong'
            });
var format_full_7 = new ol.format.GeoJSON();
var features_full_7 = format_full_7.readFeatures(json_full_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_full_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_full_7.addFeatures(features_full_7);
var lyr_full_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_full_7, 
                style: style_full_7,
                popuplayertitle: 'full',
                interactive: false,
                title: '<img src="styles/legend/full_7.png" /> full'
            });
var format_Difference_8 = new ol.format.GeoJSON();
var features_Difference_8 = format_Difference_8.readFeatures(json_Difference_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Difference_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Difference_8.addFeatures(features_Difference_8);
var lyr_Difference_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Difference_8, 
                style: style_Difference_8,
                popuplayertitle: 'Difference',
                interactive: false,
                title: '<img src="styles/legend/Difference_8.png" /> Difference'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GMSSatellite6172026_1.setVisible(true);lyr_DataPotensi_2.setVisible(true);lyr_rt_rw_3.setVisible(true);lyr_dusun_4.setVisible(true);lyr_batas_dusun_5.setVisible(true);lyr_batas_desa_bojong_6.setVisible(true);lyr_full_7.setVisible(true);lyr_Difference_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GMSSatellite6172026_1,lyr_DataPotensi_2,lyr_rt_rw_3,lyr_dusun_4,lyr_batas_dusun_5,lyr_batas_desa_bojong_6,lyr_full_7,lyr_Difference_8];
lyr_DataPotensi_2.set('fieldAliases', {'fid': 'fid', 'nama': 'nama', 'latitude': 'latitude', 'longitude': 'longitude', 'dusun': 'dusun', 'deskripsi': 'deskripsi', 'kategori': 'kategori', 'url_foto': 'url_foto', });
lyr_rt_rw_3.set('fieldAliases', {'fid': 'fid', 'rt_rw': 'rt_rw', });
lyr_dusun_4.set('fieldAliases', {'fid': 'fid', 'dusun': 'dusun', });
lyr_batas_dusun_5.set('fieldAliases', {'fid': 'fid', 'batas_dusun': 'batas_dusun', });
lyr_batas_desa_bojong_6.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_full_7.set('fieldAliases', {'fid': 'fid', });
lyr_Difference_8.set('fieldAliases', {'fid': 'fid', });
lyr_DataPotensi_2.set('fieldImages', {'fid': 'TextEdit', 'nama': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'dusun': 'TextEdit', 'deskripsi': 'TextEdit', 'kategori': 'TextEdit', 'url_foto': 'ExternalResource', });
lyr_rt_rw_3.set('fieldImages', {'fid': 'TextEdit', 'rt_rw': 'TextEdit', });
lyr_dusun_4.set('fieldImages', {'fid': 'TextEdit', 'dusun': 'TextEdit', });
lyr_batas_dusun_5.set('fieldImages', {'fid': 'TextEdit', 'batas_dusun': 'TextEdit', });
lyr_batas_desa_bojong_6.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_full_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_Difference_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_DataPotensi_2.set('fieldLabels', {'fid': 'hidden field', 'nama': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'dusun': 'inline label - visible with data', 'deskripsi': 'inline label - visible with data', 'kategori': 'inline label - visible with data', 'url_foto': 'no label', });
lyr_rt_rw_3.set('fieldLabels', {'fid': 'no label', 'rt_rw': 'no label', });
lyr_dusun_4.set('fieldLabels', {'fid': 'no label', 'dusun': 'no label', });
lyr_batas_dusun_5.set('fieldLabels', {'fid': 'no label', 'batas_dusun': 'no label', });
lyr_batas_desa_bojong_6.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_full_7.set('fieldLabels', {'fid': 'no label', });
lyr_Difference_8.set('fieldLabels', {'fid': 'no label', });
lyr_Difference_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});