import "@fontsource/anton";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Header from "../components/header";
import PageContainer from "../components/layout/page-container";
import { ThemeProviderWrapper } from "./theme";

const navItems = [
  { display: "Home", route: "/" },
  { display: "History & Robots", route: "/history-page" },
  { display: "Awards", route: "/awards-page" },
  { display: "Sponsors", route: "/sponsors" },
  { display: "Request a Demo", route: "/demo" },
  { display: "Resources", route: "/resources" },
  { display: "Join Our Team", route: "/registration" },
  { display: "About Us", route: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <Header navItems={navItems} logo="S.W.A.T. 1806" />
            <PageContainer>{children}</PageContainer>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
