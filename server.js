var express = require('express');
var compress = require('compression');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(compress());

app.listen(process.env.PORT || 3000);
