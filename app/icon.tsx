import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const markSrc = `data:image/png;base64,${readFileSync(join(process.cwd(), "public", "launch-mark.png")).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          padding: 18,
        }}
      >
        <img
          src={markSrc}
          alt="Launch To Space"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
