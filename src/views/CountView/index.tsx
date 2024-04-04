import React from "react";
import { useCountView } from "./hooks";

export const CountView = (() => {
  const { count, addCount } = useCountView();
  return (
    <div>
      <p data-testid="countText">{count}</p>
      <button data-testid="button" className="bg-red-500 px-2 py-4 hover:bg-red-300" onClick={addCount}>
        カウントアップ==
      </button>
    </div>
  );
});
