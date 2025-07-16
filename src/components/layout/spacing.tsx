import { Box } from "@mui/material";

enum SpacerSpacing {
  LARGE,
  MEDIUM,
  SMALL,
}

const spacerSpaceMap = new Map<SpacerSpacing, number>([
  [SpacerSpacing.LARGE, 48],
  [SpacerSpacing.MEDIUM, 32],
  [SpacerSpacing.SMALL, 16],
]);

const Spacer = ({ size }: { size: SpacerSpacing }) => {
  return <Box height={spacerSpaceMap.get(size)}></Box>;
};

export const LargeHeightSpacer = () => <Spacer size={SpacerSpacing.LARGE} />;
export const MediumHeightSpacer = () => <Spacer size={SpacerSpacing.MEDIUM} />;
export const SmallHeightSpacer = () => <Spacer size={SpacerSpacing.SMALL} />;
