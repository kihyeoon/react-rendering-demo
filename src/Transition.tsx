import Cells from "./Cells";
import COLORS from "./colors";
import { ChangeEvent, useState, useTransition } from "react";

export default function Transition() {
  const [text, setText] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    const pendingColors: string[] = [];
    const textArr = [...text];
    for (let i = 0; i < text.length * 10; i++) {
      textArr.forEach((ch) => {
        pendingColors.push(COLORS[ch.charCodeAt(0) % 10]);
      });
    }

    startTransition(() => {
      setColors(pendingColors);
    });
  };

  return (
    <div id="app">
      <div>텍스트를 입력하세요({text.length})</div>
      <input type="text" value={text} onChange={onChangeText} />
      <p id="text">{text}</p>
      {isPending ? <div>Loading...</div> : <Cells colors={colors} />}
    </div>
  );
}
