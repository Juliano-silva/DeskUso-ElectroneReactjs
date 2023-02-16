const {app,BrowserWindow,Notification} = require("electron");
function createWindow(){
    const win = new BrowserWindow({
      width:800,
      height:600,
      hiddenInMissionControl:true,
      autoHideMenuBar:true
    });
    win.loadURL("http://localhost:3000");
}
const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'
function showNotification () {
    new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
  }
app.whenReady().then(createWindow).then(showNotification)

