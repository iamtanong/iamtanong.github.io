import {
    DEFAULT_THEME,
    MantineThemeOverride,
    mergeMantineTheme,
} from "@mantine/core";
import typo from "./typography";
import color from "./color";

const overrideTheme: MantineThemeOverride = {
    ...typo,
    ...color,
};
const themes = mergeMantineTheme(DEFAULT_THEME, overrideTheme);

export default themes;
