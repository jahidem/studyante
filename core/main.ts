import { app, BrowserWindow, ipcMain } from "electron";
import Main from "./mainWindow";
import channels from "./utils/constant"

Main.main(app, BrowserWindow);


ipcMain.handle(channels.GET_STUDENT_LIST, async (event) => {
  return "foo";
})
