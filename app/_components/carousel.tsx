"use client";

import { Pause, PlayArrow } from "@mui/icons-material";
import { Box, Button, Pagination, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export interface ImageProps {
  altText: string;
  displayText: string;
  src: string | StaticImport;
}

interface CarouselProps {
  paths: ImageProps[];
}

function isImportedImage(src: string | StaticImport): src is StaticImport {
  return (src as string).length === undefined; // Strings have length and StaticImports don't. Checking if the param has a length defined will tell us what type it is
}

const Carousel = (props: CarouselProps) => {
  const [page, setPage] = useState(1); // Pagination values start at 1
  const [isPaused, setPaused] = useState(false);

  function handleSetPage(event: ChangeEvent<unknown>, pageNumber: number) {
    setPage(pageNumber);
  }

  const handleSetPageCycle = useCallback(() => {
    if (!isPaused) {
      setPage((prevPage) => {
        if (prevPage >= props.paths.length) {
          return 1;
        }
        return prevPage + 1;
      });
    }
  }, [isPaused, props.paths.length]);

  // Using useEffect to set up an interval for automatic cycling
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleSetPageCycle();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, handleSetPageCycle]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {
          <Image
            src={
              isImportedImage(props.paths[page - 1].src)
                ? props.paths[page - 1].src
                : "_assets/" + props.paths[page - 1].src
            }
            alt={props.paths[page - 1].altText}
            height={540}
            width={960}
            style={{ height: "auto", maxWidth: "100%", marginBottom: "20px" }}
          />
        }
        <Typography>{props.paths[page - 1].displayText}</Typography>
        <Pagination
          count={props.paths.length}
          onChange={handleSetPage}
          page={page}
        />
        <Button onClick={() => setPaused(!isPaused)}>
          <Box display="flex" alignItems="center" gap={0.5}>
            {isPaused ? (
              <>
                <Pause />
                <Typography>Paused</Typography>
              </>
            ) : (
              <>
                <PlayArrow />
                <Typography>Playing</Typography>
              </>
            )}
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default Carousel;
