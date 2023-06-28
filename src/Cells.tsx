export default function Cells({ colors }: { colors: string[] }) {
  return (
    <div id="cells">
      {colors.map((color, index) => (
        <span key={index} id="cell" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
