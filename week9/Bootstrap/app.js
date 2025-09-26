var express = require('express');
var path = require('path');
var liveReload = require('livereload');
var connectLiveReload = require('connect-livereload');

var port = 3000;
const publicPath = path.join(__dirname, 'public');

var liveReloadServer = liveReload.createServer();

liveReloadServer.watch(publicPath);

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);    
});

var app = express();
app.use(connectLiveReload());

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
});

