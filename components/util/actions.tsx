import Link from "next/link";
import * as React from "react";

export const Actions = ({
  parentField = "",
  className = "",
  actions,
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-6 ${className}`}>
      {actions &&
        actions.map(function (action, index) {
          let element = null;
          if (action.type === "button") {
            element = (
              <Link key={index} href={action.link ? action.link : "/"} legacyBehavior>
                <button
                  data-tinafield={`${parentField}.${index}`}
                  className={`z-10 relative flex items-center px-7 py-3 font-semibold text-lg transition duration-150 ease-out  rounded transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                >
                  {action.label}
                  {action.icon && (
                    <div>arrow</div>
                  )}
                </button>
              </Link>
            );
          }
          if (action.type === "link" || action.type === "linkExternal") {
            element = (
              (<Link
                key={index}
                href={action.link ? action.link : "/"}
                passHref
                data-tinafield={`${parentField}.${index}`}
                className={`group inline-flex items-center font-semibold text-lg transition duration-150 ease-out`}
                style={{
                  textShadow: `0 3px 7px rgba(var(--color-rgb-blue-400),0.2)`,
                }}>

                {action.label}
                {action.icon && (
                  <div>arrow</div>
                )}

              </Link>)
            );
          }
          return element;
        })}
    </div>
  );
};
