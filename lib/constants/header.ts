import { TerminalLine } from "../types/header";

export const TERMINAL_LINES: TerminalLine[] = [
  { text: "$ cloudscap deploy --env=production", tone: "muted" },
  { text: "✓ Build complete in 4.2s", tone: "ok" },
  { text: "✓ 12 services healthy", tone: "ok" },
  { text: "→ live at cloudscap.app", tone: "muted" },
];