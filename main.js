/**
 * Electron运行流程：
 * 1. 读取package.json中的入口文件，即index.js
 * 2. main.js 主进程【有且只有一个主进程】中创建渲染进程【打开的每一个窗口都是一个渲染进程】
 * 3. 读取应用页面的布局和样式
 * 4. 使用IPC在主进程执行任务并获取信息
 */

const {app, BrowserWindow, BrowserView} = require('electron')

function createWindow() {
	win = new BrowserWindow({
		width: 800, 
		height: 600, 
		webPreferences: {
			nodeIntegration: true,  // 解决require is not defined问题，node的所有包都可以在渲染进程中使用
			webviewTag: true,       // 解决webview无法显示问题
			enableRemoteModule: true
	}});
	// 打开调试窗口
	win.webContents.openDevTools();

	//win.setRepresentedFilename('/Users/linjk/Documents/code/frontend/electron/package.json');

	require('./main/menu.js');

	win.loadFile('./index.html');  // 加载页面

	// 浏览器
	// var view = new BrowserView();
	// win.setBrowserView(view);
	// view.setBounds({x: 0, y: 120, width: 400, height: 380});
	// view.webContents.loadURL('http://blog.csdn.net/linjingke32');

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