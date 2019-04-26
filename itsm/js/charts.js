var $angle = 30;
var $depth = 5;
var $fontsize = 12;
var $outlinethickness = 0;
AmCharts.makeChart("chartdiv01",
  {
    "type": "pie",
    "labelRadius": 0,
    "angle": $angle,
    "depth3D": $depth,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "startEffect": "easeInSine",
    "titleField": "country",
    "valueField": "litres",
    "outlineThickness": $outlinethickness,
    "labelTickColor": "#FFFFFF",
    "color":"#ffffff",
    "fontSize": 0,
    "theme": "light",
    "allLabels": [],
    "balloon": {},
    "legend": {
      "enabled": true,
      "fontSize": $fontsize,
      "align": "center",
		  "markerType": "circle",
      "position": "top"
    },
    "titles": [],
    "dataProvider": [
      {
        "country": "",
        "litres": "356.9"
      },
      {
        "country": "",
        "litres": 131.1
      },
      {
        "country": "",
        "litres": 115.8
      },
      {
        "country": "",
        "litres": 109.9
      },
      {
        "country": "",
        "litres": 108.3
      },
      {
        "country": "",
        "litres": 65
      },
      {
        "country": "",
        "litres": "20"
      }
    ]
  }
);

AmCharts.makeChart("chartdiv02",
				{
					"type": "serial",
					"categoryField": "category",
          "startEffect": "easeInSine",
          "theme": "light",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"gridColor": "#FFFFFF"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 0.7,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"title": "graph 1",
							"valueField": "column-1"
						},
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 0.7,
							"id": "AmGraph-2",
							"lineAlpha": 0,
							"title": "graph 2",
							"valueField": "column-2"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"gridColor": "#FFFFFF",
							"title": ""
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": 8,
							"column-2": 5
						},
						{
							"category": "category 2",
							"column-1": 6,
							"column-2": 7
						},
						{
							"category": "category 3",
							"column-1": 2,
							"column-2": 3
						},
						{
							"category": "category 4",
							"column-1": 1,
							"column-2": 3
						},
						{
							"category": "category 5",
							"column-1": 2,
							"column-2": 1
						},
						{
							"category": "category 6",
							"column-1": 3,
							"column-2": 2
						},
						{
							"category": "category 7",
							"column-1": 6,
							"column-2": 8
						}
					]
				}
			);

AmCharts.makeChart("chartdiv03",
  {
    "type": "pie",
    "angle": $angle,
    "depth3D": $depth,
    "labelRadius": 0,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "startEffect": "easeInSine",
    "titleField": "country",
    "valueField": "litres",
    "outlineThickness": $outlinethickness,
    "labelTickColor": "#FFFFFF",
    "color":"#ffffff",
    "fontSize": 0,
    "theme": "light",
    "allLabels": [],
    "balloon": {},
    "legend": {
      "enabled": true,
      "align": "center",
      "fontSize": $fontsize,
		  "markerType": "circle",
      "position": "top"
    },
    "titles": [],
    "dataProvider": [
      {
        "country": "",
        "litres": "356.9"
      },
      {
        "country": "",
        "litres": 131.1
      },
      {
        "country": "",
        "litres": 115.8
      },
      {
        "country": "",
        "litres": 109.9
      },
      {
        "country": "",
        "litres": 108.3
      },
      {
        "country": "",
        "litres": 65
      },
      {
        "country": "",
        "litres": "20"
      }
    ]
  }
);
AmCharts.makeChart("chartdiv04",
  {
    "type": "pie",
    "angle": $angle,
    "depth3D": $depth,
    "labelRadius": 0,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "startEffect": "easeInSine",
    "titleField": "country",
    "valueField": "litres",
    "outlineThickness": $outlinethickness,
    "labelTickColor": "#FFFFFF",
    "color":"#ffffff",
    "fontSize": 0,
    "theme": "light",
    "allLabels": [],
    "balloon": {},
    "legend": {
      "enabled": true,
      "fontSize": $fontsize,
      "align": "center",
		  "markerType": "circle",
      "position": "top"
    },
    "titles": [],
    "dataProvider": [
      {
        "country": "",
        "litres": "356.9"
      },
      {
        "country": "",
        "litres": 131.1
      },
      {
        "country": "",
        "litres": "20"
      }
    ]
  }
);
AmCharts.makeChart("chartdiv05",
				{
					"type": "serial",
					"categoryField": "category",
          "theme": "light",
					"rotate": true,
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"gridColor": "#FFFFFF"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "graph 1",
							"type": "column",
							"valueField": "column-1"
						},
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "graph 2",
							"type": "column",
							"valueField": "column-2"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"axisColor": "#FFFFFF",
							"gridColor": "#FFFFFF",
							"title": "",
							"titleFontSize": 0
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"category": "category 1",
							"column-1": 8,
							"column-2": 5
						},
						{
							"category": "category 2",
							"column-1": 6,
							"column-2": 7
						}
					]
				}
			);
      AmCharts.makeChart("chartdiv06",
        {
          "type": "pie",
          "angle": $angle,
          "depth3D": $depth,
          "labelRadius": 0,
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
          "startEffect": "easeInSine",
          "titleField": "country",
          "valueField": "litres",
          "outlineThickness": $outlinethickness,
          "labelTickColor": "#FFFFFF",
          "color":"#ffffff",
          "fontSize": 0,
          "theme": "light",
          "allLabels": [],
          "balloon": {},
          "legend": {
            "enabled": true,
            "fontSize": $fontsize,
            "align": "center",
      		  "markerType": "circle",
            "position": "top"
          },
          "titles": [],
          "dataProvider": [
            {
              "country": "",
              "litres": "356.9"
            },
            {
              "country": "",
              "litres": 131.1
            },
            {
              "country": "",
              "litres": "20"
            }
          ]
        }
      );
