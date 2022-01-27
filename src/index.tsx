import React from "react";
// import { styled } from "@stitches/react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const Tooltip: React.FC<{
  content: string | JSX.Element;
  showArrow?: boolean;
}> = ({ content, showArrow }) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger />
      <RadixTooltip.Content>
        Hello
        {content}
        {showArrow && <RadixTooltip.Arrow />}
      </RadixTooltip.Content>
    </RadixTooltip.Root>
  );
};

// export const Tooltip = () => {
//   return <div>Hi</div>;
// };
