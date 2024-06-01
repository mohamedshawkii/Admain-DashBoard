import { Box,  } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient( #CB3CFF 55%, transparent 56%),
          conic-gradient(transparent 0deg ${angle}deg, #57C3FF ${angle}deg 360deg),
          #8951FF`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;