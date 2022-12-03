import { app, BrowserWindow, ipcMain } from "electron";
import Main from "./mainWindow";
import channels from "./lib/constant";
import { addStudent, addUser, deleteStudent, findAllStudent } from "./lib/useCases";
import prisma from "./lib/db";

Main.main(app, BrowserWindow);

ipcMain.handle(channels.GET_STUDENT_LIST, async (event) => {
  return "foo";
});

ipcMain.handle("channels.ADD_USER", (event, args) => {
  addUser(args)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    });
});

ipcMain.handle("ADD_STUDENT", (event, args) => {
  addStudent(args)
    .then(async () => {
      await prisma.$disconnect;
      return args;
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      return args;
    });
});

ipcMain.handle("FIND_ALL_STUDENT",(event,args)=>{
  return findAllStudent()
})

ipcMain.handle("DELETE_STUDENT",(event,args)=>{
  deleteStudent(args)
})