import { createTheme } from "@mantine/core";

const color = createTheme({
    colors: {
        primary: [
            "#e0f7f6", // primary.0
            "#b3e6e4", // primary.1
            "#85d5d2", // primary.2
            "#58c4c0", // primary.3
            "#2ab3ae", // primary.4
            "#009c97", // primary.5
            "#00857f", // primary.6
            "#006e68", // primary.7
            "#005751", // primary.8
            "#00403a", // primary.9
        ],
        blue: [
            "#e0f2ff", // blue.0
            "#b3d9ff", // blue.1
            "#85c0ff", // blue.2
            "#58a7ff", // blue.3
            "#2a8eff", // blue.4
            "#0066ff", // blue.5
            "#0055cc", // blue.6
            "#004499", // blue.7
            "#003366", // blue.8
            "#002233", // blue.9
        ],
    },
    autoContrast: true,
});

export default color;
