import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MasterPrimaryButtonType = {
  className?: string;
  lineRoundedSearch?: string;
  buttonText?: string;
  lineRoundedArrowRight?: string;
  iconRight?: boolean;
  iconLeft?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propFontSize?: CSSProperties["fontSize"];
  propFontFamily?: CSSProperties["fontFamily"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const MasterPrimaryButton: NextPage<MasterPrimaryButtonType> = ({
  className = "",
  lineRoundedSearch,
  buttonText,
  lineRoundedArrowRight,
  iconRight = false,
  iconLeft = false,
  propPadding,
  propBackgroundColor,
  propBorderRadius,
  propFontSize,
  propFontFamily,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
}) => {
  const masterPrimaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius,
    };
  }, [propPadding, propBackgroundColor, propBorderRadius]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
      fontFamily: propFontFamily,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
    };
  }, [
    propFontSize,
    propFontFamily,
    propMinWidth,
    propTextDecoration,
    propFontWeight,
  ]);

  return (
    <button
      className={`cursor-pointer [border:none] py-7 px-[55px] bg-deepskyblue rounded-[47.27px] flex flex-row items-start justify-start gap-2 z-[1] ${className}`}
      style={masterPrimaryButtonStyle}
    >
      {iconLeft && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src={lineRoundedSearch}
        />
      )}
      <b
        className="relative text-xl leading-[20px] inline-block font-text-single-200-regular text-white text-center min-w-[114px] whitespace-nowrap mq450:text-base mq450:leading-[16px]"
        style={buttonTextStyle}
      >
        {buttonText}
      </b>
      {iconRight && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src={lineRoundedArrowRight}
        />
      )}
    </button>
  );
};

export default MasterPrimaryButton;
