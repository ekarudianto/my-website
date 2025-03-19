import React from "react";
import Input from "./Input";

export default function TradeJournal() {
  const [text, setText] = React.useState("");
  return (
    <div className='site container'>
      <h2>Trade journal</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
