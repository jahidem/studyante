import { IpcRenderer, contextBridge, ipcRenderer } from "electron";
import os = require("os");
import channels from "utils/constant";

contextBridge.exposeInMainWorld(
  "api",{
    getMain:"kjkj",
    // getStudentList: (args) => ipcRenderer.invoke(channels.GET_STUDENT_LIST,args) ,
  }
)
