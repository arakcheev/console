/*(function () {
 "use strict";
 angular.module("app.chart.ctrls", []).
 controller("chartCtrl", ["$scope", function ($scope) {
 return $scope.easypiechartsm1 = {
 percent: 63,
 options: {
 animate: {duration: 1e3, enabled: !1},
 barColor: $scope.color.success,
 lineCap: "round",
 size: 120,
 lineWidth: 5
 }
 }, $scope.easypiechartsm2 = {
 percent: 35,
 options: {
 animate: {duration: 1e3, enabled: !1},
 barColor: $scope.color.info,
 lineCap: "round",
 size: 120,
 lineWidth: 5
 }
 }, $scope.easypiechartsm3 = {
 percent: 75,
 options: {
 animate: {duration: 1e3, enabled: !1},
 barColor: $scope.color.warning,
 lineCap: "round",
 size: 120,
 lineWidth: 5
 }
 }, $scope.easypiechartsm4 = {
 percent: 66,
 options: {
 animate: {duration: 1e3, enabled: !1},
 barColor: $scope.color.danger,
 lineCap: "round",
 size: 120,
 lineWidth: 5
 }
 }, $scope.easypiechart = {
 percent: 65,
 options: {
 animate: {duration: 1e3, enabled: !0},
 barColor: $scope.color.primary,
 lineCap: "round",
 size: 180,
 lineWidth: 5
 }
 }, $scope.easypiechart2 = {
 percent: 35,
 options: {
 animate: {duration: 1e3, enabled: !0},
 barColor: $scope.color.success,
 lineCap: "round",
 size: 180,
 lineWidth: 10
 }
 }, $scope.easypiechart3 = {
 percent: 68,
 options: {
 animate: {duration: 1e3, enabled: !0},
 barColor: $scope.color.info,
 lineCap: "square",
 size: 180,
 lineWidth: 20,
 scaleLength: 0
 }
 }, $scope.gaugeChart1 = {
 data: {maxValue: 3e3, animationSpeed: 40, val: 1375},
 options: {
 lines: 12,
 angle: 0,
 lineWidth: 0.47,
 pointer: {length: 0.6, strokeWidth: 0.03, color: "#000000"},
 limitMax: "false",
 strokeColor: "#E0E0E0",
 generateGradient: !0,
 percentColors: [[0, $scope.color.success], [1, $scope.color.success]]
 }
 }, $scope.gaugeChart2 = {
 data: {maxValue: 3e3, animationSpeed: 45, val: 1200},
 options: {
 lines: 12,
 angle: 0,
 lineWidth: 0.47,
 pointer: {length: 0.6, strokeWidth: 0.03, color: "#464646"},
 limitMax: "true",
 colorStart: "#7ACBEE",
 colorStop: "#7ACBEE",
 strokeColor: "#F1F1F1",
 generateGradient: !0,
 percentColors: [[0, $scope.color.info], [1, $scope.color.info]]
 }
 }, $scope.gaugeChart3 = {
 data: {maxValue: 3e3, animationSpeed: 50, val: 1100},
 options: {
 lines: 12,
 angle: 0,
 lineWidth: 0.47,
 pointer: {length: 0.6, strokeWidth: 0.03, color: "#464646"},
 limitMax: "true",
 colorStart: "#FF7857",
 colorStop: "#FF7857",
 strokeColor: "#F1F1F1",
 generateGradient: !0,
 percentColors: [[0, $scope.color.danger], [1, $scope.color.danger]]
 }
 };
 }]).
 controller("chartjsCtrl", ["$scope", function ($scope) {
 var randomScalingFactor;
 return randomScalingFactor = function () {
 return Math.round(100 * Math.random());
 }, $scope.lineChartType = "line", $scope.lineChartData = {
 labels: ["January", "February", "March", "April", "May", "June", "July"],
 datasets: [{
 label: "My First dataset",
 fillColor: "rgba(220,220,220,0.2)",
 strokeColor: "rgba(220,220,220,1)",
 pointColor: "rgba(220,220,220,1)",
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: "rgba(220,220,220,1)",
 data: [65, 59, 90, 81, 56, 55, 40]
 }, {
 label: "My Second dataset",
 fillColor: one.color($scope.color.primary).alpha(0.2).cssa(),
 strokeColor: $scope.color.primary,
 pointColor: $scope.color.primary,
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: $scope.color.primary,
 data: [28, 48, 40, 19, 96, 27, 100]
 }]
 }, $scope.lineChartOpts = {responsive: !0}, $scope.barChartType = "bar", $scope.barChartData = {
 labels: ["January", "February", "March", "April", "May", "June", "July"],
 datasets: [{
 fillColor: "rgba(220,220,220,0.5)",
 strokeColor: "rgba(220,220,220,0.8)",
 highlightFill: "rgba(220,220,220,0.5)",
 highlightStroke: "rgba(220,220,220,1)",
 data: [65, 59, 90, 81, 56, 55, 40]
 }, {
 fillColor: one.color($scope.color.primary).alpha(0.5).cssa(),
 strokeColor: one.color($scope.color.primary).alpha(0.8).cssa(),
 highlightFill: one.color($scope.color.primary).alpha(0.7).cssa(),
 highlightStroke: $scope.color.primary,
 data: [28, 48, 40, 19, 96, 27, 100]
 }]
 }, $scope.barChartOpts = {responsive: !0}, $scope.radarChartType = "radar", $scope.radarChartData = {
 labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
 datasets: [{
 label: "My First dataset",
 fillColor: "rgba(220,220,220,0.2)",
 strokeColor: "rgba(220,220,220,1)",
 pointColor: "rgba(220,220,220,1)",
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: "rgba(220,220,220,1)",
 data: [65, 59, 90, 81, 56, 55, 40]
 }, {
 label: "My Second dataset",
 fillColor: one.color($scope.color.primary).alpha(0.5).cssa(),
 strokeColor: $scope.color.primary,
 pointColor: $scope.color.primary,
 pointStrokeColor: "#fff",
 pointHighlightFill: "#fff",
 pointHighlightStroke: $scope.color.primary,
 data: [28, 48, 40, 19, 96, 27, 100]
 }]
 }, $scope.radarChartOpts = {responsive: !0}, $scope.polarAreaChartType = "polarArea", $scope.polarAreaChartData = [{
 value: 300,
 color: $scope.color.danger,
 highlight: one.color($scope.color.danger).alpha(0.9).cssa(),
 label: "Red"
 }, {
 value: 50,
 color: $scope.color.success,
 highlight: one.color($scope.color.success).alpha(0.9).cssa(),
 label: "Green"
 }, {
 value: 100,
 color: $scope.color.warning,
 highlight: one.color($scope.color.warning).alpha(0.9).cssa(),
 label: "Yellow"
 }, {value: 40, color: "#949FB1", highlight: "#A8B3C5", label: "Grey"}, {
 value: 120,
 color: "#4D5360",
 highlight: "#616774",
 label: "Dark Grey"
 }], $scope.polarAreaChartOpts = {responsive: !0}, $scope.pieChartType = "pie", $scope.pieChartData = [{
 value: 300,
 color: $scope.color.danger,
 highlight: one.color($scope.color.danger).alpha(0.9).cssa(),
 label: "Red"
 }, {
 value: 50,
 color: $scope.color.success,
 highlight: one.color($scope.color.success).alpha(0.9).cssa(),
 label: "Green"
 }, {
 value: 100,
 color: $scope.color.warning,
 highlight: one.color($scope.color.warning).alpha(0.9).cssa(),
 label: "Yellow"
 }, {value: 40, color: "#949FB1", highlight: "#A8B3C5", label: "Grey"}, {
 value: 120,
 color: "#4D5360",
 highlight: "#616774",
 label: "Dark Grey"
 }], $scope.pieChartOpts = {
 responsive: !0,
 animationEasing: "easeOutQuart",
 animateRotate: !1,
 animateScale: !0,
 legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
 }, $scope.donutChartType = "doughnut", $scope.donutChartData = [{
 value: 300,
 color: $scope.color.danger,
 highlight: one.color($scope.color.danger).alpha(0.9).cssa(),
 label: "Red"
 }, {
 value: 50,
 color: $scope.color.success,
 highlight: one.color($scope.color.success).alpha(0.9).cssa(),
 label: "Green"
 }, {
 value: 100,
 color: $scope.color.warning,
 highlight: one.color($scope.color.warning).alpha(0.9).cssa(),
 label: "Yellow"
 }, {value: 40, color: "#949FB1", highlight: "#A8B3C5", label: "Grey"}, {
 value: 120,
 color: "#4D5360",
 highlight: "#616774",
 label: "Dark Grey"
 }], $scope.donutChartOpts = {
 responsive: !0,
 legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
 };
 }]).
 controller("flotChartCtrl", ["$scope", function ($scope) {
 var areaChart, barChart, barChartH, lineChart1, sampledata1, sampledata2;
 return lineChart1 = {}, lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22]], $scope.line1 = {}, $scope.line1.data = [{
 data: lineChart1.data1,
 label: "Trend"
 }], $scope.line1.options = {
 series: {
 lines: {
 show: !0,
 fill: !0,
 fillColor: {colors: [{opacity: 0}, {opacity: 0.3}]}
 }, points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5}
 },
 colors: [$scope.color.primary, $scope.color.infoAlt],
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"},
 xaxis: {ticks: [[1, "Jan."], [2, "Feb."], [3, "Mar."], [4, "Apr."], [5, "May"], [6, "June"], [7, "July"], [8, "Aug."], [9, "Sept."], [10, "Oct."], [11, "Nov."], [12, "Dec."]]}
 }, areaChart = {}, areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]], areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]], $scope.area = {}, $scope.area.data = [{
 data: areaChart.data1,
 label: "Value A",
 lines: {fill: !0}
 }, {
 data: areaChart.data2,
 label: "Value B",
 points: {show: !0},
 yaxis: 2
 }], $scope.area.options = {
 series: {
 lines: {show: !0, fill: !1},
 points: {show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5},
 shadowSize: 0
 },
 grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"},
 colors: [$scope.color.success, $scope.color.danger],
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 xaxis: {mode: "time"},
 yaxes: [{}, {position: "right"}]
 }, sampledata1 = [[1, 65], [2, 59], [3, 90], [4, 81], [5, 56], [6, 55], [7, 40]], sampledata2 = [[1, 28], [2, 48], [3, 40], [4, 19], [5, 96], [6, 27], [7, 10]], $scope.area1 = {}, $scope.area1.data = [{
 data: sampledata1,
 curvedLines: {apply: !0},
 lines: {show: !0, fill: !0, fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}}
 }, {data: sampledata1, label: "C", points: {show: !0}}, {
 data: sampledata2,
 curvedLines: {apply: !0},
 lines: {show: !0, fill: !0, fillColor: {colors: [{opacity: 0.2}, {opacity: 0.2}]}}
 }, {
 data: sampledata2,
 label: "D",
 points: {show: !0}
 }], $scope.area1.options = {
 series: {
 curvedLines: {active: !0},
 points: {lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 4}
 },
 grid: {hoverable: !0, clickable: !0, tickColor: "#f9f9f9", borderWidth: 1, borderColor: "#eeeeee"},
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 colors: [$scope.color.gray, $scope.color.gray, $scope.color.primary, $scope.color.primary]
 }, barChart = {}, barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]], barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]], barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]], $scope.barChart = {}, $scope.barChart.data = [{
 label: "Value A",
 data: barChart.data1
 }, {label: "Value B", data: barChart.data2}, {
 label: "Value C",
 data: barChart.data3
 }], $scope.barChart.options = {
 series: {
 stack: !0,
 bars: {show: !0, fill: 1, barWidth: 0.3, align: "center", horizontal: !1, order: 1}
 },
 grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"},
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
 }, $scope.barChart1 = {}, $scope.barChart1.data = [{
 label: "Value A",
 data: barChart.data1,
 bars: {order: 0}
 }, {label: "Value B", data: barChart.data2, bars: {order: 1}}, {
 label: "Value C",
 data: barChart.data3,
 bars: {order: 2}
 }], $scope.barChart1.options = {
 series: {
 stack: !0,
 bars: {show: !0, fill: 1, barWidth: 0.2, align: "center", horizontal: !1}
 },
 grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"},
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
 }, $scope.barChart3 = {}, $scope.barChart3.data = [{
 label: " A",
 data: [[1, 65], [2, 59], [3, 90], [4, 81], [5, 56], [6, 55], [7, 40]],
 bars: {order: 0, fillColor: {colors: [{opacity: 0.3}, {opacity: 0.3}]}}
 }, {
 label: " B",
 data: [[1, 28], [2, 48], [3, 40], [4, 19], [5, 96], [6, 27], [7, 10]],
 bars: {order: 1, fillColor: {colors: [{opacity: 0.3}, {opacity: 0.3}]}}
 }], $scope.barChart3.options = {
 series: {
 stack: !0,
 bars: {show: !0, fill: 1, barWidth: 0.3, align: "center", horizontal: !1}
 },
 grid: {show: !0, aboveData: !1, color: "#eaeaea", hoverable: !0, borderWidth: 1, borderColor: "#eaeaea"},
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 colors: [$scope.color.gray, $scope.color.primary, $scope.color.info, $scope.color.danger]
 }, barChartH = {}, barChartH.data1 = [[85, 10], [50, 20], [55, 30]], barChartH.data2 = [[77, 10], [60, 20], [70, 30]], barChartH.data3 = [[100, 10], [70, 20], [55, 30]], $scope.barChart2 = {}, $scope.barChart2.data = [{
 label: "Value A",
 data: barChartH.data1,
 bars: {order: 1}
 }, {label: "Value B", data: barChartH.data2, bars: {order: 2}}, {
 label: "Value C",
 data: barChartH.data3,
 bars: {order: 3}
 }], $scope.barChart2.options = {
 series: {
 stack: !0,
 bars: {show: !0, fill: 1, barWidth: 1, align: "center", horizontal: !0}
 },
 grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"},
 tooltip: !0,
 tooltipOpts: {defaultTheme: !1},
 colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
 }, $scope.pieChart = {}, $scope.pieChart.data = [{label: "Download Sales", data: 12}, {
 label: "In-Store Sales",
 data: 30
 }, {label: "Mail-Order Sales", data: 20}, {
 label: "Online Sales",
 data: 19
 }], $scope.pieChart.options = {
 series: {pie: {show: !0}},
 legend: {show: !0},
 grid: {hoverable: !0, clickable: !0},
 colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
 tooltip: !0,
 tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}
 }, $scope.donutChart = {}, $scope.donutChart.data = [{
 label: "Download Sales",
 data: 12
 }, {label: "In-Store Sales", data: 30}, {label: "Mail-Order Sales", data: 20}, {
 label: "Online Sales",
 data: 19
 }], $scope.donutChart.options = {
 series: {pie: {show: !0, innerRadius: 0.5}},
 legend: {show: !0},
 grid: {hoverable: !0, clickable: !0},
 colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
 tooltip: !0,
 tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}
 }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{
 label: "Download Sales",
 data: 12
 }, {label: "In-Store Sales", data: 30}, {label: "Mail-Order Sales", data: 20}, {
 label: "Online Sales",
 data: 19
 }, {label: "Direct Sales", data: 15}], $scope.donutChart2.options = {
 series: {
 pie: {
 show: !0,
 innerRadius: 0.45
 }
 },
 legend: {show: !1},
 grid: {hoverable: !0, clickable: !0},
 colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
 tooltip: !0,
 tooltipOpts: {content: "%p.0%, %s", defaultTheme: !1}
 };
 }]).
 controller("sparklineCtrl", ["$scope", function ($scope) {
 return $scope.demoData1 = {
 data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
 options: {
 type: "line",
 lineColor: "#fff",
 highlightLineColor: "#fff",
 fillColor: $scope.color.success,
 spotColor: !1,
 minSpotColor: !1,
 maxSpotColor: !1,
 width: "100%",
 height: "150px"
 }
 }, $scope.simpleChart1 = {
 data: [3, 1, 2, 3, 5, 3, 4, 2],
 options: {
 type: "line",
 lineColor: $scope.color.primary,
 fillColor: "#fafafa",
 spotColor: !1,
 minSpotColor: !1,
 maxSpotColor: !1
 }
 }, $scope.simpleChart2 = {
 data: [3, 1, 2, 3, 5, 3, 4, 2],
 options: {type: "bar", barColor: $scope.color.primary}
 }, $scope.simpleChart3 = {
 data: [3, 1, 2, 3, 5, 3, 4, 2],
 options: {
 type: "pie",
 sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]
 }
 }, $scope.tristateChart1 = {
 data: [1, 2, -3, -5, 3, 1, -4, 2],
 options: {type: "tristate", posBarColor: $scope.color.success, negBarColor: $scope.color.danger}
 }, $scope.largeChart1 = {
 data: [3, 1, 2, 3, 5, 3, 4, 2],
 options: {
 type: "line",
 lineColor: $scope.color.info,
 highlightLineColor: "#fff",
 fillColor: $scope.color.info,
 spotColor: !1,
 minSpotColor: !1,
 maxSpotColor: !1,
 width: "100%",
 height: "150px"
 }
 }, $scope.largeChart2 = {
 data: [3, 1, 2, 3, 5, 3, 4, 2],
 options: {type: "bar", barColor: $scope.color.success, barWidth: 10, width: "100%", height: "150px"}
 }, $scope.largeChart3 = {
 data: [3, 1, 2, 3, 5],
 options: {
 type: "pie",
 sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger],
 width: "150px",
 height: "150px"
 }
 };
 }]);
 }).call(this),*/


