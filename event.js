const { dialog } = require('electron').remote;

function onClick_OpenFile() {
    const label = document.getElementById('label');
    var optoins = {};
    optoins.title = '打开文件';
    // [mac]电脑设置标题方式
    optoins.message = '打开文件';
    optoins.buttonLabel = '选择';
    optoins.defaultPath = '.';
    optoins.properties = ['openFile'];
    optoins.filters = [
        {name: '文本文件', extensions: ['txt']},
        {name: '*', extensions: ['*']},
    ];
    // 显示打开文件对话框，并将选择的文件显示在页面上
    dialog.showOpenDialog(optoins).then(result => {
        label.innerText = result.filePaths;
    });
}

function onClick_OpenAndCreateDirectory() {
    const label = document.getElementById('label');
    var options = {};
    // createDirectory仅用于Mac系统
    options.properties = ['openDirectory', 'createDirectory'];
    label.innerText = dialog.showOpenDialog(options).then(result => {
        label.innerText = result.filePaths;
    });;
}

function onClick_Welcome() {
    const label = document.getElementById('label');
    var options = {};
    options.title = 'Information';
    options.message = 'Message';
    //options.icon = './img/msg.png';
    options.type = 'error'; // error, question, warning
    options.buttons = ['btn_1', 'btn_2'];
    //label.innerText = dialog.showMessageBox(options);
    //dialog.showErrorBox('Error', 'msg');
    var p = Promise.resolve(dialog.showMessageBox(options));
    p.then(function(s) {
        console.log('you click: ' + s.response);
    });
}