import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

function ColorModeButton() {
  const { setColorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme();

  const DisplayIcon = () => {
    return computedColorScheme === "light" ? (
      <IconSun className="" stroke={1.5} />
    ) : (
      <IconMoon className="" stroke={1.5} />
    );
  };

  return (
    <ActionIcon
      onClick={() => {
        setColorScheme(computedColorScheme === "light" ? "dark" : "light");
        toggleColorScheme();
      }}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <DisplayIcon />
    </ActionIcon>
  );
}

export default ColorModeButton;
