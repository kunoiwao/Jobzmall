import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        size={57}
        thickness={4}
        sx={{ color: "#c084fc" }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "white", fontSize: 18, fontWeight: "bold" }}
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressSM() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 25 ? 25 : prevProgress + 1
      );
    }, 10);
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
