import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subText?: string;
  icon?: IconDefinition;
  footer?: React.ReactNode;
}

/**
 * Card component for dashboard UIs.
 * - Uses Tailwind for styling.
 * - Supports optional FontAwesome icon, title, actions, and footer.
 * - Follows Airbnb style and shadcn UI conventions.
 */
export function Card({
  title,
  subText,
  icon,
  footer,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-row h-full py-8 px-5 mx-3 gap-5 rounded-lg items-center justify-between shadow-lg", className
      )}
      {...props}
    >
      {(title || subText || icon) && (
        <>
          <div className="flex flex-col text-gray-400">
            {title && (
              <div className="text-4xl font-medium text-[#1DBB70]">{title}</div>
            )}
            {subText && (
              <div className="text-base text-[#B2B4B8] font-medium">{subText}</div>
            )}
          </div>
          {icon && (
            <div className="inline-flex items-center justify-center p-3 rounded-full overflow-hidden w-[91px] h-[91px] text-white border-4 border-[#1DBB70]">
              <FontAwesomeIcon icon={icon} className="font-bold text-[#1DBB70] text-3xl" />
            </div>
          )}
        </>
      )}
      {footer && <div className="pt-4 border-t border-gray-100">{footer}</div>}
    </div>
  );
}
