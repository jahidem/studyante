export interface Api {
  getMain: string,
  // getStudentList: () => Promise<string>,
}

declare global {
  interface Window {
    api: Api,
    
  }
}