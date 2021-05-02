var data = [{
  values: [46, 10, 43],
  labels: ['Steam', 'Battle.net', 'Other'],
  type: 'pie'
}];

var layout = {
  title: 'Games Installed on My PC',
  height: 400,
  width: 500
};

Plotly.newPlot('myDiv', data, layout);