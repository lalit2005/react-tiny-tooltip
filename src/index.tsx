import React from "react";
import { styled, keyframes } from "@stitches/react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

const Box = styled("div", {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
});

const scaleIn = keyframes({
  from: { transform: "scale(0.9)", opacity: 0 },
  to: { transform: "scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "scale(1)", opacity: 1 },
  to: { transform: "scale(0.9)", opacity: 0 },
});

const StyledContent = styled(RadixTooltip.Content, {
  '&[data-state="delayed-open"]': {
    animation: `${scaleIn} 0.2s ease-in-out`,
  },
  '&[data-state="closed"]': {
    animation: `${scaleOut} 0.2s ease-in-out`,
  },
  backgroundColor: "black",
  color: "white",
  padding: "6px 9px",
  borderRadius: "4px",
  boxShadow: "0px 0px 10px 0px rgba(161,161,161,0.6)",
});

export const Tooltip: React.FC<{
  content: string | JSX.Element;
  showArrow?: boolean;
  delay?: number;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}> = ({ content, showArrow = true, delay = 0, side, sideOffset, ...props }) => {
  return (
    <Box>
      <RadixTooltip.Provider delayDuration={delay}>
        <RadixTooltip.Root>
          <RadixTooltip.Trigger asChild>
            <Box>{props.children}</Box>
          </RadixTooltip.Trigger>
          <StyledContent side={side} sideOffset={sideOffset}>
            {content}
            {showArrow && <RadixTooltip.Arrow />}
          </StyledContent>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </Box>
  );
};
