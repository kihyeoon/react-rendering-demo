import COLORS from "./colors";
import { SetStateAction, useState, useTransition } from "react";

function Cells({ colors }: { colors: string[] }) {
  return (
    <div id="cells">
      {colors.map((color, index) => (
        <span key={index} id="cell" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

export default function Transition() {
  const [text, setText] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const onChangeText = (e: { target: { value: SetStateAction<string> } }) => {
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
      <div>텍스트를 입력하세요</div>
      <input type="text" value={text} onChange={onChangeText} />
      <p id="text">{text}</p>
      {isPending ? <div>Loading...</div> : <Cells colors={colors} />}
    </div>
  );
}
