import Cells from "./Cells";
import COLORS from "./colors";
import { SetStateAction, useState } from "react";

export default function Blocking() {
  const [text, setText] = useState("");
  const [colors, setColors] = useState<string[]>([]);

  const onChangeText = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value);
    const pendingColors: string[] = [];
    const textArr = [...text];
    for (let i = 0; i < text.length * 10; i++) {
      textArr.forEach((ch) => {
        pendingColors.push(COLORS[ch.charCodeAt(0) % 10]);
      });
    }

    setColors(pendingColors);
  };

  return (
    <div id="app">
      <div>텍스트를 입력하세요</div>
      <input type="text" value={text} onChange={onChangeText} />
      <p id="text">{text}</p>
      <Cells colors={colors} />
    </div>
  );
}
