import { useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
  STORAGE_ACTION,
} from "../utils/storage";

const useMark = () => {
  const onGetMarkDays = () => getLocalStorage(STORAGE_ACTION.MARK_DAYS);
  const [markDays, setMarkDays] = useState(
    onGetMarkDays() ? onGetMarkDays()!.split(",") : []
  );

  const onChangeMark = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const days = [...markDays];
    const value = event.target.value;

    if (!checked) {
      const index = markDays.indexOf(value);
      if (index === -1) return;

      days.splice(index, 1);
      setMarkDays(days);
      return setLocalStorage(STORAGE_ACTION.MARK_DAYS, days.join(","));
    }

    const uniqueMarkDays = Array.from(new Set([...markDays, value]));
    setMarkDays(uniqueMarkDays);
    setLocalStorage(STORAGE_ACTION.MARK_DAYS, uniqueMarkDays.join(","));
  };

  return {
    markDays,
    onChangeMark,
  };
};

export default useMark;
