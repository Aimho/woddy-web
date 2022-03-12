import { useEffect, useState } from "react";
import useUserId from "../../hook/useUserId";
import Presenter from "./Presenter";

const Home = () => {
  const { id, onCreateId } = useUserId();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!id) onCreateId();
  }, [id, onCreateId]);

  return <Presenter onChangeDate={setDate} />;
};

export default Home;
