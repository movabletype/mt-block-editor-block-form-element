import i18n from "mt-block-editor-block/i18n";

const translations = import.meta.glob<{ default: Record<string, string> }>(
  "./locales/*/translation.json",
  { eager: true, import: "default" }
);

i18n.on("initialized", () => {
  Object.entries(translations).forEach(([path, translation]) => {
    const match = path.match(/\.\/locales\/([^/]+)\/translation\.json/);
    if (match) {
      const lang = match[1];
      i18n.addResources(lang, "translation", translation);
    }
  });
});

export function t(args: string | string[]): string {
  return i18n.t(args);
}
