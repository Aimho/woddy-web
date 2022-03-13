import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import useMark from "../../hook/useMark";
import useUserId from "../../hook/useUserId";
import Presenter from "./Presenter";

const Home = () => {
  const { id, onCreateId } = useUserId();
  const { markDays, onChangeMark } = useMark();

  const [date, setDate] = useState(new Date());
  const markDay = format(date, "yyyy-MM-dd");

  const calendarProps = {
    date,
    onChangeDate: setDate,
    markDays,
  };

  const contentsProps = {
    title: format(date, "M월 d일 (eee)", { locale: ko }),
    switchProps: {
      value: markDay,
      checked: markDays ? markDays.includes(markDay) : false,
      onChange: onChangeMark,
    },
  };

  useEffect(() => {
    if (!id) onCreateId();
  }, [id, onCreateId]);

  useEffect(() => {}, [date]);

  return (
    <Presenter calendarProps={calendarProps} contentsProps={contentsProps} />
  );
};

export default Home;