/*
 function () {
 "use strict";
 angular.module("app.chart.directives", []).
 directive("gaugeChart", [function () {
 return {
 restrict: "A", scope: {data: "=", options: "="}, link: function (scope, ele) {
 var data, gauge, options;
 return data = scope.data, options = scope.options, gauge = new Gauge(ele[0]).setOptions(options), gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val);
 }
 };
 }]).
 directive("chartjsChart", [function () {
 return {
 restrict: "A", scope: {data: "=", options: "=", type: "="}, link: function (scope, ele) {
 var ctx, data, myChart, options, type;

 //fixme
 //switch (data = scope.data, options = scope.options, type = scope.type.toLowerCase(), ctx = ele[0].getContext("2d"), type) {
 //    case"line":
 //         myChart = new Chart(ctx).Line(data, options);
 //    case"bar":
 //         myChart = new Chart(ctx).Bar(data, options);
 //    case"radar":
 //         myChart = new Chart(ctx).Radar(data, options);
 //    case"polararea":
 //         myChart = new Chart(ctx).PolarArea(data, options);
 //    case"pie":
 //         myChart = new Chart(ctx).Pie(data, options);
 //    case"doughnut":
 //         myChart = new Chart(ctx).Doughnut(data, options)
 //}
 return myChart;
 }
 };
 }]).
 directive("chartjsWithLegend", [function () {
 return {
 restrict: "A", link: function (scope, ele) {
 var canvas, helpers, legendHolder, moduleData, moduleDoughnut;
 return canvas = ele[0], moduleData = [{
 value: 300,
 color: "#BF616A",
 highlight: "rgba(191,97,106,0.9)",
 label: "Red"
 }, {value: 50, color: "#A3BE8C", highlight: "rgba(163,190,140,0.9)", label: "Green"}, {
 value: 100,
 color: "#EBCB8B",
 highlight: "rgba(235,203,139,0.9)",
 label: "Yellow"
 }, {value: 40, color: "#949FB1", highlight: "#A8B3C5", label: "Grey"}, {
 value: 120,
 color: "#4D5360",
 highlight: "#616774",
 label: "Dark Grey"
 }], moduleDoughnut = new Chart(canvas.getContext("2d")).Doughnut(moduleData, {responsive: !0}), legendHolder = document.createElement("div"), legendHolder.innerHTML = moduleDoughnut.generateLegend(), helpers = Chart.helpers, helpers.each(legendHolder.firstChild.childNodes, function (legendNode, index) {
 helpers.addEvent(legendNode, "mouseover", function () {
 var activeSegment;
 activeSegment = moduleDoughnut.segments[index];
 activeSegment.save();
 activeSegment.fillColor = activeSegment.highlightColor;
 moduleDoughnut.showTooltip([activeSegment]);
 activeSegment.restore();
 });
 }), helpers.addEvent(legendHolder.firstChild, "mouseout", function () {
 moduleDoughnut.draw();
 }), canvas.parentNode.parentNode.appendChild(legendHolder.firstChild);
 }
 };
 }]).
 directive("flotChart", [function () {
 return {
 restrict: "A", scope: {data: "=", options: "="}, link: function (scope, ele) {
 var data, options, plot;
 return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options);
 }
 };
 }]).
 directive("flotChartRealtime", [function () {
 return {
 restrict: "A", link: function (scope, ele) {
 var data, getRandomData, plot, totalPoints, update, updateInterval;
 return data = [], totalPoints = 300, getRandomData = function () {
 var i, prev, res, y;
 for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints;){
 prev = data.length > 0 ? data[data.length - 1] : 50;
 y = prev + 10 * Math.random() - 5;
 //0 > y ? y = 0 : y > 100 && (y = 100);//fixme
 data.push(y);
 }
 for (res = [], i = 0; i < data.length;){
 res.push([i, data[i]]);
 ++i;
 }
 return res;
 }, update = (function () {
 plot.setData([getRandomData()]);
 plot.draw();
 setTimeout(update, updateInterval);
 }), data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {
 series: {
 lines: {
 show: !0,
 fill: !0
 }, shadowSize: 0
 },
 yaxis: {min: 0, max: 100},
 xaxis: {show: !1},
 grid: {hoverable: !0, borderWidth: 1, borderColor: "#eeeeee"},
 colors: ["#5B90BF"]
 });
 }
 };
 }]).
 directive("sparkline", [function () {
 return {
 restrict: "A", scope: {data: "=", options: "="}, link: function (scope, ele) {
 var data, options, sparkResize, sparklineDraw;
 return data = scope.data, options = scope.options, sparkResize = void 0, sparklineDraw = function () {
 return ele.sparkline(data, options);
 }, $(window).resize(function () {
 return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200);
 }), sparklineDraw();
 }
 };
 }]);
 }.call(this),
 */

