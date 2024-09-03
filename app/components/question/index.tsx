"use client"  
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
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
  const questionStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
      gap: propGap,
    };
  }, [propFlexWrap, propGap]);

  const closedQuestionHeaderStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-81xl bg-white border-lavender border-[1px] border-solid box-border flex flex-row items-start justify-start flex-wrap content-start py-[23px] pl-9 pr-[34px] gap-[71.7px] max-w-full text-left text-3xl text-gray font-urbanist mq450:gap-[18px] mq1050:gap-9 ${className}`}
      style={questionStyle}
    >
      <div className="h-[82px] w-[812.2px] relative rounded-81xl bg-white border-lavender border-[1px] border-solid box-border hidden max-w-full" />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[413px] max-w-full mq750:min-w-full"
        style={closedQuestionHeaderStyle}
      >
        <b className="relative leading-[28px] z-[1] mq450:text-lg mq450:leading-[22px]">
          {title}
        </b>
      </div>
      {closedQuestion && (
        <Image
          className="h-8 w-8 relative z-[1]"
          loading="lazy"
          alt=""
          src={closedQuestion}
          width={32}
          height={32}
        />
      )}

    </div>
  );
};

export default Question;
