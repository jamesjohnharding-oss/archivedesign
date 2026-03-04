import React from "react";

/**
 * Shared shell for system/error pages. Provides consistent content anatomy
 * with optional dark background and ghost door watermark.
 */
export default function PageShell({
  children,
  dark = false,
  watermark = true,
  background,
  className = "",
  style = {},
}) {
  const mainClass = [
    "page-main",
    dark ? "page-main--dark" : "",
    !watermark ? "page-main--no-watermark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  let combinedStyle = { ...style };
  if (dark) {
    combinedStyle = { ...combinedStyle, background: "var(--teal-dark)", minHeight: "100vh" };
  } else if (background) {
    combinedStyle = { ...combinedStyle, background };
  }

  return (
    <main className={mainClass} style={combinedStyle}>
      {children}
    </main>
  );
}
