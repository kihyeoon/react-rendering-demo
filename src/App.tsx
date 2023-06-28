import "./App.css";
import { SetStateAction, memo, useState } from "react";
import COLORS from "./colors";

function _Cells({ colors }: { colors: string[] }) {
  return (
    <div className="cells">
      {colors.map((color, index) => (
        <span key={index} className="cell" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

const Cells = memo(_Cells);

function App() {
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
    <div className="app">
      <div>텍스트를 입력하세요</div>
      <input type="text" value={text} onChange={onChangeText} />

      <p className="text">{text}</p>

      <Cells colors={colors} />
    </div>
  );
}

export default App;
