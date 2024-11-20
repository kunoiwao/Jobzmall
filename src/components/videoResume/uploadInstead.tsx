import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadInstead() {
  return (
    <Button
        sx={{
            borderRadius: "9999px",
            color: "white",
            backgroundColor: "#262626",
            paddingY: 1,
            textTransform: "none",
        }}
      className="px-6"
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<FileUploadIcon fontSize='large'/>}
    >
      Upload Instead
      <VisuallyHiddenInput
        type="file"
        accept=".mpeg,.ogm,.m4v,.mpg"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  );
}