(function () {
    "use strict";
    angular.module("app.ui.form.ctrls", []).
        controller("TagsDemoCtrl", ["$scope", function ($scope) {
            $scope.tags = ["foo", "bar"];
            return $scope.tags;
        }]).
        controller("DatepickerDemoCtrl", [
            "$scope", function ($scope) {
                return $scope.today = function () {
                    $scope.dt = new Date();
                    return $scope.dt;
                };
                $scope.today();
                $scope.showWeeks = !0;
                $scope.toggleWeeks = function () {
                    return $scope.showWeeks = !$scope.showWeeks;
                };
                $scope.clear = function () {
                    return $scope.dt = null;
                };
                $scope.disabled = function (date, mode) {
                    return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
                };
                $scope.toggleMin = function () {
                    var _ref;
                    _ref = void 0;
                    return $scope.minDate = (null !== (_ref = $scope.minDate) ? _ref : {
                        "null": new Date
                    });
                };
                $scope.toggleMin();
                $scope.open = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    return $scope.opened = !0;
                };
                $scope.dateOptions = {
                    "year-format": "'yy'",
                    "starting-day": 1
                };
                $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"];
                return $scope.format = $scope.formats[0];
            }
        ]).
        controller("TimepickerDemoCtrl", ["$scope", function ($scope) {
            return $scope.mytime = new Date, $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
                hstep: [1, 2, 3],
                mstep: [1, 5, 10, 15, 25, 30]
            }, $scope.ismeridian = !0, $scope.toggleMode = function () {
                return $scope.ismeridian = !$scope.ismeridian
            }, $scope.update = function () {
                var d;
                return d = new Date, d.setHours(14), d.setMinutes(0), $scope.mytime = d
            }, $scope.changed = function () {
                return void 0
            }, $scope.clear = function () {
                return $scope.mytime = null
            }
        }]).
        controller("TypeaheadCtrl", ["$scope", function ($scope) {
            return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        }]).
        controller("RatingDemoCtrl", ["$scope", function ($scope) {
            return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
                return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max)
            }, $scope.ratingStates = [{
                stateOn: "glyphicon-ok-sign",
                stateOff: "glyphicon-ok-circle"
            }, {stateOn: "glyphicon-star", stateOff: "glyphicon-star-empty"}, {
                stateOn: "glyphicon-heart",
                stateOff: "glyphicon-ban-circle"
            }, {stateOn: "glyphicon-heart"}, {stateOff: "glyphicon-off"}]
        }])
}).call(this), function () {
    angular.module("app.ui.form.directives", []).
        directive("uiRangeSlider", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    return ele.slider()
                }
            }
        }]).
        directive("uiFileUpload", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    return ele.bootstrapFileInput()
                }
            }
        }]).
        directive("uiSpinner", [function () {
            return {
                restrict: "A", compile: function (ele) {
                    return ele.addClass("ui-spinner"), {
                        post: function () {
                            return ele.spinner()
                        }
                    }
                }
            }
        }]).
        directive("uiWizardForm", [function () {
            return {
                link: function (scope, ele) {
                    return ele.steps()
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.form.validation", []).
        controller("wizardFormCtrl", ["$scope", function ($scope) {
            return $scope.wizard = {
                firstName: "some name",
                lastName: "",
                email: "",
                password: "",
                age: "",
                address: ""
            }, $scope.isValidateStep1 = function () {
                return void 0
            }, $scope.finishedWizard = function () {
                return void 0
            }
        }]).
        controller("formConstraintsCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.form = {
                required: "",
                minlength: "",
                maxlength: "",
                length_rage: "",
                type_something: "",
                confirm_type: "",
                foo: "",
                email: "",
                url: "",
                num: "",
                minVal: "",
                maxVal: "",
                valRange: "",
                pattern: ""
            }, original = angular.copy($scope.form), $scope.revert = function () {
                return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_constraints.$valid && !angular.equals($scope.form, original)
            }
        }]).
        controller("signinCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.user = {
                email: "",
                password: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
                return $scope.user = angular.copy(original), $scope.form_signin.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_signin.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function () {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }]).
        controller("signupCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.user = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                age: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
                return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_signup.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function () {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }]).
        directive("validateEquals", [function () {
            return {
                require: "ngModel", link: function (scope, ele, attrs, ngModelCtrl) {
                    var validateEqual;
                    return validateEqual = function (value) {
                        var valid;
                        return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({value: void 0}) : void 0
                    }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
                        return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0
                    })
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.page.ctrls", []).
        controller("invoiceCtrl", ["$scope", "$window", function ($scope) {
            return $scope.printInvoice = function () {
                var originalContents, popupWin, printContents;
                return printContents = document.getElementById("invoice").innerHTML, originalContents = document.body.innerHTML, popupWin = window.open(), popupWin.document.open(), popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + "</html>"), popupWin.document.close()
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.tables", []).
        controller("tableCtrl", ["$scope", "$filter", function ($scope, $filter) {
            var init;
            return $scope.stores = [{
                name: "Nijiya Market",
                price: "$$",
                sales: 292,
                rating: 4
            }, {name: "Eat On Monday Truck", price: "$", sales: 119, rating: 4.3}, {
                name: "Tea Era",
                price: "$",
                sales: 874,
                rating: 4
            }, {name: "Rogers Deli", price: "$", sales: 347, rating: 4.2}, {
                name: "MoBowl",
                price: "$$$",
                sales: 24,
                rating: 4.6
            }, {name: "The Milk Pail Market", price: "$", sales: 543, rating: 4.5}, {
                name: "Nob Hill Foods",
                price: "$$",
                sales: 874,
                rating: 4
            }, {name: "Scratch", price: "$$$", sales: 643, rating: 3.6}, {
                name: "Gochi Japanese Fusion Tapas",
                price: "$$$",
                sales: 56,
                rating: 4.1
            }, {name: "Cost Plus World Market", price: "$$", sales: 79, rating: 4}, {
                name: "Bumble Bee Health Foods",
                price: "$$",
                sales: 43,
                rating: 4.3
            }, {name: "Costco", price: "$$", sales: 219, rating: 3.6}, {
                name: "Red Rock Coffee Co",
                price: "$",
                sales: 765,
                rating: 4.1
            }, {name: "99 Ranch Market", price: "$", sales: 181, rating: 3.4}, {
                name: "Mi Pueblo Food Center",
                price: "$",
                sales: 78,
                rating: 4
            }, {name: "Cucina Venti", price: "$$", sales: 163, rating: 3.3}, {
                name: "Sufi Coffee Shop",
                price: "$",
                sales: 113,
                rating: 3.3
            }, {name: "Dana Street Roasting", price: "$", sales: 316, rating: 4.1}, {
                name: "Pearl Cafe",
                price: "$",
                sales: 173,
                rating: 3.4
            }, {name: "Posh Bagel", price: "$", sales: 140, rating: 4}, {
                name: "Artisan Wine Depot",
                price: "$$",
                sales: 26,
                rating: 4.1
            }, {name: "Hong Kong Chinese Bakery", price: "$", sales: 182, rating: 3.4}, {
                name: "Starbucks",
                price: "$$",
                sales: 97,
                rating: 3.7
            }, {name: "Tapioca Express", price: "$", sales: 301, rating: 3}, {
                name: "House of Bagels",
                price: "$",
                sales: 82,
                rating: 4.4
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.task", []).
        factory("taskStorage", function () {
            var DEMO_TASKS, STORAGE_ID;
            return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Upgrade to Yosemite", "completed": false}, {"title": "Finish homework", "completed": true}, {"title": "Try Google glass", "completed": false}, {"title": "Build a snowman :)", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Learn Swift", "completed": false}, {"title": "Shopping", "completed": true} ]', {
                get: function () {
                    return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS)
                }, put: function (tasks) {
                    return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
                }
            }
        }).
        directive("taskFocus", ["$timeout", function ($timeout) {
            return {
                link: function (scope, ele, attrs) {
                    return scope.$watch(attrs.taskFocus, function (newVal) {
                        return newVal ? $timeout(function () {
                            return ele[0].focus()
                        }, 0, !1) : void 0
                    })
                }
            }
        }]).
        controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", function ($scope, taskStorage, filterFilter, $rootScope, logger) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, {completed: !1}).length, $scope.editedTask = null, $scope.statusFilter = {completed: !1}, $scope.filter = function (filter) {
                switch (filter) {
                    case"all":
                        return $scope.statusFilter = "";
                    case"active":
                        return $scope.statusFilter = {completed: !1};
                    case"completed":
                        return $scope.statusFilter = {completed: !0}
                }
            }, $scope.add = function () {
                var newTask;
                return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({
                    title: newTask,
                    completed: !1
                }), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), $scope.newTask = "", $scope.remainingCount++) : void 0
            }, $scope.edit = function (task) {
                return $scope.editedTask = task
            }, $scope.doneEditing = function (task) {
                return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), taskStorage.put(tasks)
            }, $scope.remove = function (task) {
                var index;
                return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed")
            }, $scope.completed = function (task) {
                return $scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.remainingCount > 0 ? logger.log(1 === $scope.remainingCount ? "Almost there! Only " + $scope.remainingCount + " task left" : "Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.clearCompleted = function () {
                return $scope.tasks = tasks = tasks.filter(function (val) {
                    return !val.completed
                }), taskStorage.put(tasks)
            }, $scope.markAll = function (completed) {
                return tasks.forEach(function (task) {
                    return task.completed = completed
                }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.$watch("remainingCount == 0", function (val) {
                return $scope.allChecked = val
            }), $scope.$watch("remainingCount", function (newVal) {
                return $rootScope.$broadcast("taskRemaining:changed", newVal)
            })
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.ui.ctrls", []).
        controller("LoaderCtrl", ["$scope", "cfpLoadingBar", function ($scope, cfpLoadingBar) {
            return $scope.start = function () {
                return cfpLoadingBar.start()
            }, $scope.inc = function () {
                return cfpLoadingBar.inc()
            }, $scope.set = function () {
                return cfpLoadingBar.set(0.3)
            }, $scope.complete = function () {
                return cfpLoadingBar.complete()
            }
        }]).
        controller("NotifyCtrl", ["$scope", "logger", function ($scope, logger) {
            return $scope.notify = function (type) {
                switch (type) {
                    case"info":
                        return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                    case"success":
                        return logger.logSuccess("Well done! You successfully read this important alert message.");
                    case"warning":
                        return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                    case"error":
                        return logger.logError("Oh snap! Change a few things up and try submitting again.")
                }
            }
        }]).
        controller("AlertDemoCtrl", ["$scope", function ($scope) {
            return $scope.alerts = [{
                type: "success",
                msg: "Well done! You successfully read this important alert message."
            }, {
                type: "info",
                msg: "Heads up! This alert needs your attention, but it is not super important."
            }, {type: "warning", msg: "Warning! Best check yo self, you're not looking too good."}, {
                type: "danger",
                msg: "Oh snap! Change a few things up and try submitting again."
            }], $scope.addAlert = function () {
                var num, type;
                switch (num = Math.ceil(4 * Math.random()), type = void 0, num) {
                    case 0:
                        type = "info";
                        break;
                    case 1:
                        type = "success";
                        break;
                    case 2:
                        type = "info";
                        break;
                    case 3:
                        type = "warning";
                        break;
                    case 4:
                        type = "danger"
                }
                return $scope.alerts.push({type: type, msg: "Another alert!"})
            }, $scope.closeAlert = function (index) {
                return $scope.alerts.splice(index, 1)
            }
        }]).
        controller("ProgressDemoCtrl", ["$scope", function ($scope) {
            return $scope.max = 200, $scope.random = function () {
                var type, value;
                value = Math.floor(100 * Math.random() + 10), type = void 0, type = 25 > value ? "success" : 50 > value ? "info" : 75 > value ? "warning" : "danger", $scope.showWarning = "danger" === type || "warning" === type, $scope.dynamic = value, $scope.type = type
            }, $scope.random()
        }]).
        controller("AccordionCtrl", ["$scope", function ($scope) { //AccordionDemoCtrl
            $scope.oneAtATime = !0, $scope.groups = [{
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            }, {title: "Dynamic Group Header - 2", content: "Dynamic Group Body - 2"}, {
                title: "Dynamic Group Header - 3",
                content: "Dynamic Group Body - 3"
            }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
                isFirstOpen: !0,
                isFirstOpen1: !0
            }, $scope.addItem = function () {
                var newItemNo;
                newItemNo = $scope.items.length + 1, $scope.items.push("Item " + newItemNo)
            }
        }]).
        controller("CollapseDemoCtrl", ["$scope", function ($scope) {
            return $scope.isCollapsed = !1
        }]).
        controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function ($scope, $modal, $log) {
            $scope.items = ["item1", "item2", "item3"], $scope.open = function () {
                var modalInstance;
                modalInstance = $modal.open({
                    templateUrl: "myModalContent.html",
                    controller: "ModalInstanceCtrl",
                    resolve: {
                        items: function () {
                            return $scope.items
                        }
                    }
                }), modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem
                }, function () {
                    $log.info("Modal dismissed at: " + new Date)
                })
            }
        }]).
        controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", function ($scope, $modalInstance, items) {
            $scope.items = items, $scope.selected = {item: $scope.items[0]}, $scope.ok = function () {
                $modalInstance.close($scope.selected.item)
            }, $scope.cancel = function () {
                $modalInstance.dismiss("cancel")
            }
        }]).
        controller("PaginationDemoCtrl", ["$scope", function ($scope) {
            return $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function (pageNo) {
                return $scope.currentPage = pageNo
            }, $scope.maxSize = 5, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1
        }]).
        controller("TabsDemoCtrl", ["$scope", function ($scope) {
            return $scope.tabs = [{
                title: "Dynamic Title 1",
                content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
            }, {
                title: "Disabled",
                content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
                disabled: !0
            }], $scope.navType = "pills"
        }]).
        controller("TreeDemoCtrl", ["$scope", function ($scope) {
            return $scope.list = [{id: 1, title: "Item 1", items: []}, {
                id: 2,
                title: "Item 2",
                items: [{
                    id: 21,
                    title: "Item 2.1",
                    items: [{id: 211, title: "Item 2.1.1", items: []}, {id: 212, title: "Item 2.1.2", items: []}]
                }, {
                    id: 22,
                    title: "Item 2.2",
                    items: [{id: 221, title: "Item 2.2.1", items: []}, {id: 222, title: "Item 2.2.2", items: []}]
                }]
            }, {id: 3, title: "Item 3", items: []}, {
                id: 4,
                title: "Item 4",
                items: [{id: 41, title: "Item 4.1", items: []}]
            }, {id: 5, title: "Item 5", items: []}, {id: 6, title: "Item 6", items: []}, {
                id: 7,
                title: "Item 7",
                items: []
            }], $scope.selectedItem = {}, $scope.options = {}, $scope.remove = function (scope) {
                scope.remove()
            }, $scope.toggle = function (scope) {
                scope.toggle()
            }, $scope.newSubItem = function (scope) {
                var nodeData;
                nodeData = scope.$modelValue, nodeData.items.push({
                    id: 10 * nodeData.id + nodeData.items.length,
                    title: nodeData.title + "." + (nodeData.items.length + 1),
                    items: []
                })
            }
        }]).
        controller("MapDemoCtrl", ["$scope", "$http", "$interval", function ($scope, $http, $interval) {
            var i, markers;
            for (markers = [], i = 0; 8 > i;)markers[i] = new google.maps.Marker({title: "Marker: " + i}), i++;
            $scope.GenerateMapMarkers = function () {
                var d, lat, lng, loc, numMarkers;
                for (d = new Date, $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;)lat = 43.66 + Math.random() / 100, lng = -79.4103 + Math.random() / 100, loc = new google.maps.LatLng(lat, lng), markers[i].setPosition(loc), markers[i].setMap($scope.map), i++
            }, $interval($scope.GenerateMapMarkers, 2e3)
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.ui.directives", []).
        directive("uiTime", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    var checkTime, startTime;
                    return startTime = function () {
                        var h, m, s, t, time, today;
                        return today = new Date, h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), m = checkTime(m), s = checkTime(s), time = h + ":" + m + ":" + s, ele.html(time), t = setTimeout(startTime, 500)
                    }, checkTime = function (i) {
                        return 10 > i && (i = "0" + i), i
                    }, startTime()
                }
            }
        }]).
        directive("uiNotCloseOnClick", [function () {
            return {
                restrict: "A", compile: function (ele) {
                    return ele.on("click", function (event) {
                        return event.stopPropagation()
                    })
                }
            }
        }]).
        directive("slimScroll", [function () {
            return {
                restrict: "A", link: function (scope, ele, attrs) {
                    return ele.slimScroll({height: attrs.scrollHeight || "100%"})
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.ui.services", []).
        factory("logger", [function () {
            var logIt;
            return toastr.options = {
                closeButton: !0,
                positionClass: "toast-bottom-right",
                timeOut: "3000"
            }, logIt = function (message, type) {
                return toastr[type](message)
            }, {
                log: function (message) {
                    logIt(message, "info")
                }, logWarning: function (message) {
                    logIt(message, "warning")
                }, logSuccess: function (message) {
                    logIt(message, "success")
                }, logError: function (message) {
                    logIt(message, "error")
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app", ["ngRoute",
        "ngAnimate",
        "ngStorage",
        "ui.bootstrap",
        "easypiechart",
        "ui.tree",
        "ngMap",
        "ngTagsInput",
        "angular-loading-bar",
        "app.controllers",
        "app.directives",
        "app.localization",
        "app.nav",
        "app.ui.ctrls",
        "app.ui.directives",
        "app.ui.services",
        "app.form.validation",
        "app.ui.form.ctrls",
        "app.ui.form.directives",
        "app.tables",
        "app.task"/*,"app.chart.ctrls", "app.chart.directives"*/,
        "app.page.ctrls",
        'app.auth.services',
        'app.auth.controllers',
        'app.auth.directives',
        "app.services",
        'app.wbox']).
        config(["$routeProvider", function ($routeProvider) {
            var routes, setRoutes;
            routes = [":system/index",
                ":system/timeline",
                ":system/masks",
                ":system/documents",
                ":system/documents/edit",
                ":system/documents/view",
                ":system/documents/history",
                ":system/releases",
                ":system/attachments/list",
                ":system/attachments/edit",
                "dashboard",
                "ui/typography",
                "ui/buttons",
                "ui/icons",
                "ui/grids",
                "ui/widgets",
                "ui/components",
                "ui/boxes",
                "ui/timeline",
                "ui/nested-lists",
                "ui/pricing-tables",
                "ui/maps",
                "tables/static",
                "tables/dynamic",
                "tables/responsive",
                "forms/elements",
                "forms/layouts",
                "forms/validation",
                "forms/wizard",
                "charts/charts",
                "charts/flot",
                "charts/chartjs",
                "pages/404",
                "pages/500",
                "pages/blank",
                "pages/forgot-password",
                "pages/invoice",
                "pages/lock-screen",
                "pages/profile",
                "auth/signin",
                "auth/signup",
                "mail/compose",
                "mail/inbox",
                "mail/single",
                "tasks/tasks"];

            setRoutes = function (route) {
                var config, url;
                url = "/" + route;
                config = {
                    templateUrl: function (params) {
                        var splited = route.split(":system");
                        if (params.system === undefined) {
                            return "/assets/templates/" + route + ".html";
                        } else if (params.id !== undefined) {
                            var idRoute = _.first(splited[splited.length - 1].split("/:id"));
                            return "/assets/templates/" + params.system + idRoute + ".html";
                        } else {
                            return "/assets/templates/" + params.system + splited[splited.length - 1] + ".html";
                        }
                    }
                    , controller: "RouteCtrl"
                };
                $routeProvider.when(url, config);
                return $routeProvider;
            };
            routes.forEach(function (route) {
                return setRoutes(route)
            });
            return $routeProvider.
                when("/", {redirectTo: "/console/index"}).
                when("/404", {templateUrl: "/assets/templates/nFound.html"}).
                otherwise({redirectTo: "/404"})
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.nav", []).
        directive("toggleNavCollapsedMin", ["$rootScope", function ($rootScope) {
            return {
                restrict: "A", link: function (scope, ele) {
                    var app;
                    return app = $("#app"), ele.on("click", function (e) {
                        return app.hasClass("nav-collapsed-min") ? app.removeClass("nav-collapsed-min") : (app.addClass("nav-collapsed-min"), $rootScope.$broadcast("nav:reset")), e.preventDefault()
                    })
                }
            }
        }]).
        directive("collapseNav", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
                    return $window = $(window), $lists = ele.find("ul").parent("li"), $lists.append('<i class="ti-angle-down icon-has-ul-h"></i><i class="ti-angle-double-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), $app = $("#app"), $nav = $("#nav-container"), $a.on("click", function (event) {
                        var $parent, $this;
                        return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").stop().slideToggle(), event.preventDefault())
                    }), $aRest.on("click", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), scope.$on("nav:reset", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), Timer = void 0, prevWidth = $window.width(), updateClass = function () {
                        var currentWidth;
                        return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth
                    }, $window.resize(function () {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300)
                    })
                }
            }
        }]).
        directive("highlightActive", [function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$location", function ($scope, $element, $attrs, $location) {
                    var highlightActive, links, path;
                    return links = $element.find("a"), path = function () {
                        return $location.path()
                    }, highlightActive = function (links, path) {
                        return path = "#" + path, angular.forEach(links, function (link) {
                            var $li, $link, href;
                            return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                        })
                    }, highlightActive(links, $location.path()), $scope.$watch(path, function (newVal, oldVal) {
                        return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
                    })
                }]
            }
        }]).
        directive("toggleOffCanvas", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    return ele.on("click", function () {
                        return $("#app").toggleClass("on-canvas")
                    })
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.directives", []).
        directive("imgHolder", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    return Holder.run({images: ele[0]})
                }
            }
        }]).
        directive("customPage", function () {
            return {
                restrict: "A", controller: ["$scope", "$element", "$location", function ($scope, $element, $location) {
                    var addBg, path;
                    return path = function () {
                        return $location.path()
                    }, addBg = function (path) {
                        switch ($element.removeClass("body-wide body-err body-lock body-auth"), path) {
                            case"/404":
                            case"/pages/404":
                            case"/pages/500":
                                return $element.addClass("body-wide body-err");
                            case"/auth/signin":
                            case"/auth/signup":
                            case"/forgot-password":
                                return $element.addClass("body-wide body-auth");
                            case"/lock-screen":
                                return $element.addClass("body-wide body-lock")
                        }
                    }, addBg($location.path()), $scope.$watch(path, function (newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0
                    })
                }]
            }
        }).
        directive("uiColorSwitch", [function () {
            return {
                restrict: "A", link: function (scope, ele) {
                    return ele.find(".color-option").on("click", function (event) {
                        var $this, hrefUrl, style;
                        if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style)hrefUrl = "styles/main.css", $('link[href^="styles/main"]').attr("href", hrefUrl); else {
                            if (!style)return !1;
                            style = "-" + style, hrefUrl = "styles/main" + style + ".css", $('link[href^="styles/main"]').attr("href", hrefUrl)
                        }
                        return event.preventDefault()
                    })
                }
            }
        }]).
        directive("goBack", [function () {
            return {
                restrict: "A", controller: ["$scope", "$element", "$window", function ($scope, $element, $window) {
                    return $element.on("click", function () {
                        return $window.history.back()
                    })
                }]
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.localization", []).
        factory("localize", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
            var localize;
            return localize = {
                language: "", url: void 0, resourceFileLoaded: !1, successCallback: function (data) {
                    return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
                }, setLanguage: function (value) {
                    return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources()
                }, setUrl: function (value) {
                    return localize.url = value, localize.initLocalizedResources()
                }, buildUrl: function () {
                    return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js"
                }, initLocalizedResources: function () {
                    var url;
                    return url = localize.url || localize.buildUrl(), $http({
                        method: "GET",
                        url: url,
                        cache: !1
                    }).success(localize.successCallback).error(function () {
                        return $rootScope.$broadcast("localizeResourcesUpdated")
                    })
                }, getLocalizedString: function (value) {
                    var result, valueLowerCase;
                    return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
                }
            }
        }]).directive("i18n", ["localize", function (localize) {
            var i18nDirective;
            return i18nDirective = {
                restrict: "EA", updateText: function (ele, input, placeholder) {
                    var result;
                    return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
                }, link: function (scope, ele, attrs) {
                    return scope.$on("localizeResourcesUpdated", function () {
                        return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
                    }), attrs.$observe("i18n", function (value) {
                        return i18nDirective.updateText(ele, value, attrs.placeholder)
                    })
                }
            }
        }]).controller("LangCtrl", ["$scope", "localize", function ($scope, localize) {
            return $scope.lang = "English", $scope.setLang = function (lang) {
                switch (lang) {
                    case"English":
                        localize.setLanguage("EN-US");
                        break;
                    case"Español":
                        localize.setLanguage("ES-ES");
                        break;
                    case"日本語":
                        localize.setLanguage("JA-JP");
                        break;
                    case"中文":
                        localize.setLanguage("ZH-TW");
                        break;
                    case"Deutsch":
                        localize.setLanguage("DE-DE");
                        break;
                    case"français":
                        localize.setLanguage("FR-FR");
                        break;
                    case"Italiano":
                        localize.setLanguage("IT-IT");
                        break;
                    case"Portugal":
                        localize.setLanguage("PT-BR");
                        break;
                    case"Русский язык":
                        localize.setLanguage("RU-RU");
                        break;
                    case"한국어":
                        localize.setLanguage("KO-KR")
                }
                return $scope.lang = lang
            }, $scope.getFlag = function () {
                var lang;
                switch (lang = $scope.lang) {
                    case"English":
                        return "flags-american";
                    case"Español":
                        return "flags-spain";
                    case"日本語":
                        return "flags-japan";
                    case"中文":
                        return "flags-china";
                    case"Deutsch":
                        return "flags-germany";
                    case"français":
                        return "flags-france";
                    case"Italiano":
                        return "flags-italy";
                    case"Portugal":
                        return "flags-portugal";
                    case"Русский язык":
                        return "flags-russia";
                    case"한국어":
                        return "flags-korea"
                }
            }
        }])
}.call(this), function () {
    "use strict";
    angular.module("app.controllers", []).
        controller("RouteCtrl", ["$scope", '$routeParams', '$log', '$rootScope', function ($scope, $routeParams, $log, $rootScope) {
            $log.debug("Init RouteCtrl");
            $scope.$emit("routes", $routeParams);
        }]).
        controller("AppCtrl", ["$scope", "$rootScope", 'auth', function ($scope, $rootScope, auth) {
            console.debug("Init AppCtrl");

            var $window;
            $window = $(window);

            var user = $scope.user = {};

            $scope.$on("routes", function (event, data) {
                if (data !== undefined) {
                    var system = data['system'];
                    $scope.systemAside = '/assets/templates/' + system + "/" + 'nav.html';
                    $scope.main['brand'] = system;
                }
            });

            $scope.$back = function () {
                window.history.back();
            };

            //fixme: Is user non empty object
            //if (angular.isObject(user)) {
            auth.get().then(function (data) {
                $scope.main.user = data.data;
            }, function (reason) {

            });
            //}

            $scope.$on("setUser", function (event, data) {
                $scope.user = data;
            });

            $scope.main = {
                brand: "Console",
                user: {}
            };

            $scope.pageTransitionOpts = [
                {name: "Fade up", "class": "animate-fade-up"},
                {name: "Scale up", "class": "ainmate-scale-up"},
                {name: "Slide in from right", "class": "ainmate-slide-in-right"},
                {name: "Flip Y", "class": "animate-flip-y"}];

            $scope.admin = {
                layout: "wide",
                menu: "vertical",
                fixedHeader: !0,
                fixedSidebar: !0,
                pageTransition: $scope.pageTransitionOpts[0]
            };

            $scope.$watch("admin", function (newVal, oldVal) {
                return "horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void(oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void(newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
            }, !0);

            $scope.color = {
                primary: "#5B90BF",
                success: "#A3BE8C",
                info: "#B48EAD",
                infoAlt: "#AB7967",
                warning: "#EBCB8B",
                danger: "#BF616A",
                gray: "#DCDCDC"
            }

        }]).
        controller("HeaderCtrl", ["$scope", function () {
        }]).
        controller("NavContainerCtrl", ["$scope", function () {
        }]).
        controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function ($scope, taskStorage, filterFilter) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {completed: !1}).length, $scope.$on("taskRemaining:changed", function (event, count) {
                return $scope.taskRemainingCount = count
            })
        }]).
        controller("DashboardCtrl", ["$scope", function () {
        }])
}.call(this);

