const {app, BrowserWindow} = require('electron')

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600});
	// 打开调试窗口
	//win.webContents.openDevTools();

	win.setRepresentedFilename('/Users/linjk/Documents/code/frontend/electron/package.json');

	win.loadFile('./index.html');

	win.on('closed', () => {
		console.log('window closed');
		win = null;
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	console.log('window-all-closed');

	//if (process.platform !== 'darwin') {
		app.quit();
	//}
})

app.on('activate', () => {
	console.log('activate');
	if (win === null) {
		createWindow();
	}
})