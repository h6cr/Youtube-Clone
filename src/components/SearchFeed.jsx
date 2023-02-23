import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "white", mb: "20px" }}
      >
        <span>{`搜索结果：${searchTerm}`}</span>
        <span style={{ color: "#F31503" }}>视频</span>
      </Typography>
      {/* {console.log("state videos: ", videos)} */}
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
