import React from "react";

const Section = ({
  className = "",
  id = "",
  crosses = false,
  crossesOffset = false,
  customPaddings = "",
  children = null,
}) => {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || "py-10 md:py-16 lg:py-20 "} ${
        crosses ? "md:py-32 lg: py-40" : ""
      } ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-[#26242C] pointer-events-none md:block md:left-7.5 lg:left-10" />

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-[#26242C] pointer-events-none md:block md:right-7.5 lg:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-blue-900 ${
              crossesOffset && crossesOffset
            } pointer-events-none md:block lg:left-10 lg:right-10`}
          />
        </>
      )}
    </div>
  );
};

export default Section;