(function () {
    "use strict";
    angular.module('app.auth.services', []).
        factory('auth', ['$http', '$q', 'logger', function ($http, $q, logger) {
            return {
                "signup": function (email, password, name) {
                    var deffer = $q.defer();
                    $http.post('/signup', {email: email, pass: password}).
                        success(function (data, status, headers, config) {
                            deffer.resolve(data['result'][0]);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "signin": function (email, password) {
                    var deffer = $q.defer();
                    console.log("asdas")
                    $http.post('/signin', {email: email, pass: password}).
                        success(function (data, status, headers, config) {
                            deffer.resolve(data['result'][0]);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "get": function () {
                    var deffer = $q.defer();
                    $http.post('/signin', {email: "artem.ft@gmail.com", pass: "123"}).
                        success(function (data, status, headers, config) {
                            deffer.resolve(data['result'][0]);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("TODO: get user redirect");
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }
            }
        }])
}).call(this);

(function () {
    "use strict";
    angular.module('app.auth.controllers', []).
        controller('AuthCtrl', ['$scope', 'auth', '$location', '$rootScope', function ($scope, auth, $location, $rootScope) {

            var user = $scope.user = {};

            $scope.signup = function () {
                auth.signup(user.email, user.password).then(function (data) {
                    $scope.$emit("setUser", data.data);
                    $location.url("/console/index")
                }, function (reason) {

                })
            };

            $scope.signin = function () {
                auth.signin(user.email, user.password).then(function (data) {
                    $scope.$emit("setUser", data.data);
                    $location.url("/console/index")
                }, function (reason) {

                })
            };

        }])
}).call(this);

(function () {
    "use strict";
    angular.module('app.services', []).
        factory('cookie', function () {

            function set(name, value, props) {
                props = props || {};
                var exp = props.expires;
                if (typeof exp == "number" && exp) {
                    var d = new Date();
                    d.setTime(d.getTime() + exp * 1000);
                    exp = props.expires = d;
                }
                if (exp && exp.toUTCString) {
                    props.expires = exp.toUTCString()
                }
                value = encodeURIComponent(value);
                var updatedCookie = name + "=" + value;
                for (var propName in props) {
                    updatedCookie += "; " + propName;
                    var propValue = props[propName];
                    if (propValue !== true) {
                        updatedCookie += "=" + propValue
                    }
                }
                document.cookie = updatedCookie
            };

            return {
                "get": function getCookie(name) {
                    var matches = document.cookie.match(new RegExp(
                        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
                    ));
                    return matches ? decodeURIComponent(matches[1]) : undefined
                },
                "set": function (name, value, props) {
                    set(name, value, props)
                },
                "del": function (name) {
                    set(name, null, {expires: -1})
                }
            };
        })
}).call(this);

(function () {
    "use strict";
    angular.module('app.auth.directives', []).
        directive('sign', ['cookie', '$location', function (cookie, $location) {
            var authCookie = cookie.get("u_a");
            console.info("Auth cookie is " + authCookie);
            if (authCookie === undefined || authCookie === "") {
                $location.url("/auth/signin")
            }
            return {};
        }])
}).call(this);

(function () {
    angular.module('app.wbox', ['app.wbox.services', 'app.wbox.controllers', 'textAngular', 'app.wbox.directives', 'app.wbox.filters', 'diff', 'angularFileUpload', 'ngImageEditor'])
}).call(this);

(function () {
    "use strict";
    angular.module('app.wbox.directives', []).
        directive("fixedScroll", function ($window) {
            return function (scope, element, attrs) {
                angular.element($window).bind("scroll", function () {
                    var windowScrollTol = this.pageYOffset,
                        clazz = attrs['fixedScroll'],
                        $element = jQuery(element).children(".ta-toolbar"),
                        elementOffset,
                        elementHeight = $element.height();
                    if ($element.hasClass(clazz)) {
                        elementOffset = $element.data("top")
                    } else {
                        elementOffset = $element.offset().top;
                    }
                    if (windowScrollTol > elementOffset - elementHeight) {
                        if (!$element.hasClass(clazz)) {
                            $element.data("top", elementOffset)
                        }
                        $element.addClass(clazz)
                    } else {
                        $element.removeClass(clazz)
                    }
                    scope.$apply();
                });
            };
        }).
        directive('wboxParam', ['$compile', function ($compile) {
            function link(scope, element, attrs) {
                var heading = '<div class="panel-heading">' + scope.name + '</div>';
                var isView = attrs['view'] !== undefined;
                var input = '';
                if (isView) {
                    if (scope.compared != undefined) {
                        input = '<div ng-bind-html="docHistory.compared.params[' + scope.name + '] | diff: docHistory.document.params[' + scope.name + ']" >' + '</div>';
                    } else {
                        input = '<p>' + scope.type + '</p>';
                    }
                } else {
                    switch (scope.type) {
                        case "String":
                            input = '<input type="text" class="form-control" ng-model="document.params.' + scope.name + '"/>';
                            break;
                        case "Text":
                            input = '<div text-angular ng-model="document.params.' + scope.name + '" fixed-scroll="editor-fixed"></div>';
                            break;
                        case "Number":
                            input = '<input type="number" class="form-control" ng-model="document.params.' + scope.name + '"/>';
                            break;
                        case "Date":
                            input = '<input type="text" class="form-control" ng-model="document.params.' + scope.name + '"/>'; //todo: input date
                            break;
                        default :
                            input = '<input type="text" class="form-control" ng-model="document.params.' + scope.name + '"/>';
                    }
                }
                var tmpl = heading + '<div class="panel-body">' + input + '</div>';
                element.replaceWith($compile(tmpl)(scope));
            };

            return {
                restrict: 'EA',
                //scope: {
                //    'compared': '=view',
                //    'name': '=name',
                //    'type': '=type'
                //},
                link: link,
                replace: true,
                terminal: true,
                priority: 1000
            };
        }]);
}).call(this);

(function () {
    "use strict";
    angular.module('app.wbox.filters', []).
        filter('docList', function () {
            return function (docs) {
                if (docs !== undefined) {
                    console.debug(docs)
                }
                return docs;
            }
        })

}).call(this);

(function () {
    "use strict";
    angular.module('app.wbox.services', []).
        factory('wboxRepo', ['$http', '$q', 'logger', '$localStorage', function ($http, $q, logger, $localStorage) {
            return {
                "list": function () {
                    var deffer = $q.defer();
                    $http.get('/wbox/repositories').
                        success(function (data, status, headers, config) {
                            deffer.resolve(_.filter(data['result'][0].data, function (repo) {
                                return repo.status !== -1;
                            }));
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "gen": function (name, description) {
                    var deffer = $q.defer();
                    $http.post('/wbox/repositories/new', {name: name, description: description}).
                        success(function (data, status, headers, config) {
                            var created = data['result'][0].data;
                            deffer.resolve(created);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "del": function (id) {
                    var deffer = $q.defer();
                    $http.post('/wbox/repositories/delete', {}, {
                        headers: {
                            "X-Repository": id
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var created = data['result'][0].data;
                            deffer.resolve(created);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "update": function (repository) {
                    var deffer = $q.defer();
                    $http.post('/wbox/repositories/update', repository, {
                        headers: {
                            "X-Repository": repository.uuid
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var created = data['result'][0].data;
                            deffer.resolve(created);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError(data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                "select": function (repository) {
                    $localStorage.repository = repository.uuid;
                },
                "get": function () {
                    return $localStorage.repository;
                }
            };
        }]).
        factory('wboxMask', ['$http', '$q', 'logger', 'wboxRepo', function ($http, $q, logger, repo) {
            var repository = repo.get();
            var $mask = {
                "list": function () {
                    var deffer = $q.defer();
                    $http.get('/wbox/masks', {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var masks = _.filter(data['result'][0].data, function (mask) {
                                return mask.status !== -1;
                            });
                            deffer.resolve(masks);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading masks. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, "gen": function (mask) {
                    var deffer = $q.defer();
                    $http.post('/wbox/masks/new', mask, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var masks = _.filter(data['result'][0].data, function (item) {
                                return item.status !== -1;
                            });
                            deffer.resolve(masks);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading masks. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                },
                'byId': function (id) {//todo: write single method
                    var deffer = $q.defer();
                    $mask.list().then(function (masks) {
                        var mask = _.findWhere(masks, {uuid: id});
                        if (mask == undefined) {
                            logger.logError("Error loading masks. Mask not found");
                        }
                        deffer.resolve(mask)
                    }, function (reason) {
                        deffer.reject(reason);
                        logger.logError("Error loading masks. " + reason);
                    });
                    return deffer.promise;
                }, 'filter': function ($query, masks) {
                    var deffer = $q.defer();
                    deffer.resolve(_.map(_.filter(masks, function (item) {
                        return item.name.indexOf($query > -1)
                    }), function (item) {
                        return item;
                    }));
                    return deffer.promise;
                }
            };
            return $mask;
        }]).
        factory('wboxDocs', ['$http', '$q', 'logger', 'wboxRepo', function ($http, $q, logger, $repo) {
            var repository = $repo.get();
            var $docs = {
                'list': function (maskId) {
                    var deffer = $q.defer();
                    $http.get('/wbox/documents?maskId=' + maskId, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var docs = _.filter(data['result'][0].data, function (doc) {
                                return doc.status !== -1;
                            });

                            deffer.resolve(_.map(_.groupBy(docs, 'uuid'), function (value, key) {
                                return _.max(value, function (doc) {
                                    return doc.revision;
                                });
                            }));
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading masks. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'gen': function (doc) {
                    var deffer = $q.defer();
                    $http.post('/wbox/documents/new?maskId=' + doc.mask, doc, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var docs = _.filter(data['result'][0].data, function (doc) {
                                return doc.status !== -1;
                            });
                            deffer.resolve(docs);
                            logger.logSuccess("Successfuly save new document.");
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading masks. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'byId': function (id) { //todo: separated method
                    var deffer = $q.defer();
                    $http.get('/wbox/documents' + id, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var doc = data['result'][0].data;
                            if (doc === undefined || doc === null) {
                                logger.logError("Error loading document. Document is null");
                                deffer.reject(data);
                            } else {
                                deffer.resolve(doc);
                            }
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading document." + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'del': function (doc) {
                    var deffer = $q.defer();
                    $http.post('/wbox/documents/delete?uuid=' + doc.uuid, {}, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var docs = _.filter(data['result'][0].data, function (doc) {
                                return doc.status !== -1;
                            });
                            deffer.resolve(docs);
                            logger.logSuccess("Successfuly deleted document.");
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error Deleting document." + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'update': function (doc) {
                    var deffer = $q.defer();
                    $http.post('/wbox/documents/update?uuid=' + doc.uuid, doc, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            //var docs = _.filter(data['result'][0].data, function (doc) {
                            //    return doc.status !== -1;
                            //});
                            deffer.resolve(data['result'][0].data);
                            logger.logSuccess("Successfuly updated document.");
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error Updating document." + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'publish': function (doc, isPub) {
                    var now = new Date().getTime();
                    if (isPub) {
                        doc.pd = now;
                        doc.upd = now + 31536000000;
                    } else {
                        doc.upd = now;
                    }
                    return $docs.update(doc)
                }, 'history': function (id) {
                    var deffer = $q.defer();
                    $http.get('/wbox/documents/history' + id, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var docs = _.filter(data['result'][0].data, function (doc) {
                                return doc.status !== -1;
                            });
                            deffer.resolve(docs);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error getting documents." + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }
            };
            return $docs;
        }]).
        factory('wboxAttch', ['$http', '$q', 'logger', 'wboxRepo', function ($http, $q, logger, $repo) {
            var repository = $repo.get();
            var $att = {
                'list': function () {
                    var deffer = $q.defer();
                    $http.get('/wbox/att', {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            var attch = _.filter(data['result'][0].data, function (item) {
                                return item.status !== -1;
                            });
                            deffer.resolve(attch);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error loading attachments. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'put': function (fileItem, uploader) {
                    var deffer = $q.defer();
                    fileItem['url'] = '/putfile' + 'wbox';
                    fileItem['headers'] = {
                        "X-Repository": repository + ""
                    };
                    if (fileItem.file['type'].indexOf('image') !== -1) {
                        deffer.resolve({
                            isImage: true
                        });
                        console.error("Upload images not implemented yet;");
                    } else {
                        uploader.onCompleteItem = function (fileItem, response, status, headers) {
                            deffer.resolve({
                                fileUrl: response['result'][0].data['url'],
                                isImage: false
                            })
                        };
                        fileItem.upload();
                    }
                    return deffer.promise;
                }, 'gen': function (attach) {
                    if (attach['id'] !== undefined) {
                        return $att.update(attach)
                    } else {
                        if (attach['entity'] === undefined) {
                            attach['entity'] = repository;
                        }
                        var deffer = $q.defer();
                        $http.post('/wbox/att/new', attach, {
                            headers: {
                                "X-Repository": repository + ""
                            }
                        }).
                            success(function (data, status, headers, config) {
                                deffer.resolve(data['result'][0].data);
                            }).
                            error(function (data, status, headers, config) {
                                logger.logError("Error saving new attachment. " + data['result'][2].message);
                                deffer.reject(data);
                            });
                        return deffer.promise;
                    }
                }, 'byId': function (id) {
                    return $att.list().then(function (atts) {
                        return _.findWhere(atts, {uuid: id})
                    })
                }, 'update': function (attach) {
                    var deffer = $q.defer();
                    $http.post('/wbox/att/update', attach, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            deffer.resolve(data['result'][0].data);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error saving new attachment. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }, 'del': function (attach) {
                    var deffer = $q.defer();
                    $http.post('/wbox/att/del' + attach['uuid'], {}, {
                        headers: {
                            "X-Repository": repository + ""
                        }
                    }).
                        success(function (data, status, headers, config) {
                            deffer.resolve(data['result'][0].data);
                        }).
                        error(function (data, status, headers, config) {
                            logger.logError("Error saving new attachment. " + data['result'][2].message);
                            deffer.reject(data);
                        });
                    return deffer.promise;
                }
            };
            return $att;
        }]);
}).call(this);

(function () {
    "use strict";
    angular.module('app.wbox.controllers', []).
        controller('WboxRepoCtrl', ['$scope', 'wboxRepo', '$location', function ($scope, repo, $location) {

            $scope.repositories = [];

            $scope.isFormOpen = false;

            $scope.newRepo = {};

            $scope.selected = repo.get();

            repo.list().then(function (data) {
                $scope.repositories = data;
            }, function (reaseon) {

            });

            $scope.toggleForm = function () {
                $scope.isFormOpen = !$scope.isFormOpen;
                if (!$scope.isFormOpen) {
                    $scope.newRepo = {};
                }
            };

            $scope.gen = function () {
                var r = $scope.newRepo;
                if (r.uuid != undefined) {
                    repo.update(r).then(function (repo) {
                        $scope.toggleForm();
                    }, function (reason) {

                    })
                } else {
                    repo.gen(r.name, r.description).then(function (repo) {
                        $scope.repositories.push(repo);
                        $scope.toggleForm();
                    }, function (reason) {

                    })
                }
            };

            $scope.del = function (repository) {
                repo.del(repository.uuid).then(function (repo) {
                    //todo: remove from scope array
                }, function (reason) {

                })
            };

            $scope.edit = function (repository) {
                $scope.isFormOpen = true;
                $scope.newRepo = repository;
            };

            $scope.select = function (repository) {
                repo.select(repository);
                $location.url("/wbox/timeline")
            };

            console.debug("Repository is storage " + $scope.selected);

            if ($scope.selected !== undefined && $location.url().indexOf("/wbox/index") === -1) {
                $location.url("/wbox/timeline")
            }

        }]).
        controller("WboxMaskCtrl", ["$scope", 'wboxMask', function ($scope, $mask) {
            $scope.isFormOpen = false;

            var emptyMsk = function emptyMsk() {
                $scope.newMsk = {
                    fields: [{
                        name: "",
                        type: "String"
                    }]
                };
            };
            emptyMsk();

            $scope.addField = function () {
                $scope.newMsk.fields.push({
                    name: "",
                    type: "String"
                })
            };

            $scope.popField = function (field) {
                $scope.newMsk.fields = _.without($scope.newMsk.fields, field);
            };

            $scope.gen = function () {
                var mask = $scope.newMsk;
                var params = {};
                _.each(mask.fields, function (field) {
                    params[field['name']] = field['type'];
                });
                mask.params = params;
                $mask.gen(mask).then(function (masks) {
                    $scope.masks = _.union($scope.masks, masks);
                    $scope.toggleForm();
                }, function (reason) {

                })
            };

            $mask.list().then(function (data) {
                $scope.masks = data;
                if ($scope.masks.length === 0) {
                    $scope.toggleForm();
                }
            }, function (reason) {

            });

            $scope.selected = "";

            $scope.toggleForm = function () {
                $scope.isFormOpen = !$scope.isFormOpen;
                if (!$scope.isFormOpen) {
                    emptyMsk();
                }
            };
        }]).
        controller('WboxDocsCtrl', ['$scope', '$location', 'wboxMask', 'wboxDocs', function ($scope, $location, $masks, $docs) {

            $docs.list('dsggr9g2rpch6kk9mgniveamha').then(function (docs) {//todo: nedd all docs list withut masks
                $scope.documents = docs;
            }, function (reason) {

            });

            $scope.filter = {};

            $masks.list().then(function (masks) {
                $scope.masks = masks;
            }, function () {

            });

            $scope.isPublish = function (doc) {
                var now = new Date().getTime();
                return (doc.publishDate <= now && doc.unpublishDate > now)
            };

            $scope.publish = function (doc, isPub) {
                $docs.publish(doc, isPub).then(function (data) {
                    doc.publishDate = data.publishDate;
                    doc.unpublishDate = data.unpublishDate;
                }, function (reason) {

                })
            };

            $scope.newDoc = function (mask) {
                $location.url("/wbox/documents/edit?mask=" + mask.uuid)
            };

            $scope.edit = function (doc, $event) {
                $location.url("/wbox/documents/edit?id=" + doc.uuid + "&mask=" + doc.mask)
            };

            this.view = function (doc, $event) {
                $location.url("/wbox/documents/view?id=" + doc.uuid)
            };

            this.f = function (doc) {
                var result;
                if ($scope.filter['name'] === '' || $scope.filter['name'] === undefined) {
                    result = doc;
                } else {
                    if (doc.name.indexOf($scope.filter['name']) > -1) {
                        result = doc;
                    } else {
                        result = null;
                    }
                }

                var masks = _.map($scope.filter['mask'], function (msk) {
                    return msk['uuid'];
                });
                if (masks.length > 0) {
                    if (_.contains(masks, doc.mask)) {
                        result = doc;
                    } else {
                        result = null;
                    }

                } else {
                    result = doc;
                }

                return result;
            };

            this.maskQuery = function ($query) {
                return $masks.filter($query, $scope.masks);
            };

        }]).
        controller("WboxDocEdit", ['$scope', '$location', 'wboxMask', 'wboxDocs', function ($scope, $location, $mask, $docs) {
            var id = $location.search()['id'], maskId = $location.search()['mask'];

            $scope.document = {};

            function getMask(id) {
                $mask.byId(id).then(function (data) {
                    $scope.mask = data;
                    if ($scope.document.uuid === undefined) {
                        $scope.document.mask = $scope.mask.uuid;
                    }
                }, function (reason) {
                    //todo: reason rejected
                });
            }

            if (id == undefined) {
                $scope.isEdit = false;
                getMask(maskId)
            } else {
                $docs.byId(id).then(function (doc) {
                    $scope.document = doc;
                    getMask(doc.mask);
                }, function (reason) {
                    //todo: reason rejected
                });
                $scope.isEdit = true;
            }

            $scope.gen = function () {
                $scope.document.tags = _.map($scope.document.tags, function (tag) {
                    return tag['text'];
                });
                if ($scope.document.publishDate != 0) {
                    $scope.document.pd = new Date($scope.document.publishDate).getTime();
                }
                if ($scope.document.unpublishDate != 0) {
                    $scope.document.upd = new Date($scope.document.unpublishDate).getTime();
                }
                if ($scope.isEdit) {
                    $docs.update($scope.document).then(function () {

                    }, function () {

                    })
                } else {
                    $docs.gen($scope.document).then(function (docs) {
                        if (docs.length != 0) {
                            $location.url("/wbox/documents")
                        }
                    }, function (reason) {

                    })
                }
            };

            $scope.del = function () {
                $docs.del($scope.document).then(function () {
                    $scope['$back'].call(this);
                }, function () {

                })
            };

            $scope.uploadFile = function () {
                $location.url("/wbox/attachments/edit?entity=" + $scope.document['uuid'])
            };

            $scope.pd = {
                opened: false
            };

            $scope.upd = {
                opened: false
            };

            $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.dt = null;
            };

            // Disable weekend selection
            $scope.disabled = function (date, mode) {
                return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
            };

            $scope.toggleMin = function () {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
            $scope.toggleMin();

            $scope.openPd = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.pd.opened = true;
            };

            $scope.openUpd = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.upd.opened = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];

        }]).
        controller("WboxDocView", ['$scope', '$location', 'wboxDocs', function ($scope, $location, $docs) {
            var id = $location.search()['id'];

            $docs.byId(id).then(function (doc) {
                $scope.document = doc;
            }, function (reason) {

            });

            $scope.back = function () {
                $scope['$back'].call(this);
            };

            $scope.edit = function ($event) {
                $location.url("/wbox/documents/edit?id=" + $scope.document.uuid)
            };

            $scope.history = function ($event) {
                $location.url("/wbox/documents/history?id=" + $scope.document.uuid);
            }

        }]).
        controller("WboxDocHistory", ['$scope', '$location', 'wboxDocs', function ($scope, $location, $docs) {
            var id = $location.search()['id'], $this = this;

            $docs.history(id).then(function (docs) {
                $this.documents = docs;
                $this.document = _.max(docs, function (doc) {
                    return doc['revision']
                });
                $this.compared = _.findWhere(docs, {'revision': $this.document['revision']})
            }, function (reason) {

            });

            this.setDoc = function (doc) {
                $this.compared = doc;
            }

        }]).
        controller('WboxAttchCtrl', ['$scope', '$location', 'wboxAttch', function ($scope, $location, $attch) {
            var $this = this;

            $attch.list().then(function (atts) {
                $this.attachments = atts
            });

            this.edit = function (att) {
                $location.url("/wbox/attachments/edit?id=" + att.uuid)
            };

            this.newAttch = function () {
                $location.url("/wbox/attachments/edit")
            }
        }])
        .controller('WboxAttchEditCtrl', ['$scope', '$location', 'wboxAttch', 'FileUploader', function ($scope, $location, $attch, FileUploader) {
            var $this = this, id = $location.search()['id'], entity = $location.search()['entity'];

            $this.uploader = new FileUploader({});

            id == undefined ? $this.isEdit = false : $this.isEdit = true;

            if ($this.isEdit) {
                $attch.byId(id).then(function (att) {
                    $this.attach = att;
                })
            } else {
                $this.attach = {};
                if (entity !== undefined) {
                    $this.attach['entity'] = entity;
                }
            }

            //$this.fileUrl = 'https://s3.eu-central-1.amazonaws.com/business-framework/wbox/5j3fesi1ggqodbhs5v85e79trv.jpg';

            $this.uploader.onAfterAddingFile = function (fileItem) {
                $('.another-file-over-class').removeClass('another-file-over-class')
                $this.file = fileItem.file;
                $attch.put(fileItem, $this.uploader).then(function (response) {
                    $this.isImage = response['isImage'];
                    $this.attach.url = response['fileUrl'];
                });
            };

            $this.gen = function () {
                $attch.gen($this.attach).then(function (att) {
                    if (!$this.isEdit && entity !== undefined) {
                        $location.url("/wbox/documents/edit?id=" + att['entity'] + "&cache=true")
                    } else {
                        $location.url("/wbox/attachments/list")
                    }
                })
            };

            $this.del = function () {
                $attch.del($this.attach).then(function (data) {
                    $location.url("/wbox/attachments/list")
                })
            };

            /*$scope.$watch('attEditCtrl.fileUrl', function (url) {
             if (url != undefined) {
             Caman("#image-edit", function () {
             // manipulate image here
             this.render(function () {
             $this.resultImageData = this.canvas.toDataURL()
             });
             });
             }
             });*/

            $scope.enabledResizeSelector = true;

            var clear = $scope.$watch('imageEditor', function (imageEditor) {
                if (imageEditor) {
                    clear();
                    $scope.enabled = true;
                }
            });

            $scope.capture = function () {
                $scope.selectedBlock = $scope.imageEditor.toDataURL();
            };

            $scope.onImageChange = function () {
                console.log('img change');
            }

        }]);
}).call(this);