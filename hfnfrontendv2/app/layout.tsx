import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "./Footer";
import { Header } from "./Header";
import ReactQueryWrapper from "./ReactQueryWrapper";
import AuthContext from "./AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <AuthContext>
          <Header />
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
