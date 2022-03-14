import { Box } from "@mui/material";
import React, { useState } from "react";

export interface IProps {
  onChangeIndex: (index: number) => void;
}

const TouchSwipe: React.FC<IProps> = (props) => {
  const { children, onChangeIndex } = props;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onSwipe = (start: number, end: number) => {
    const distance = start - end;
    if (Math.abs(distance) < 20) return;

    const changeIndex = distance > 0 ? 1 : -1;
    onChangeIndex(changeIndex);

    setTouchStart(0);
    setTouchEnd(0);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    onSwipe(touchStart, touchEnd);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };
  const onMouseUp = (e: React.MouseEvent) => {
    onSwipe(touchStart, e.clientX);
  };

  return (
    <Box
      minHeight={300}
      component="section"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {children}
    </Box>
  );
};

export default TouchSwipe;
