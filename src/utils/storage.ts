export enum STORAGE_ACTION {
  USER_ID = "USER_ID",
}

export const getLocalStorage = (key: STORAGE_ACTION) =>
  window.localStorage.getItem(key);
export const setLocalStorage = (key: STORAGE_ACTION, value: string) =>
  window.localStorage.setItem(key, value);
