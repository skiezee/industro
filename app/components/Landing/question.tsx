"use client";
import type { NextPage } from "next";
import { CSSProperties } from "react";
import Image from "next/image";

export type QuestionType = {
  className?: string;
  title?: string;
  closedQuestion?: string;
  /** Style props */
  propFlexWrap?: CSSProperties["flexWrap"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Question: NextPage<QuestionType> = ({
  className = "",
  title,
  closedQuestion,
  propFlexWrap,
  propGap,
  propFlex,
  propMinWidth,
}) => {
  const containerStyle: CSSProperties = {
    flexWrap: propFlexWrap,
    gap: propGap,
  };

  const headerStyle: CSSProperties = {
    flex: propFlex,
    minWidth: propMinWidth,
  };

  return (
    <div
      className={`flex flex-wrap items-start justify-start rounded-lg bg-white border border-gray-200 p-4 ${className}`}
      style={containerStyle}
    >
      <div className="flex-1" style={headerStyle}>
        <b className="text-lg">{title}</b>
      </div>
      {closedQuestion && (
        <Image
          className="h-8 w-8"
          alt="Closed Question"
          src={closedQuestion}
          width={32}
          height={32}
        />
      )}
    </div>
  );
};

export default Question;
