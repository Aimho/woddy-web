import { Box } from "@mui/material";
import { useState } from "react";

export interface IProps {
  onChangeIndex: (index: number) => void;
}

const TouchSwipe: React.FC<IProps> = (props) => {
  const { children, onChangeIndex } = props;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    const changeIndex = touchStart - touchEnd > 150 ? 1 : -1;
    onChangeIndex(changeIndex);
  }

  return (
    <Box
      minHeight={300}
      component="section"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </Box>
  );
};

export default TouchSwipe;
