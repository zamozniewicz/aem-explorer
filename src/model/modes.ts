export const editorPath = "/editor.html";
export const modeParam = "wcmmode";
export const modes = ["disabled", "touch", "preview", "design"] as const;
export type Mode = typeof modes[number];
