import type { FC } from "react";

import { Group, UnstyledButton } from "@mantine/core";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ColorSchemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 text-blue-500" />
        ) : (
          <SunIcon className="h-6 w-6 text-blue-500" />
        )}
      </UnstyledButton>
    </Group>
  );
};

export default ColorSchemeToggle;
