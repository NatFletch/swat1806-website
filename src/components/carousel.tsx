"use client";

import { Box, Grid, Pagination, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export interface ImageProps {
  altText: string;
  displayText: string;
  src: StaticImport;
}

interface CarouselProps {
  paths: ImageProps[];
}

const Carousel = (props: CarouselProps) => {
  const [page, setPage] = useState(1); // Pagination values start at 1

  function handleSetPage(event: ChangeEvent<unknown>, pageNumber: number) {
    setPage(pageNumber);
  }

  const handleSetPageCycle = useCallback(() => {
    setPage((prevPage) => {
      if (prevPage >= props.paths.length) {
        return 1;
      }
      return prevPage + 1;
    });
  }, [props.paths.length]);

  // Using useEffect to set up an interval for automatic cycling
  useEffect(() => {
    const interval = setInterval(() => {
      handleSetPageCycle();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleSetPageCycle]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid container spacing="16px" justifyContent="center">
          {
            <Image
              src={props.paths[page - 1].src}
              alt={props.paths[page - 1].altText}
              height={540}
              width={960}
              style={{ height: "auto", maxWidth: "100%" }}
            />
          }
          <Typography>{props.paths[page - 1].displayText}</Typography>
          <Pagination
            hidden
            count={props.paths.length}
            onChange={handleSetPage}
            page={page}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Carousel;
