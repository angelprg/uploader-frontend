import { Card, CardContent, CardHeader, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ImageContainer = styled("div")({ margin: 10, display: 'inline' });

const ImagesListCard = ({ images }) => {
  return (
    <Card sx={{ minWidth: 275, margin: "10px" }} variant="outlined">
      <CardContent>
      <CardHeader
        title={images.name}
        subheader={`${images?.user?.firstName || ''} ${images?.user?.lastName || ''}`}
      />
        {images.files.map((file) => (
          <ImageContainer key={file.url}>
            <Image
              src={file.url}
              alt={file.name}
              layout="fixed"
              height="150px"
              width="200px"
            />
          </ImageContainer>
        ))}
      </CardContent>
    </Card>
  );
};

export default ImagesListCard;
