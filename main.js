var app = require('app');
var BrowserWindow = require('browser-window');
//var globalShortcut = require('global-shortcut');
var Menu = require('menu');
var Tray = require('tray');

require('crash-reporter').start();

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  var mainWindow    = new BrowserWindow({'max-width': 510, 'min-width': 510});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
