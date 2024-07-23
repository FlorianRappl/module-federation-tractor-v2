import * as React from "react";

export default ({
  href,
  type,
  value,
  disabled,
  rounded,
  className,
  children,
  dataId,
  variant = "secondary",
  onClick,
}) => {
  const tag = href ? "a" : "button";
  return React.createElement(
    tag,
    {
      disabled,
      href,
      type,
      value,
      onClick,
      "data-id": dataId ? dataId : undefined,
      className: `e_Button e_Button--${variant} ${className} ${
        rounded ? "e_Button--rounded" : ""
      }`,
    },
    <div className="e_Button__inner">{children}</div>
  );
};
