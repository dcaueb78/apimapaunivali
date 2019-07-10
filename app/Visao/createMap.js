function changeMap(){
    clearMap();
    createDarkMap();
}

function clearMap(){
    var mapa = document.getElementById('map').innerHTML= '';
}

function createDarkMap (){
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGNhdWViNzgiLCJhIjoiY2p0MHgxemw2MGQ2ZTQ0cDl1c2Uzc3I5ayJ9.GXAUYDZt-B281Jle5BG-1Q';
        // mapboxgl.accessToken = 'pk.eyJ1IjoiZGNhdWViNzgiLCJhIjoiY2p0MHgxemw2MGQ2ZTQ0cDl1c2Uzc3I5ayJ9.GXAUYDZt-B281Jle5BG-1Q'; versão dark
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/dcaueb78/cjvr36qoa043n1cnzt4ab31bl',
            // style: 'mapbox://styles/dcaueb78/cjv8pxgec06ol1fqv835ao7ck', versão dark

            center: [-48.665681, -26.917887],
            zoom: 16.3
        });

        map.on('load', function () {
            map.addLayer({
                'id': 'room-extrusion',
                'type': 'fill-extrusion',
                'source': {
                    // GeoJSON Data source used in vector tiles, documented at
                    // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
                    'type': 'geojson',
                    'data': {
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "base_height": 30,
                                    "height": 40,
                                    "color": "grey",
                                    "name": "porta"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.667332,
                                                -26.918062
                                            ],
                                            [
                                                -48.667327,
                                                -26.918068
                                            ],
                                            [
                                                -48.667405,
                                                -26.91812
                                            ],
                                            [
                                                -48.66741,
                                                -26.918115
                                            ],
                                            [
                                                -48.667332,
                                                -26.918062
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "03ce843cd35f0e3282d9b940bf4e0952"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662845,
                                                -26.915099
                                            ],
                                            [
                                                -48.662844,
                                                -26.915103
                                            ],
                                            [
                                                -48.662798,
                                                -26.915092
                                            ],
                                            [
                                                -48.662805,
                                                -26.915067
                                            ],
                                            [
                                                -48.662808,
                                                -26.915068
                                            ],
                                            [
                                                -48.662803,
                                                -26.915089
                                            ],
                                            [
                                                -48.662841,
                                                -26.915099
                                            ],
                                            [
                                                -48.662845,
                                                -26.9151
                                            ],
                                            [
                                                -48.662845,
                                                -26.915099
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "0c6643665c9944b8c4de3f165757ddb9"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 40,
                                    "level": 1,
                                    "name": "parede"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.667837,
                                                -26.9184
                                            ],
                                            [
                                                -48.667741,
                                                -26.918511
                                            ],
                                            [
                                                -48.667733,
                                                -26.918504
                                            ],
                                            [
                                                -48.66783,
                                                -26.918395
                                            ],
                                            [
                                                -48.667837,
                                                -26.9184
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "0ed7c7e1f018eacd0875de6a9033a829"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_115"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662653,
                                                -26.915026
                                            ],
                                            [
                                                -48.662652,
                                                -26.915031
                                            ],
                                            [
                                                -48.662633,
                                                -26.915027
                                            ],
                                            [
                                                -48.662634,
                                                -26.915021
                                            ],
                                            [
                                                -48.662653,
                                                -26.915026
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "0ef9512484f964892fbda41a69a76b10"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_116"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662708,
                                                -26.915038
                                            ],
                                            [
                                                -48.662707,
                                                -26.915044
                                            ],
                                            [
                                                -48.662686,
                                                -26.915039
                                            ],
                                            [
                                                -48.662688,
                                                -26.915034
                                            ],
                                            [
                                                -48.662708,
                                                -26.915038
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "113363458b11df0b5f511429ca0d3513"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662634,
                                                -26.915021
                                            ],
                                            [
                                                -48.662633,
                                                -26.915027
                                            ],
                                            [
                                                -48.662599,
                                                -26.915019
                                            ],
                                            [
                                                -48.6626,
                                                -26.915013
                                            ],
                                            [
                                                -48.662634,
                                                -26.915021
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "13168d19d86f1c8b0671edc6eacb77cc"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662688,
                                                -26.915034
                                            ],
                                            [
                                                -48.662686,
                                                -26.915039
                                            ],
                                            [
                                                -48.662652,
                                                -26.915031
                                            ],
                                            [
                                                -48.662653,
                                                -26.915025
                                            ],
                                            [
                                                -48.662688,
                                                -26.915034
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "1368e69795263d02a37e2043c717156c"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "blue",
                                    "base_height": 0,
                                    "height": 4
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662272,
                                                -26.914957
                                            ],
                                            [
                                                -48.662271,
                                                -26.914961
                                            ],
                                            [
                                                -48.662223,
                                                -26.91495
                                            ],
                                            [
                                                -48.662224,
                                                -26.914945
                                            ],
                                            [
                                                -48.662272,
                                                -26.914957
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "1f2a28ca2c46cfd13a147af3d7f64ff6"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662491,
                                                -26.915014
                                            ],
                                            [
                                                -48.66249,
                                                -26.915017
                                            ],
                                            [
                                                -48.662435,
                                                -26.915004
                                            ],
                                            [
                                                -48.662442,
                                                -26.914982
                                            ],
                                            [
                                                -48.662446,
                                                -26.914983
                                            ],
                                            [
                                                -48.66244,
                                                -26.915001
                                            ],
                                            [
                                                -48.662491,
                                                -26.915014
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "226e819ffd4f45f59af500426f4b8308"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_109"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66233,
                                                -26.91495
                                            ],
                                            [
                                                -48.662329,
                                                -26.914955
                                            ],
                                            [
                                                -48.66231,
                                                -26.914951
                                            ],
                                            [
                                                -48.662312,
                                                -26.914946
                                            ],
                                            [
                                                -48.66233,
                                                -26.91495
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "2a0c1a7c3aa6f5b5fefac55ce056c7f0"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662423,
                                                -26.914972
                                            ],
                                            [
                                                -48.662421,
                                                -26.914976
                                            ],
                                            [
                                                -48.662385,
                                                -26.914968
                                            ],
                                            [
                                                -48.662387,
                                                -26.914963
                                            ],
                                            [
                                                -48.662423,
                                                -26.914972
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "2fc91f49663f5d70511acd04247681a1"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_110"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662387,
                                                -26.914963
                                            ],
                                            [
                                                -48.662385,
                                                -26.914968
                                            ],
                                            [
                                                -48.662364,
                                                -26.914963
                                            ],
                                            [
                                                -48.662366,
                                                -26.914959
                                            ],
                                            [
                                                -48.662387,
                                                -26.914963
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "30998b9a445efba34dc058431e8334fa"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662542,
                                                -26.915026
                                            ],
                                            [
                                                -48.662541,
                                                -26.91503
                                            ],
                                            [
                                                -48.66249,
                                                -26.915017
                                            ],
                                            [
                                                -48.662497,
                                                -26.914994
                                            ],
                                            [
                                                -48.6625,
                                                -26.914995
                                            ],
                                            [
                                                -48.662495,
                                                -26.915015
                                            ],
                                            [
                                                -48.662542,
                                                -26.915026
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "36fe86bc7453f9d2e87d2bd648ad31d4"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_111"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662442,
                                                -26.914982
                                            ],
                                            [
                                                -48.662421,
                                                -26.914976
                                            ],
                                            [
                                                -48.662423,
                                                -26.914971
                                            ],
                                            [
                                                -48.662444,
                                                -26.914977
                                            ],
                                            [
                                                -48.662442,
                                                -26.914982
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "3911efe6e0465e8d3a6cd779334523eb"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662366,
                                                -26.914958
                                            ],
                                            [
                                                -48.662364,
                                                -26.914963
                                            ],
                                            [
                                                -48.662329,
                                                -26.914955
                                            ],
                                            [
                                                -48.66233,
                                                -26.91495
                                            ],
                                            [
                                                -48.662366,
                                                -26.914958
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "3cf8c65a397c94ba6c8a214d6941dc28"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_118"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662807,
                                                -26.915062
                                            ],
                                            [
                                                -48.662805,
                                                -26.915067
                                            ],
                                            [
                                                -48.662789,
                                                -26.915063
                                            ],
                                            [
                                                -48.66279,
                                                -26.915058
                                            ],
                                            [
                                                -48.662807,
                                                -26.915062
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "422021d62369de5d3b926a584501a12e"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "blue",
                                    "base_height": 0,
                                    "height": 6
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662269,
                                                -26.914964
                                            ],
                                            [
                                                -48.662268,
                                                -26.914969
                                            ],
                                            [
                                                -48.66222,
                                                -26.914957
                                            ],
                                            [
                                                -48.662221,
                                                -26.914953
                                            ],
                                            [
                                                -48.662269,
                                                -26.914964
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "4393dd68e76d27a6030e5c431ad0d1f0"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_113"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662549,
                                                -26.915001
                                            ],
                                            [
                                                -48.662548,
                                                -26.915006
                                            ],
                                            [
                                                -48.662529,
                                                -26.915002
                                            ],
                                            [
                                                -48.66253,
                                                -26.914997
                                            ],
                                            [
                                                -48.662549,
                                                -26.915001
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "4aa886b9ce8c3330fcee39594c5a50a5"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66274,
                                                -26.915046
                                            ],
                                            [
                                                -48.662739,
                                                -26.915051
                                            ],
                                            [
                                                -48.662707,
                                                -26.915044
                                            ],
                                            [
                                                -48.662708,
                                                -26.915038
                                            ],
                                            [
                                                -48.66274,
                                                -26.915046
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "4b3c6e016e96cd451597fd65d717de31"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662945,
                                                -26.915099
                                            ],
                                            [
                                                -48.662936,
                                                -26.915125
                                            ],
                                            [
                                                -48.662884,
                                                -26.915112
                                            ],
                                            [
                                                -48.662892,
                                                -26.915087
                                            ],
                                            [
                                                -48.662895,
                                                -26.915088
                                            ],
                                            [
                                                -48.662888,
                                                -26.91511
                                            ],
                                            [
                                                -48.662933,
                                                -26.915121
                                            ],
                                            [
                                                -48.662941,
                                                -26.915099
                                            ],
                                            [
                                                -48.662945,
                                                -26.915099
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "4c29a14878c06e60cac66832176032a2"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662884,
                                                -26.91511
                                            ],
                                            [
                                                -48.662884,
                                                -26.915112
                                            ],
                                            [
                                                -48.662844,
                                                -26.915103
                                            ],
                                            [
                                                -48.662851,
                                                -26.915078
                                            ],
                                            [
                                                -48.662855,
                                                -26.915079
                                            ],
                                            [
                                                -48.662848,
                                                -26.915101
                                            ],
                                            [
                                                -48.662881,
                                                -26.915109
                                            ],
                                            [
                                                -48.662885,
                                                -26.91511
                                            ],
                                            [
                                                -48.662884,
                                                -26.91511
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "56133cd54a22dc5a09caab96068fe501"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662946,
                                                -26.915095
                                            ],
                                            [
                                                -48.662945,
                                                -26.915099
                                            ],
                                            [
                                                -48.662931,
                                                -26.915096
                                            ],
                                            [
                                                -48.662934,
                                                -26.915091
                                            ],
                                            [
                                                -48.662946,
                                                -26.915095
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "58cadb936afa98590f33386823387747"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662312,
                                                -26.914946
                                            ],
                                            [
                                                -48.662311,
                                                -26.914951
                                            ],
                                            [
                                                -48.662277,
                                                -26.914943
                                            ],
                                            [
                                                -48.662278,
                                                -26.914938
                                            ],
                                            [
                                                -48.662312,
                                                -26.914946
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "64ed5792619bdec44be1f42d72a47de9"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "sky blue",
                                    "base_height": 0,
                                    "height": 3
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662274,
                                                -26.914952
                                            ],
                                            [
                                                -48.662273,
                                                -26.914957
                                            ],
                                            [
                                                -48.662224,
                                                -26.914946
                                            ],
                                            [
                                                -48.662225,
                                                -26.91494
                                            ],
                                            [
                                                -48.662274,
                                                -26.914952
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "709c8e0b646651bd9f59771069a7fc86"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662799,
                                                -26.915088
                                            ],
                                            [
                                                -48.662798,
                                                -26.915092
                                            ],
                                            [
                                                -48.66275,
                                                -26.91508
                                            ],
                                            [
                                                -48.662757,
                                                -26.915056
                                            ],
                                            [
                                                -48.662761,
                                                -26.915057
                                            ],
                                            [
                                                -48.662755,
                                                -26.915078
                                            ],
                                            [
                                                -48.662799,
                                                -26.915088
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "725f51977882b0426cdf1ffe2b852798"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662593,
                                                -26.915038
                                            ],
                                            [
                                                -48.662592,
                                                -26.915042
                                            ],
                                            [
                                                -48.662541,
                                                -26.91503
                                            ],
                                            [
                                                -48.662547,
                                                -26.915007
                                            ],
                                            [
                                                -48.662551,
                                                -26.915008
                                            ],
                                            [
                                                -48.662545,
                                                -26.915027
                                            ],
                                            [
                                                -48.662593,
                                                -26.915038
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "74b7556741f528fe91ab97837327fe63"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "sky blue",
                                    "base_height": 0,
                                    "height": 7
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662268,
                                                -26.914969
                                            ],
                                            [
                                                -48.662266,
                                                -26.914972
                                            ],
                                            [
                                                -48.662218,
                                                -26.914961
                                            ],
                                            [
                                                -48.662219,
                                                -26.914957
                                            ],
                                            [
                                                -48.662268,
                                                -26.914969
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "76cb32f1f5c79e209f6a6e0d56279706"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662701,
                                                -26.915064
                                            ],
                                            [
                                                -48.6627,
                                                -26.915068
                                            ],
                                            [
                                                -48.662644,
                                                -26.915055
                                            ],
                                            [
                                                -48.662652,
                                                -26.915031
                                            ],
                                            [
                                                -48.662655,
                                                -26.915032
                                            ],
                                            [
                                                -48.66265,
                                                -26.915052
                                            ],
                                            [
                                                -48.662701,
                                                -26.915064
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "7a1dc813f7f15348a437a140ef178da6"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 0
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662793,
                                                -26.914894
                                            ],
                                            [
                                                -48.662771,
                                                -26.914956
                                            ],
                                            [
                                                -48.662723,
                                                -26.914945
                                            ],
                                            [
                                                -48.662743,
                                                -26.914882
                                            ],
                                            [
                                                -48.662793,
                                                -26.914894
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "7f06d079ba80d83839639293949b906e"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662559,
                                                -26.915004
                                            ],
                                            [
                                                -48.662558,
                                                -26.915009
                                            ],
                                            [
                                                -48.662547,
                                                -26.915007
                                            ],
                                            [
                                                -48.662549,
                                                -26.915001
                                            ],
                                            [
                                                -48.662559,
                                                -26.915004
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "822adafe7244836ac64c069a06536b67"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "sky blue",
                                    "height": "",
                                    "base_height": ""
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662941,
                                                -26.915098
                                            ],
                                            [
                                                -48.662933,
                                                -26.915121
                                            ],
                                            [
                                                -48.662888,
                                                -26.91511
                                            ],
                                            [
                                                -48.662895,
                                                -26.915087
                                            ],
                                            [
                                                -48.662916,
                                                -26.915091
                                            ],
                                            [
                                                -48.662917,
                                                -26.915087
                                            ],
                                            [
                                                -48.662933,
                                                -26.915091
                                            ],
                                            [
                                                -48.662932,
                                                -26.915095
                                            ],
                                            [
                                                -48.662941,
                                                -26.915098
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "867e994644a05a7ca85a49a3e4569dd1"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "height": 0,
                                    "base_height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662837,
                                                -26.915069
                                            ],
                                            [
                                                -48.662835,
                                                -26.915075
                                            ],
                                            [
                                                -48.662805,
                                                -26.915067
                                            ],
                                            [
                                                -48.662807,
                                                -26.915061
                                            ],
                                            [
                                                -48.662837,
                                                -26.915069
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "93262feae9760d1c9171f123472411c8"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_119"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662853,
                                                -26.915073
                                            ],
                                            [
                                                -48.662837,
                                                -26.915069
                                            ],
                                            [
                                                -48.662835,
                                                -26.915075
                                            ],
                                            [
                                                -48.662851,
                                                -26.915079
                                            ],
                                            [
                                                -48.662853,
                                                -26.915073
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "9798ef4c71eefc8f0e5b1ba39493777f"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 40,
                                    "name": "parede"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.667327,
                                                -26.918068
                                            ],
                                            [
                                                -48.667332,
                                                -26.918062
                                            ],
                                            [
                                                -48.666658,
                                                -26.917603
                                            ],
                                            [
                                                -48.666651,
                                                -26.917611
                                            ],
                                            [
                                                -48.667327,
                                                -26.918068
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "9f2b61a2c433a6e6bd60aee59813c55d"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662323,
                                                -26.914973
                                            ],
                                            [
                                                -48.662322,
                                                -26.914976
                                            ],
                                            [
                                                -48.66227,
                                                -26.914964
                                            ],
                                            [
                                                -48.662277,
                                                -26.914943
                                            ],
                                            [
                                                -48.662281,
                                                -26.914944
                                            ],
                                            [
                                                -48.662276,
                                                -26.914961
                                            ],
                                            [
                                                -48.662323,
                                                -26.914973
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "a30b459ae76a0c2a22663789fa187c56"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "gray",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662919,
                                                -26.915088
                                            ],
                                            [
                                                -48.662917,
                                                -26.915092
                                            ],
                                            [
                                                -48.662892,
                                                -26.915087
                                            ],
                                            [
                                                -48.662894,
                                                -26.915082
                                            ],
                                            [
                                                -48.662919,
                                                -26.915088
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "a561ceff7337963df04edb0331090386"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66238,
                                                -26.914987
                                            ],
                                            [
                                                -48.662379,
                                                -26.91499
                                            ],
                                            [
                                                -48.662322,
                                                -26.914976
                                            ],
                                            [
                                                -48.662329,
                                                -26.914955
                                            ],
                                            [
                                                -48.662332,
                                                -26.914956
                                            ],
                                            [
                                                -48.662327,
                                                -26.914974
                                            ],
                                            [
                                                -48.66238,
                                                -26.914987
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "a912622d2b7a4ce3ab62177b02047371"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_112"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662499,
                                                -26.914989
                                            ],
                                            [
                                                -48.662497,
                                                -26.914994
                                            ],
                                            [
                                                -48.662479,
                                                -26.91499
                                            ],
                                            [
                                                -48.662481,
                                                -26.914985
                                            ],
                                            [
                                                -48.662499,
                                                -26.914989
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "a9684d68cddcd02972fa082dc349d484"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662751,
                                                -26.915077
                                            ],
                                            [
                                                -48.66275,
                                                -26.91508
                                            ],
                                            [
                                                -48.6627,
                                                -26.915068
                                            ],
                                            [
                                                -48.662707,
                                                -26.915044
                                            ],
                                            [
                                                -48.662711,
                                                -26.915045
                                            ],
                                            [
                                                -48.662705,
                                                -26.915065
                                            ],
                                            [
                                                -48.662751,
                                                -26.915077
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "b17bcea824a86914afe020ae2f2007a6"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_114"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662589,
                                                -26.91501
                                            ],
                                            [
                                                -48.662587,
                                                -26.915016
                                            ],
                                            [
                                                -48.662558,
                                                -26.915009
                                            ],
                                            [
                                                -48.662559,
                                                -26.915004
                                            ],
                                            [
                                                -48.662589,
                                                -26.91501
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "b9cdc9073abf82dbadb27f6d43d20504"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "sky blue",
                                    "base_height": 0,
                                    "height": 1
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662277,
                                                -26.914943
                                            ],
                                            [
                                                -48.662276,
                                                -26.914947
                                            ],
                                            [
                                                -48.662227,
                                                -26.914935
                                            ],
                                            [
                                                -48.662228,
                                                -26.914931
                                            ],
                                            [
                                                -48.662277,
                                                -26.914943
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "bbe9103a28adcaa495b8117161bfbf3e"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662878,
                                                -26.915078
                                            ],
                                            [
                                                -48.662876,
                                                -26.915084
                                            ],
                                            [
                                                -48.662851,
                                                -26.915078
                                            ],
                                            [
                                                -48.662853,
                                                -26.915073
                                            ],
                                            [
                                                -48.662878,
                                                -26.915078
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "bc8eb6a40f42a1de3d492cc9b7b23057"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66279,
                                                -26.915058
                                            ],
                                            [
                                                -48.662789,
                                                -26.915063
                                            ],
                                            [
                                                -48.662757,
                                                -26.915056
                                            ],
                                            [
                                                -48.662758,
                                                -26.91505
                                            ],
                                            [
                                                -48.66279,
                                                -26.915058
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "bd65b90daa440d51ae9c77cf2241d167"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_120"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662894,
                                                -26.915082
                                            ],
                                            [
                                                -48.662892,
                                                -26.915087
                                            ],
                                            [
                                                -48.662876,
                                                -26.915083
                                            ],
                                            [
                                                -48.662878,
                                                -26.915079
                                            ],
                                            [
                                                -48.662894,
                                                -26.915082
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "c90c326d4aaaa7a04e7e5b769eadd949"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "sky blue",
                                    "base_height": 0,
                                    "height": 5
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662271,
                                                -26.914961
                                            ],
                                            [
                                                -48.66227,
                                                -26.914965
                                            ],
                                            [
                                                -48.662221,
                                                -26.914954
                                            ],
                                            [
                                                -48.662223,
                                                -26.91495
                                            ],
                                            [
                                                -48.662271,
                                                -26.914961
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "d44b763fa5102f6406944aa670aa9924"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66253,
                                                -26.914997
                                            ],
                                            [
                                                -48.662529,
                                                -26.915002
                                            ],
                                            [
                                                -48.662497,
                                                -26.914994
                                            ],
                                            [
                                                -48.662498,
                                                -26.914989
                                            ],
                                            [
                                                -48.66253,
                                                -26.914997
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "d585774143c3baaed508a6b321bfd2fd"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": 0,
                                    "height": 40,
                                    "name": "parede"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.666651,
                                                -26.917612
                                            ],
                                            [
                                                -48.666569,
                                                -26.917707
                                            ],
                                            [
                                                -48.666579,
                                                -26.917712
                                            ],
                                            [
                                                -48.666661,
                                                -26.917618
                                            ],
                                            [
                                                -48.666651,
                                                -26.917612
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "d5925adcc56d303b75a028b900c83ccb"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662644,
                                                -26.915055
                                            ],
                                            [
                                                -48.662592,
                                                -26.915042
                                            ],
                                            [
                                                -48.662599,
                                                -26.915019
                                            ],
                                            [
                                                -48.662603,
                                                -26.91502
                                            ],
                                            [
                                                -48.662597,
                                                -26.915039
                                            ],
                                            [
                                                -48.662646,
                                                -26.915051
                                            ],
                                            [
                                                -48.662644,
                                                -26.915055
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "d6ff274df3864e3b68f7b637abdeaf02"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "height": 0,
                                    "base_height": 0
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.667823,
                                                -26.918403
                                            ],
                                            [
                                                -48.667742,
                                                -26.918494
                                            ],
                                            [
                                                -48.666589,
                                                -26.917701
                                            ],
                                            [
                                                -48.666662,
                                                -26.917618
                                            ],
                                            [
                                                -48.667823,
                                                -26.918403
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "daeb7fd911eda3752b2144ffced928fe"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "blue",
                                    "base_height": 0,
                                    "height": 0
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662278,
                                                -26.914938
                                            ],
                                            [
                                                -48.662277,
                                                -26.914943
                                            ],
                                            [
                                                -48.662228,
                                                -26.914931
                                            ],
                                            [
                                                -48.66223,
                                                -26.914926
                                            ],
                                            [
                                                -48.662278,
                                                -26.914938
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "e251544c97aca0adfa611a38b615e386"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662481,
                                                -26.914985
                                            ],
                                            [
                                                -48.662479,
                                                -26.91499
                                            ],
                                            [
                                                -48.662442,
                                                -26.914982
                                            ],
                                            [
                                                -48.662444,
                                                -26.914976
                                            ],
                                            [
                                                -48.662481,
                                                -26.914985
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "e929d694a309daf1beebbd1877f488de"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_117"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662758,
                                                -26.91505
                                            ],
                                            [
                                                -48.662756,
                                                -26.915056
                                            ],
                                            [
                                                -48.662739,
                                                -26.915051
                                            ],
                                            [
                                                -48.66274,
                                                -26.915046
                                            ],
                                            [
                                                -48.662758,
                                                -26.91505
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "edbeeb7d685cafa65dddde79faa68dcc"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "blue",
                                    "base_height": 0,
                                    "height": 2
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662276,
                                                -26.914947
                                            ],
                                            [
                                                -48.662274,
                                                -26.914952
                                            ],
                                            [
                                                -48.662225,
                                                -26.91494
                                            ],
                                            [
                                                -48.662227,
                                                -26.914935
                                            ],
                                            [
                                                -48.662276,
                                                -26.914947
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "f0eb23c6a0448cd19a37910a8152836c"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "name": "parede",
                                    "height": 40,
                                    "base_height": 0,
                                    "color": "grey"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.66741,
                                                -26.918115
                                            ],
                                            [
                                                -48.667406,
                                                -26.91812
                                            ],
                                            [
                                                -48.667823,
                                                -26.918403
                                            ],
                                            [
                                                -48.66783,
                                                -26.918396
                                            ],
                                            [
                                                -48.66741,
                                                -26.918115
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "f40c5a83d589f21b958ca84bb69fc7ab"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662436,
                                                -26.915
                                            ],
                                            [
                                                -48.662435,
                                                -26.915004
                                            ],
                                            [
                                                -48.662379,
                                                -26.91499
                                            ],
                                            [
                                                -48.662385,
                                                -26.914968
                                            ],
                                            [
                                                -48.662389,
                                                -26.914969
                                            ],
                                            [
                                                -48.662384,
                                                -26.914988
                                            ],
                                            [
                                                -48.662436,
                                                -26.915
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "f85c54039aedbd5fed14a102b3f97b24"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "grey",
                                    "base_height": "",
                                    "height": 8
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.6626,
                                                -26.915013
                                            ],
                                            [
                                                -48.662589,
                                                -26.91501
                                            ],
                                            [
                                                -48.662587,
                                                -26.915016
                                            ],
                                            [
                                                -48.662598,
                                                -26.915019
                                            ],
                                            [
                                                -48.6626,
                                                -26.915013
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "fc00279776718ca50af5442fd6bf5d5b"
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "level": 1,
                                    "color": "orange",
                                    "base_height": 6,
                                    "height": 8,
                                    "name": "B6_121"
                                },
                                "geometry": {
                                    "coordinates": [
                                        [
                                            [
                                                -48.662934,
                                                -26.915091
                                            ],
                                            [
                                                -48.662931,
                                                -26.915096
                                            ],
                                            [
                                                -48.662917,
                                                -26.915093
                                            ],
                                            [
                                                -48.662918,
                                                -26.915088
                                            ],
                                            [
                                                -48.662934,
                                                -26.915091
                                            ]
                                        ]
                                    ],
                                    "type": "Polygon"
                                },
                                "id": "ffb30e1a8e8070ac7f5478016e749295"
                            }
                        ],
                        "type": "FeatureCollection"
                    }


                    // 'data': 'http://localhost/mapaUnivali/indoor-3d-map_teste.geojson'
                },
                'paint': {
                    // See the Mapbox Style Specification for details on data expressions.
                    // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions

                    // Get the fill-extrusion-color from the source 'color' property.
                    'fill-extrusion-color': ['get', 'color'],

                    // Get fill-extrusion-height from the source 'height' property.
                    'fill-extrusion-height': ['get', 'height'],

                    // Get fill-extrusion-base from the source 'base_height' property.
                    'fill-extrusion-base': ['get', 'base_height'],

                    // Make extrusions slightly opaque for see through indoor walls.
                    'fill-extrusion-opacity': 0.5
                }
            });
            map.addSource('some id', {
                type: 'geojson',
                data: {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": { "name": "Null Island" },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -48.665531,
                                -26.918245
                            ]
                        }
                    }]
                }
            });
        })
    };