import React from "react";
import { colors } from "../config/color";

export const GenerateBackgroundColor = () => {
  const backgroundColor = colors[parseInt(Math.random() * colors.length, 10)];
  return <style>{`body{background-color:${backgroundColor};}`}</style>;
};
