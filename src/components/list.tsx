import { Box, ListItem, ListItemText } from "@mui/material";
import { ReactNode } from "react";

type ListProps = {
  title: ReactNode;
  items: string[] | ReactNode[];
};

const DataList = (props: ListProps) => {
  return (
    <Box
      sx={{
        marginX: 15,
        width: "auto",
      }}
    >
      {props.title}
      {props.items.map((item, index) => (
        <ListItem key={index} component="div" disablePadding>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </Box>
  );
};

export default DataList;
