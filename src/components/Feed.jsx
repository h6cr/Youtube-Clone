import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Category } from "@mui/icons-material";
import mock_videos from "../mock/mock_videos.json";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "New",
    displayName: "新鲜",
  });
  const [videos, setVideos] = useState([]);

  // fetch videos from mock data
  // useEffect(() => {
  //   setVideos(mock_videos);
  //   // console.log("mock_videos: ", mock_videos);
  // }, [selectedCategory]);

  // fetch videos from api
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory.name}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);

  if (!videos.length) return "加载中……";
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
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white", mb: "20px" }}
        >
          {selectedCategory.displayName}
          <span style={{ color: "#F31503" }}>视频</span>
        </Typography>
        {/* {console.log("state videos: ", videos)} */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
