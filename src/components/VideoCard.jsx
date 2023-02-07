import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle, VideoSettings } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

// const VideoCard = ({
//   video: {
//     id: { videoId },
//     snippet,
//   },
// }) => {
//   console.log(videoId, snippet);
//   return <div>VideoCard</div>;
// };
const VideoCard = ({ video }) => {
  // console.log("video: ", video);
  return <div>VideoCard</div>;
};

export default VideoCard;
