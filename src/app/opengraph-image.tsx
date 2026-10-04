import { ImageResponse } from "next/og";


export const alt = "Foodieree — Hyperlocal Food Discovery & 15s Sizzle Video Reels";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#FAF7F0",
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(194, 41, 24, 0.12) 0%, transparent 50%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top Bar: Brand Logo + Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Logo Pin */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#C22918",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: 900,
                boxShadow: "0 8px 24px rgba(194, 41, 24, 0.35)",
              }}
            >
              F
            </div>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 900,
                letterSpacing: "-1px",
                color: "#12100E",
              }}
            >
              FOODIEREE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              backgroundColor: "#12100E",
              borderRadius: "999px",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            <span>🇮🇳 INDIA&apos;S 1ST VIDEO FOOD DISCOVERY</span>
          </div>
        </div>

        {/* Center: Hero Headline & Value Props */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.15,
              fontWeight: 900,
              color: "#12100E",
              margin: 0,
              letterSpacing: "-1.5px",
              maxWidth: "1000px",
            }}
          >
            Watch 15s Sizzle Reels.{" "}
            <span style={{ color: "#C22918" }}>
              Order with ₹0 Platform Fee &amp; ₹0 Delivery Fee.
            </span>
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#4A453E",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "920px",
            }}
          >
            Hyperlocal food discovery from Patna&apos;s authentic tandoors, cloud kitchens &amp; heritage eateries within 10 km.
          </p>
        </div>

        {/* Bottom Highlights & Metrics */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "2px solid #E6DEC9",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#C22918" }}>
                ₹0 Fee
              </span>
              <span style={{ fontSize: "14px", color: "#6E685F", fontWeight: 600 }}>
                Platform &amp; Delivery
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#12100E" }}>
                15-Second
              </span>
              <span style={{ fontSize: "14px", color: "#6E685F", fontWeight: 600 }}>
                Live Cooking Reels
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: 800, color: "#D97706" }}>
                IIT Patna
              </span>
              <span style={{ fontSize: "14px", color: "#6E685F", fontWeight: 600 }}>
                Founded &amp; Incubation
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              color: "#C22918",
              backgroundColor: "rgba(194, 41, 24, 0.08)",
              padding: "10px 22px",
              borderRadius: "12px",
              border: "1px solid rgba(194, 41, 24, 0.2)",
            }}
          >
            foodieree.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
