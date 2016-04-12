var currentDemDate = "1/17/2016";
var currentRepDate = "10/28/2015";

var top_words = {
    "11/14/2015": {
        "terrorism": [
            "world",
            "ISIS",
            "American",
            "intelligence"
        ],
        "Young Voters": [
            "believe",
            "young",
            "percents",
            "today",
            "activism"
        ],
        "Gun Control": [
            "country",
            "gun",
            "nation",
            "attacked"
        ]
    },
    "2/11/2016": {
        "Private Prison Lobbies": [
            "incarceration",
            "rate",
            "dollars",
            "african",
            "PAC",
            "country",
            "jail",
            "Clinton"
        ],
        "Pharmaceutical companies": [
            "Companies",
            "insurance",
            "wall street",
            "drugs"
        ],
        "Foreign Policy": [
            "Henry Kissinger",
            "Sanders",
            "secretary"
        ]
    },
    "3/10/2016": {
        "Climate Change": [
            "scientific",
            "climate",
            "reality",
            "Florida"
        ],
        "Budget": [
            "bipartisan",
            "government",
            "budget"
        ],
        "Cuban embargo": [
            "Cuba",
            "states",
            "United",
            "bad"
        ]
    },
    "8/6/2015": {
        "Wars": [
            "decade",
            "Assad",
            "Iran"
        ],
        "Budget or Tax Policy": [
            "budget",
            "jobs",
            "taxes",
            "tax"
        ],
        "Abortion": [
            "people",
            "pro",
            "abortion",
            "law",
            "social",
            "illegal"
        ]
    },
    "3/3/2016": {
        "Trade Policy": [
            "trade",
            "country",
            "money",
            "world"
        ],
        "RNC": [
            "Rubio",
            "back",
            "nominee",
            "support",
            "Cleveland"
        ],
        "Trump's victory": [
            "beat",
            "poll",
            "Trump",
            "Florida"
        ]
    },
    "11/10/2015": {
        "Trade Policy": [
            "job",
            "deal",
            "trade",
            "bigger",
            "Washington",
            "business",
            "government",
            "countries",
            "growth"
        ],
        "Military ": [
            "chief",
            "military",
            "important",
            "great"
        ],
        "Foreign Approval": [
            "world",
            "nation",
            "think",
            "America",
            "power",
            "out",
            "Democrats"
        ]
    },
    "2/13/2016": {
        "Supreme Court": [
            "Scalia",
            "Constitution",
            "States",
            "United",
            "Obama"
        ],
        "Mudslinging": [
            "Trump",
            "Bush",
            "Florida",
            "down",
            "Ben",
            "liar"
        ],
        "Healthcare": [
            "ObamaCare",
            "problem",
            "poverty",
            "income",
            "working"
        ]
    },
    "12/19/2015": {
        "Higher Education": [
            "education",
            "college",
            "going"
        ],
        "Syrian Refugee Crisis": [
            "Assad",
            "war",
            "Syria"
        ],
        "Tax Policy": [
            "have",
            "more",
            "class",
            "middle",
            "cost",
            "tax"
        ]
    },
    "1/17/2016": {
        "Taxes": [
            "taxes",
            "pay",
            "raise",
            "Street",
            "Wall",
            "class",
            "middle"
        ],
        "Health Care": [
            "drug",
            "health",
            "age",
            "care",
            "hospital"
        ],
        "Economy and Wall Street Regulations": [
            "Frank",
            "wall",
            "Dodd",
            "government"
        ]
    },
    "1/14/2016": {
        "Allegations on Origin of Birth": [
            "Donald",
            "Cruz",
            "disqualified",
            "president"
        ],
        "Gun Control": [
            "ISIS",
            "amendment",
            "second",
            "serious",
            "American"
        ],
        "Tax Policy": [
            "flat",
            "percent",
            "pay",
            "business",
            "money",
            "taxes"
        ]
    },
    "12/15/2015": {
        "Military": [
            "air",
            "security",
            "ground",
            "military",
            "destroy",
            "world"
        ],
        "Terrorism": [
            "ISIS",
            "Barack",
            "Gaddafi",
            "Assad",
            "administration",
            "reckless"
        ],
        "Immigration": [
            "security",
            "border",
            "refugees",
            "immigration",
            "immigrants"
        ]
    },
    "3/6/2016": {
        "Flint Water Crisis": [
            "Flint",
            "Michigan",
            "money",
            "Detroit"
        ],
        "2008 economic crisis": [
            "jobs",
            "bank",
            "people",
            "teachers",
            "corporate",
            "American",
            "Detroit"
        ],
        "Corporate Bailout": [
            "Auto",
            "bailout",
            "industry",
            "Obama",
            "billion",
            "economy"
        ]
    },
    "2/6/2016": {
        "Hilary Clinton": [
            "woman",
            "president",
            "job"
        ],
        "Emininent domain": [
            "domain",
            "eminent"
        ],
        "Executive Orders": [
            "states",
            "issue",
            "government",
            "executive",
            "power"
        ]
    },
    "3/9/2016": {
        "Immigration": [
            "Comprehensive",
            "immigration",
            "reform",
            "children",
            "families"
        ],
        "Climate Change": [
            "fossil",
            "fuel",
            "industry",
            "act",
            "change"
        ],
        "Foreign Approval": [
            "percent",
            "support",
            "government",
            "world",
            "country",
            "Obama"
        ]
    },
    "1/28/2016": {
        "Civil Liberties": [
            "federal",
            "Muslims",
            "record",
            "state",
            "radical",
            "group",
            "leader",
            "ISIS"
        ],
        "Mudslinging": [
            "Clinton",
            "military",
            "America",
            "defeat",
            "Obama"
        ],
        "Immigration ": [
            "amnesty",
            "law",
            "legalization"
        ]
    },
    "10/13/2015": {
        "Wars": [
            "years",
            "Iraq",
            "justice",
            "war",
            "veterans",
            "Vietnam",
            "marine",
            "Iran"
        ],
        "jobs": [
            "jobs",
            "class",
            "millions",
            "america",
            "middle"
        ],
        "Gun Control": [
            "American",
            "Senator",
            "gun",
            "lives"
        ]
    },
    "2/4/2016": {
        "Foreign Policy": [
            "war",
            "Russia"
        ],
        "Campaign Finance": [],
        " Goldman Sachs campaign Hilary Clinton": []
    },
    "10/28/2015": {
        "Laissez-faire economy": [
            "money",
            "big",
            "business",
            "good",
            "government"
        ],
        "Social Security": [
            "money",
            "more",
            "Washington",
            "social",
            "security",
            "problem",
            "federal"
        ],
        "Jobs": [
            "jobs",
            "trillion",
            "taxes"
        ]
    },
    "2/25/2016": {
        "Foreign Policy": [
            "John",
            "Kerry",
            "state",
            "Obama",
            "fight",
            "policy",
            "foreign",
            "disaster"
        ],
        "Immigration": [
            "Hispanic",
            "people",
            "Puerto",
            "Rico"
        ],
        "North Korean Foreign Policy": [
            "north",
            "Korea",
            "regime",
            "badly",
            "change"
        ]
    },
    "9/16/2015": {
        "Planned Parenthood": [
            "planned",
            "parenthood",
            "medical",
            "against"
        ],
        "Iran Nuclear Deal": [
            "nuclear",
            "deal",
            "Iran",
            "Obama"
        ],
        "Ronald Reagan": [
            "Reagan",
            "Ronald",
            "nation",
            "strong",
            "liberty"
        ]
    }
};

