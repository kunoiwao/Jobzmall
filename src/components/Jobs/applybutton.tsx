import * as React from "react";
import Button from "@mui/material/Button";

interface ChildProps {
  buttonIcon: JSX.Element;
  buttonName: string;
}

const ApplyButton: React.FC<ChildProps> = ({ buttonIcon, buttonName }) => {
  return (
    <>
      <Button
        sx={{
          borderRadius: "999px",
          color: "white",
          backgroundColor: "#9333EA",
          paddingY: 1.5,
          textTransform: "none",
        }}
        className="px-6 shadow-lg shadow-purple-600"
        variant="contained"
        startIcon={buttonIcon}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default ApplyButton;
