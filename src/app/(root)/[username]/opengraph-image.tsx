import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "Contribuciones de GitHub";
export const size    = {
  width : 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{ username: string }>;
}

export default async function Image({ params }: Props) {
  const { username } = await params;

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
            fontSize: 48,
            fontWeight: "bold",
            background: "linear-gradient(to right, #10B981, #34D399)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 40,
            display: "flex",
          }}
        >
          vizgit
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
            display: "flex",
          }}
        >
          @{username}
        </div>

        <div
          style={{
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "center",
          }}
        >
          Contribuciones de GitHub
        </div>

        {/* Decorative heatmap */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginTop: 50,
          }}
        >
          {Array.from({ length: 3 }).map((_, row) => (
            <div key={row} style={{ display: "flex", gap: 4 }}>
              {Array.from({ length: 25 }).map((_, col) => (
                <div
                  key={col}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    background: `rgba(16, 185, 129, ${
                      Math.random() * 0.8 + 0.2
                    })`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
