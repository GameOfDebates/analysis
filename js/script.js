function getDuration(minutes, seconds) {
    return minutes + (seconds / 60);
}

function transformData(data) {
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

function drawTalkingTimesRep() {
    var svg = dimple.newSvg('#talkingTime', 1200, 500);
    d3.json('data/talkingtimes-rep.json', function(result) {
        var data = transformData(result.data);
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis('x', ['date', 'candidate', 'moderator']);
        chart.addMeasureAxis('y', 'talkingTime');
        var candidateSeries = chart.addSeries('candidate', dimple.plot.bar);
        var moderatorSeries = chart.addSeries('moderator');
        var candidateLegend = chart.addLegend(65, 10, 510, 50, 'right', candidateSeries);
        var moderatorLegend = chart.addLegend(600, 10, 510, 50, 'right', moderatorSeries);
        chart.draw();

        //var candidateFilters = dimple.getUniqueValues(data, 'candidate');
        var moderatorFilters = dimple.getUniqueValues(data, 'moderator');
        chart.legends = [candidateLegend];
        /*candidateLegend.shapes.selectAll('rect')
            .on('click', function (e) {
                var hide = false;
                var newFilters = [];
                candidateFilters.forEach(function (f) {
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
                candidateFilters = newFilters;
                chart.data = dimple.filterData(data, 'candidate', candidateFilters);
                chart.draw(800);
            });*/
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

drawTalkingTimesRep();

function drawTalkingTimesDem() {
    var svg = dimple.newSvg('#talkingTime', 1200, 500);
    d3.json('data/talkingtimes-dem.json', function(result) {
        var data = transformData(result.data);
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis('x', ['date', 'candidate', 'moderator']);
        chart.addMeasureAxis('y', 'talkingTime');
        var candidateSeries = chart.addSeries('candidate', dimple.plot.bar);
        var moderatorSeries = chart.addSeries('moderator');
        var candidateLegend = chart.addLegend(65, 10, 510, 50, 'right', candidateSeries);
        var moderatorLegend = chart.addLegend(600, 10, 510, 50, 'right', moderatorSeries);
        chart.draw();

        //var candidateFilters = dimple.getUniqueValues(data, 'candidate');
        var moderatorFilters = dimple.getUniqueValues(data, 'moderator');
        chart.legends = [candidateLegend];
        /*candidateLegend.shapes.selectAll('rect')
            .on('click', function (e) {
                var hide = false;
                var newFilters = [];
                candidateFilters.forEach(function (f) {
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
                candidateFilters = newFilters;
                chart.data = dimple.filterData(data, 'candidate', candidateFilters);
                chart.draw(800);
            });*/
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

drawTalkingTimesDem();