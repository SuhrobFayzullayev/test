interface ILocales {
  id: string;
  code: string;
  file: string;
}

export const defaultLocale: string = "uz";
export const locales: ILocales[] = [
  { id: "ru", code: "ru", file: "ru.json" },
  { id: "uz", code: "uz", file: "uz.json" },
];
