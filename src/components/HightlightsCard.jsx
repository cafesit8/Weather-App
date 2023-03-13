import React from "react";

export function HightlightsCard({text, info, symbol}) {
  return (
    <div className="bg-[#1E213A] p-3 flex flex-col rounded-lg justify-center items-center">
      <h4 className="text-[18px]">{text}</h4>
      <h5 className="text-[60px]">
        {info}
        <span className="text-[40px] text-white/50">{symbol}</span>
      </h5>
    </div>
  );
}
