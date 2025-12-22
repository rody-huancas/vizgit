import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "vizgit - Visualiza tus contribuciones de GitHub";
export const size    = {
  width : 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #06155a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div
          style={{
            fontSize: 120,
            fontWeight: "bold",
            background: "linear-gradient(to right, #10B981, #34D399)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 30,
            display: "flex",
          }}
        >
          vizgit
        </div>

        <div
          style={{
            fontSize: 40,
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            marginBottom: 20,
            maxWidth: 800,
          }}
        >
          Visualiza tus contribuciones de GitHub
        </div>

        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.6)",
            textAlign: "center",
          }}
        >
          Heatmaps personalizables • Estadísticas detalladas • Análisis de
          actividad
        </div>

        <div
          style={{
            display: "flex",
            gap: 4,
            marginTop: 50,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: 2,
                background: `rgba(16, 185, 129, ${Math.random() * 0.8 + 0.2})`,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
