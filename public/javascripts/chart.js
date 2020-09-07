var chartData = [];
var maxdate = null;
var maxvalue = null;

function drawChart() {
    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        height: 600,
        vAxis: {
            minValue: 0,
            viewWindow: {
                min: 0,
                max: Math.ceil(maxvalue / 1000) * 1000,
            },
        },
        hAxis: {
            viewWindow: {
                min: new Date(maxdate - 41000000),
                max: new Date(maxdate + 1500000),
            },
            format: 'HH:mm'
        },
        explorer: {
            actions: ['dragToPan', 'rightClickToReset'],
            axis: 'horizontal',
        },
        focusTarget: 'category',
        tooltip: { isHtml: true }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
function main(data) {
    chartData.push([
        { label: 'Date', type: 'date' },
        { label: 'Timing', type: 'number' },
        { type: 'string', role: 'tooltip', 'p': { 'html': true } },
        { role: 'style' }
    ]);
    for (let i of data) {
        let date = new Date(i.date);
        if (date.getTime() > maxdate) {
            maxdate = date.getTime();
        }
        if (i.duration > maxvalue) {
            maxvalue = i.duration;
        }
        chartData.push([
            date,
            i.duration,
            `${i.duration} <br> ${(i.error) ? i.error + '<br>' : ''}<img class='tooltipImage' src = '${i.imagePath}'>`,
            `color: ${(i.error) ? '#e02020' : (i.duration > 1500) ? '#cccc22' : '#66cc22'}`,
        ]);
    }
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}