var chartData = [];

function drawChart() {

    var data = google.visualization.arrayToDataTable(chartData);
    var options = {
        height: 600,
        vAxis: { minValue: 0 },
        explorer: { actions: ['dragToPan'], axis: 'horizontal' },
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
        let date = new Date(i.date)
        chartData.push([
            date,
            i.duration,
            `${i.duration} <br> ${(i.error)?i.error+'<br>':''}<img class='tooltipImage' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/GNOME_Screenshot_icon_2018.svg/1200px-GNOME_Screenshot_icon_2018.svg.png'>`,
            `color: ${(i.error) ? '#e02020' : (i.duration > 1500) ? '#cccc22' : '#66cc22'}`,
        ]);
    }
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}