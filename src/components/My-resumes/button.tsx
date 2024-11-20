import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

interface ChildProps {
    setLayout : React.Dispatch<React.SetStateAction<string>>;
}

const ResumeButton: React.FC<ChildProps> = ({setLayout}) => {
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
        onClick={() => {
            setLayout('center');
          }}
        startIcon={<SendIcon />}
      >
        Write Me a New Resume
      </Button>
    </>
  );
};

export default ResumeButton;
