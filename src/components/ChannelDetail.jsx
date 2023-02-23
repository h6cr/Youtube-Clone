import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  // console.log(ChannelDetail);
  // console.log(videos);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(339deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 51%, rgba(252,176,69,1) 100%)",
            zIndex: 99,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={ChannelDetail}
          marginTop="-120px"
        ></ChannelCard>
      </Box>
      <Box display="flex" p="2">
        {/* <Box sx={{ mr: { sm: "100px" } }} /> */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
