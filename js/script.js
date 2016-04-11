function getDuration(minutes, seconds) {
    return minutes + (seconds / 60);
}

function transformTalkingTimesData(data) {
    var transformed = [];
    var currentCandidates = ["Donald Trump", "John Kasich", "Ted Cruz", "Hillary Clinton", "Bernie Sanders"];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].candidates.length; j++) {
            if (currentCandidates.indexOf(data[i].candidates[j].name) >= 0) {
                var obj = {};
                obj.date = data[i].date;
                obj.numCandidates = data[i].numCandidates;
                obj.duration = data[i].duration;
                obj.moderator = data[i].moderator;
                obj.candidate = data[i].candidates[j].name;
                obj.talkingTime = getDuration(data[i].candidates[j].minutes, data[i].candidates[j].seconds);
                transformed.push(obj);
            }
        }
    }
    return transformed;
}

function drawTalkingTimes(jsonfile) {
    var svg = dimple.newSvg('#talkingTime', 1000, 500);
    d3.json(jsonfile, function(result) {
        var data = transformTalkingTimesData(result.data);
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis('x', ['date', 'candidate', 'moderator']);
        chart.addMeasureAxis('y', 'talkingTime');
        var candidateSeries = chart.addSeries('candidate', dimple.plot.bar);
        var moderatorSeries = chart.addSeries('moderator');
        var candidateLegend = chart.addLegend(100, 10, 300, 50, 'right', candidateSeries);
        var moderatorLegend = chart.addLegend(500, 10, 300, 50, 'right', moderatorSeries);
        chart.draw();

        var moderatorFilters = dimple.getUniqueValues(data, 'moderator');
        chart.legends = [candidateLegend];
        moderatorLegend.shapes.selectAll('rect')
        .on('click', function(e) {
            var newFilters = [];
            var hide = false;
            moderatorFilters.forEach(function (f) {
                if (f === e.aggField.slice(-1)[0]) {
                    hide = true;
                } else {
                    newFilters.push(f);
                }
            });
            if (hide) {
                d3.select(this).style('opacity', 0.2);
            } else {
                newFilters.push(e.aggField.slice(-1)[0]);
                d3.select(this).style('opacity', 0.8);
            }
            moderatorFilters = newFilters;
            chart.data = dimple.filterData(data, 'moderator', moderatorFilters);
            chart.draw(800);
        });
    });
}

function normalizeScore(score) {
    return (score + 1) / 2;
}

function transformTopicsData(data) {

}

function drawSentimentAnalysis(jsonfile) {
    var svg = dimple.newSvg('#topics', 1000, 500);
    d3.json(jsonfile, function(result) {
        
    });
}

$(document).ready(function() {
    drawTalkingTimes('data/talkingtimes-rep.json');
    drawTalkingTimes('data/talkingtimes-dem.json');
    drawSentimentAnalysis('data/sentiments/rep_overall.json');
    drawSentimentAnalysis('data/sentiments/dem_overall.json');
});