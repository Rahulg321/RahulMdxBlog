import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#18191B",
          color: "#fff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat, Arial Black, Arial, sans-serif",
          padding: 60,
          boxSizing: "border-box",
        }}
      >
        {/* Blog Title */}
        <span
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 32,
            color: "#fff",
            textShadow: "0 4px 24px rgba(0,0,0,0.4)",
            maxWidth: 1000,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "pre-line",
          }}
        >
          {"Rahul's Book"}
        </span>
        {/* Subtitle */}
        <span
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#fff",
            opacity: 0.7,
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          {"Insights, Stories & Ideas"}
        </span>
        {/* Description */}
        <span
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#fff",
            opacity: 0.5,
            textAlign: "center",
            maxWidth: 900,
            marginTop: 16,
            lineHeight: 1.3,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {
            "Explore thoughtful articles on technology, productivity, and personal growth."
          }
        </span>
      </div>
    ),
    { ...size },
  );
}
