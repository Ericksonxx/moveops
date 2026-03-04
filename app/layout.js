import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://moveops.services"),
  title: {
    default: "MoveOps | Spain execution partner for agencies (retail + stands)",
    template: "%s | MoveOps",
  },
  description:
    "White-label on-site execution in Spain: retail installs, POS/graphics, stand build support, photo reporting.",
  openGraph: {
    type: "website",
    url: "https://moveops.services",
    siteName: "MoveOps",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MoveOps" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
