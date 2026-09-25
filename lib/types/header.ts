export type TerminalLine = {
  text: string;
  tone: "muted" | "ok";
};

export type Capability = {
  label: string;
  detail: string;
  icon: React.ReactNode;
};