import * as React from "react";

export default ({
  href,
  type,
  value,
  disabled,
  rounded,
  className = "",
  children,
  dataId,
  size = "normal",
  variant = "secondary",
  title,
}) => {
  const tag = href ? "a" : "button";
  return React.createElement(
    tag,
    {
      disabled,
      href,
      type,
      value,
      title,
      "data-id": dataId ? dataId : undefined,
      className: `c_Button c_Button--${variant} ${className} ${
        rounded ? "c_Button--rounded" : ""
      } c_Button--size-${size}`,
    },
    <div className="c_Button__inner">{children}</div>
  );
};
