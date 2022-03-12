import { v4 as uuidv4 } from "uuid";
import {
  getLocalStorage,
  setLocalStorage,
  STORAGE_ACTION,
} from "../utils/storage";

const useUserId = () => {
  const id = getLocalStorage(STORAGE_ACTION.USER_ID);
  const onCreateId = () => {
    const newId = uuidv4();
    setLocalStorage(STORAGE_ACTION.USER_ID, newId);
  };

  return {
    id,
    onCreateId,
  };
};

export default useUserId;
