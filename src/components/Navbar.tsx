"use client";
import {
  Flex,
  NavLink,
  Burger,
  Drawer,
  Text,
  Box,
  ElementProps,
  NavLinkProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ColorModeButton from "./ColorModeBtn";
import { usePathname } from "next/navigation";

function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <Box className="hidden md:flex mb-8">
        <Flex className="w-full items-center justify-between px-4 py-3">
          {/* Empty left space for balance */}
          <div className="w-10"></div>

          {/* Center navigation links */}
          <Flex className="gap-1">
            <NavbarLink label={<Text size="md">About</Text>} href="/" />
            <NavbarLink label={<Text size="md">Blog</Text>} href="/blog" />
            <NavbarLink label={<Text size="md">Résumé</Text>} href="/resume" />
          </Flex>

          {/* Right side - Color mode button */}
          <ColorModeButton />
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box className="md:hidden">
        <Flex className="w-full items-center justify-between px-4 py-3">
          {/* Mobile menu burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />

          {/* Center logo/brand (optional) */}
          <Text className="text-lg font-semibold">Portfolio</Text>

          {/* Right side - Color mode button */}
          <ColorModeButton />
        </Flex>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        position="top"
        size="xs"
        className="md:hidden"
      >
        <Flex direction="column" gap="sm" className="p-4">
          <NavbarLink
            label={<Text size="sm">About</Text>}
            href="/"
            onClick={close}
          />
          <NavbarLink
            label={<Text size="sm">Blog</Text>}
            href="/blog"
            onClick={close}
          />
          <NavbarLink
            label={<Text size="sm">Résumé</Text>}
            href="/resume"
            onClick={close}
          />
        </Flex>
      </Drawer>
    </>
  );
}

interface NavbarLinkProps
  extends NavLinkProps,
    ElementProps<"a", keyof NavLinkProps> {
  label: React.ReactNode;
  href: string;
  onClick?: () => void;
}

function NavbarLink({ label, href, onClick }: NavbarLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  const isMobile = typeof onClick !== "undefined";

  return (
    <NavLink
      variant="subtle"
      label={label}
      href={href}
      onClick={onClick}
      active={isActive && isMobile} // Use default active styling for mobile
      className="md:!bg-transparent" // Override active background for desktop/tablet
      style={{
        borderBottom:
          isActive && !isMobile
            ? "2.5px solid var(--mantine-color-primary-4)"
            : "none",
      }}
    />
  );
}

export default Navbar;
