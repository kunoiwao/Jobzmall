import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadResume() {
  return (
    <Button
      sx={{
        borderRadius: "999px",
        color: "white",
        backgroundColor: "#9333EA",
        paddingY: 1.5,
        textTransform: "none",
      }}
      className="px-6 shadow-lg shadow-purple-600"
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<AddRoundedIcon fontSize="large" />}
    >
      Upload Resume
      <VisuallyHiddenInput
        type="file"
        accept=".dot,.doc,.docx,.pdf"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  );
}
