import { app, BrowserWindow, ipcMain } from "electron";
import Main from "./mainWindow";
import channels from "./utils/constant"

Main.main(app, BrowserWindow);

ipcMain.handle("MAIN",
  (event, agrs) =>{
    return "hi"
  }  
)