function getDate(date) {
    return moment(date).format("MMM D YYYY");
}

function getTotalTime(array) {
    var totalMinutes = 0;
    var totalSeconds = 0;
    for (var i = 0; i < array.length; i++) {
        totalMinutes += array[i].minutes;
        totalSeconds += array[i].seconds;
    }
    return totalMinutes + (totalSeconds / 60);
}

function getDuration(minutes, seconds, totalTime) {
    var absoluteTime = minutes + (seconds / 60);
    return absoluteTime / totalTime;
}

function writeCandidateNumbers(id, debate, numCandidates) {
    $(id).append('<tr><td>' + debate + '</td><td>' + numCandidates + '</td></tr>');
}

function transformTalkingTimesData(data) {
    var transformed = [];
    var currentCandidates = ["Donald Trump", "John Kasich", "Ted Cruz", "Hillary Clinton", "Bernie Sanders"];
    for (var i = 0; i < data.length; i++) {
        var totalTalkingTime = getTotalTime(data[i].candidates);
        writeCandidateNumbers('#numCandidates' + data[i].party, data[i].date, data[i].numCandidates);
        for (var j = 0; j < data[i].candidates.length; j++) {
            if (currentCandidates.indexOf(data[i].candidates[j].name) >= 0) {
                var obj = {};
                obj.date = getDate(data[i].date);
                obj.numCandidates = data[i].numCandidates;
                obj.duration = data[i].duration;
                obj.moderator = data[i].moderator;
                obj.candidate = data[i].candidates[j].name;
                obj.talkingTime = getDuration(data[i].candidates[j].minutes, data[i].candidates[j].seconds, totalTalkingTime);
                transformed.push(obj);
            }
        }
    }
    return transformed;
}

