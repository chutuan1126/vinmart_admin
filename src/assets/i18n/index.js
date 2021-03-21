import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

//us
import commonEn from "./en/common";
import headerEn from "./en/header";

//vn
import commonVi from "./en/common";
import headerVi from "./vi/header";

i18n
  .use(detector)
  .init({
    resources: {
      en: {
        common: commonEn,
        header: headerEn,
      },
      vi: {
        common: commonVi,
        header: headerVi,
      },
    },
    lng: "vi",
    fallbackLng: "vi",
    debug: false,
    ns: ["header", "common"],
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
