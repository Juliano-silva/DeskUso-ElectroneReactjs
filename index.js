const {app,BrowserWindow,Notification} = require("electron");
function createWindow(){
    const win = new BrowserWindow({
      width:800,
      height:600,
      hiddenInMissionControl:true,
      autoHideMenuBar:true,
      title:"DeskUP"
    });
    win.loadURL("https://www.youtube.com/watch?v=HQcCpmz7KqM&ab_channel=shooter_sz");
}
const NOTIFICATION_TITLE = 'Bem-Vindo ao DeskUP'
const NOTIFICATION_BODY = 'Aqui é um Aplicativo onde tem tudo e mais um pouco'
if (process.platform === 'win32') {
   app.setAppUserModelId("JSA");
  }
function showNotification () {
    new Notification({title: NOTIFICATION_TITLE,body: NOTIFICATION_BODY}).show()
  }
app.whenReady().then(createWindow).then(showNotification)

