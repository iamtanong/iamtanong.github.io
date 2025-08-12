import { createTheme } from "@mantine/core";
import { Inter, Bitter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

const bitter = Bitter({
    subsets: ["latin"],
});

const typo = createTheme({
    headings: {
        fontFamily: bitter.style.fontFamily,
        fontWeight: "700",
        sizes: {
            h1: { fontSize: "2.5rem" },
            h2: { fontSize: "2rem" },
            h3: { fontSize: "1.75rem" },
            h4: { fontSize: "1.5rem" },
            h5: { fontSize: "1.25rem" },
            h6: { fontSize: "1rem" },
        },
    },
    fontFamily: bitter.style.fontFamily, // This set is not work, need manual set in layout.tsx
    fontFamilyMonospace: "Fira Code, monospace",
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
    },
});

export default typo;
export { inter, bitter };
