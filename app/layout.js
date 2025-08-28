import "./globals.css";

import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AgriLink",
  description: "Uber for Farm Equipment",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="" >
          <Toaster />
          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
