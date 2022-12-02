import { IpcRenderer, contextBridge, ipcRenderer } from "electron";
import os = require("os");

contextBridge.exposeInMainWorld(
  "api",{
    getMain:"kjkj",
    
  }
)
