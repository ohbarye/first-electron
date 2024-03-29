const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  const win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
})