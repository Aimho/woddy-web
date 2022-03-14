import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { differenceInCalendarDays, format } from "date-fns";
import { ko } from "date-fns/locale";
import useMark from "../../hook/useMark";
import useUserId from "../../hook/useUserId";
import Presenter from "./Presenter";
import { getWods } from "../../api/wods";
import { LinearProgress } from "@mui/material";
import { IWodsResp } from "../../api/types";

const Home = () => {
  const { id, onCreateId } = useUserId();
  useEffect(() => {
    if (!id) onCreateId();
  }, [id, onCreateId]);

  const { markDays, onChangeMark } = useMark();

  const [date, setDate] = useState(new Date());
  const markDay = format(date, "yyyy-MM-dd");
  const diffToday = differenceInCalendarDays(date, new Date());

  const wodsQuery = useQuery(["wods"], () => getWods());
  if (!wodsQuery.data) {
    return <LinearProgress />;
  }

  const calendarProps = {
    date,
    onChangeDate: setDate,
    markDays,
  };

  const selectedWod = () => {
    const wodData = wodsQuery.data.filter(
      ({ date }: IWodsResp) => date === markDay
    );
    if (wodData.length === 0) return "";
    return wodData[0].wod;
  };

  const contentsProps = {
    title: format(date, "M월 d일 (eee)", { locale: ko }),
    wod: selectedWod(),
    isControl: diffToday <= 0,
    switchProps: {
      value: markDay,
      onChange: onChangeMark,
      checked: markDays ? markDays.includes(markDay) : false,
    },
  };

  return (
    <Presenter calendarProps={calendarProps} contentsProps={contentsProps} />
  );
};

export default Home;
