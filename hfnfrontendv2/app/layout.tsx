import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "./Footer";
import { Header } from "./Header";
import AuthContext from "./AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext>
      <html>
        <head></head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </AuthContext>
  );
}
