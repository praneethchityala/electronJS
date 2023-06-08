const { app, BrowserWindow } = require('electron');

function creatWindow() {

    const window = new BrowserWindow({
        width: 1000,
        height: 800
    });

    window.loadFile("src/index.html")

}

app.whenReady().then(creatWindow);

app.on('window-all-closed', () => {
     app.quit();
});