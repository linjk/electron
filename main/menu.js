const { app, Menu } = require('electron')

const isMac = process.platform === 'darwin';

var template = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
        }]: []
    ),
    {
        label: '数据库',
        submenu: [
            {
                label: '配置录入'
            },
            {
                label: '测试连接'
            }
        ]
    },
    {
        label: '关于',
        submenu: [
            {
                label: '更多',
                click: async() => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://linjk.github.io')
                }
            },
            {
                label: '软件版本'
            }
        ]
    }
];

var m = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);