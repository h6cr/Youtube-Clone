import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Category } from "@mui/icons-material";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 h6cr
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#F31503" }}>视频</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};
export default Feed;
