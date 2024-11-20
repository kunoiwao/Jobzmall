"use client";
import React from "react";
import { Box } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/navigation";

const NavTab: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = React.useState("/jobs");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <Tab
          sx={{ textTransform: "none", marginX: 5 }}
          label="Jobs"
          value="/jobs"
        />
        <Tab
          sx={{ textTransform: "none", marginX: 5 }}
          label="Saved"
          value="/jobs/saved"
        />
        <Tab
          sx={{ textTransform: "none", marginX: 5 }}
          label="Applications"
          value="/jobs/applications"
        />
      </Tabs>
    </Box>
  );
};

export default NavTab;
