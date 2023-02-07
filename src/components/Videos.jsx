import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {console.log("videos: ", videos)}
      <VideoCard />
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* {item.id.videoId && console.log(item)} */}
          {item.id.videoId && <VideoCard video={item || {}} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
