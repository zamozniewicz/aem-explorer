export const editorPath = "/editor.html";
export const debugParam = "debugClientLibs";
export const modeParam = "wcmmode";
export const modes = ["disabled", "touch", "preview", "design"] as const;
export type Mode = typeof modes[number];
