import { Container } from "@mui/material";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container sx={{ padding: "8px" }}>{children}</Container>;
};

export default PageContainer;
