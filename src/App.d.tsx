export interface Api {
  getMain: string,
}

declare global {
  interface Window {
    api: Api
  }
}