function drawTalkingTimes(jsonfile, svgId) {
    var svg = dimple.newSvg(svgId, 1000, 500);
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

function transformOverallData(data) {
    var transformed = [];
    for (var i = 0; i < data.length; i++) {
        for (var id in data[i]) {
            if (id !== 'date' && id !== 'src' && id !== 'party') {
                var op = {};
                op.candidate = id;
                var date = getDate(data[i].date);
                op.date = date;
                var scoreP = normalizeScore(data[i][id].score);
                op.score = scoreP;
                op.classification = data[i][id].classification;
                op.t = 'pos';
                transformed.push(op);
                var on = {};
                on.candidate = id;
                on.date = date;
                on.score = 1 - scoreP;
                on.classification = data[i][id].classification;
                on.t = 'neg';
                transformed.push(on);
            }
        }
    }
    return transformed;
}

function drawSentimentAnalysis(jsonfile, svgId, isV1) {
    var svg = dimple.newSvg(svgId, 650, 600);
    d3.json(jsonfile, function(result) {
        var data = transformOverallData(result);
        var chart = new dimple.chart(svg, data);
        if (isV1)
            chart.addCategoryAxis('x', ['candidate', 'date']);
        else
            chart.addCategoryAxis('x', ['date', 'candidate']);
        chart.addMeasureAxis('y', 'score');
        chart.addSeries('candidate', dimple.plot.bar);
        chart.addSeries('t', dimple.plot.bar);
        chart.addLegend(0, 10, 380, 20, 'right');
        chart.draw();
    });
}

function transformTopicData(data, date) {
    var transformed = [];
    var needToAdd = ($('#debateDates' + data[0].party).children('button').length <= 0);
    for (var i = 0; i < data.length; i++) {
        if (needToAdd)
            addOptionsToDates("#debateDates" + data[i].party, data[i].date, (data[i].party == "Democrat"));
        for (var topic in data[i]) {
            if (topic !== 'date' && topic !== 'party' && topic !== 'src' && date === data[i].date) {
                for (var candidate in data[i][topic]) {
                    var objP = {};
                    objP.topic = topic;
                    objP.candidate = candidate;
                    objP.classification = data[i][topic][candidate].classification;
                    var d = getDate(data[i].date);
                    objP.date = d;
                    objP.dateN = data[i].date;
                    objP.score = normalizeScore(data[i][topic][candidate].score);
                    transformed.push(objP);
                }
            }
        }
    }
    return transformed;
}

function addOptionsToDates(id, date, isDem) {
    $(id).append('<button class="btn btn-default">' + date + '</button>');
    $(id + ' button').click(function(event) {
        if (isDem) {
            currentDemDate = event.target.innerHTML;
            drawTopicModelingDem();
        } else {
            currentRepDate = event.target.innerHTML;
            drawTopicModelingRep();
        }
    });
}

function drawTopicsAnalysis(jsonfile, svgId, date) {
    d3.select(svgId).selectAll("svg").remove();
    var svg = dimple.newSvg(svgId, 650, 600);
    d3.json(jsonfile, function(result) {
        var data = transformTopicData(result, date);
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis('x', ['topic', 'candidate']);
        chart.addMeasureAxis('y', 'score');
        chart.addSeries('candidate', dimple.plot.bar);
        chart.addLegend(0, 10, 380, 20, 'right');
        chart.draw();
    });
}

function drawTopicModelingDem() {
    drawTopicsAnalysis('data/targeted sentiments/dem_overall.json', '#topicModelingDem', currentDemDate);
    var words = top_words[currentDemDate];
    $('#topicWordsDemocrat').empty();
    for (var i in words) {
        $('#topicWordsDemocrat').append('<h5>' + i + '</h5>');
        for (var j = 0; j < words[i].length; j++) {
            $('#topicWordsDemocrat').append('<p>' + words[i][j] + '</p>');
        }
    }
    $('#currentDemDate').text(currentDemDate);
}

function drawTopicModelingRep() {
    drawTopicsAnalysis('data/targeted sentiments/rep_overall.json', '#topicModelingRep', currentRepDate);
    var words = top_words[currentRepDate];
    $("#topicWordsRepublican").empty();
    for (var i in words) {
        $('#topicWordsRepublican').append('<h5>' + i + '</h5>');
        for (var j = 0; j < words[i].length; j++) {
            $('#topicWordsRepublican').append('<p>' + words[i][j] + '</p>');
        }
    }
    $('#currentRepDate').text(currentRepDate);
}

$(document).ready(function() {
    drawTalkingTimes('data/talkingtimes-rep.json', '#talkingTimeRep');
    drawTalkingTimes('data/talkingtimes-dem.json', '#talkingTimeDem');
    drawSentimentAnalysis('data/sentiments/rep_overall.json', '#sentimentRep1', true);
    drawSentimentAnalysis('data/sentiments/rep_overall.json', '#sentimentRep2', false);
    drawSentimentAnalysis('data/sentiments/dem_overall.json', '#sentimentDem1', true);
    drawSentimentAnalysis('data/sentiments/dem_overall.json', '#sentimentDem2', false);
    drawTopicModelingDem();
    drawTopicModelingRep();
});