import { ImageResponse } from "next/og";

export const alt = "Clikium — Tecnología diseñada para hacer avanzar tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#07111f",
          backgroundImage:
            "linear-gradient(to right, rgba(227,233,239,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(227,233,239,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          color: "#f4f7fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, letterSpacing: 6 }}>
          <span style={{ color: "#79a9dc" }}>{"{/}"}</span>
          <span>CLIKIUM</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.02, letterSpacing: -3 }}>
          <span>Tecnología diseñada para</span>
          <span>
            hacer avanzar&nbsp;<span style={{ color: "#79a9dc" }}>tu negocio.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#b5c2d2", letterSpacing: 2 }}>
          Desarrollo web · Software a medida · Santiago, Chile
        </div>
      </div>
    ),
    size,
  );
}
