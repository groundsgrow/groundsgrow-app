import { LandingMenu } from "./LandingMenu";
import {
  Box,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import { SiInstagram, SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";
import { CustomIconButton, LinkButton } from "tw-components";
import NextLink from "next/link";
import { Logo } from "components/logo";
import siteConfig from "config";
import siteConfigs from "config";

export const HomepageTopNav = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -5) {
        setIsScrolled(true);
      } else if (currPos.y >= -5) {
        setIsScrolled(false);
      }
    },
    [isMobile],
    undefined,
    false,
    33,
  );

  return (
    <>
      <Box
        transition="all 100ms ease"
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex="overlay"
        as="header"
        boxShadow={isScrolled ? "md" : undefined}
        bg={isScrolled ? "blackAlpha.900" : "transparent"}
        backdropFilter="blur(10px)"
      >
        <Container
          as={Flex}
          py={4}
          maxW="container.page"
          justify="space-between"
          align="center"
          flexDir="row"
        >
          <NextLink href="/">
            <span><Logo/></span>
          </NextLink>
          <Stack
            display={["none", "none", "flex"]}
            direction="row"
            alignItems="center"
            color="gray.50"
            fontWeight="bold"
            spacing={10}
            as="nav"
          >
            <NextLink href="/#why-we" category="topnav" label="developers">
              Developers
            </NextLink>
            <NextLink href="/#projects" category="topnav" label="projects">
              Projects
            </NextLink>
            <NextLink href="/#solutions" category="topnav" label="solutions">
            solutions
            </NextLink>
            <Flex
              display={{ base: "none", lg: "flex" }}
              direction="row"
              align="center"
            >
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href={siteConfig.social.twitter}
                color="gray.50"
                bg="transparent"
                aria-label="twitter"
                icon={<Icon boxSize="1rem" as={SiTwitter} />}
                category="topnav"
                label="twitter"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href={siteConfigs.social.instagram}
                bg="transparent"
                color="gray.50"
                aria-label="instagram"
                icon={<Icon boxSize="1rem" as={SiInstagram} />}
                category="topnav"
                label="instagram"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href={siteConfigs.social.linkedin}
                bg="transparent"
                color="gray.50"
                aria-label="YouTube"
                icon={<Icon boxSize="1rem" as={SiLinkedin} />}
                category="topnav"
                label="youtube"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href={siteConfigs.social.github}
                bg="transparent"
                color="gray.50"
                aria-label="github"
                icon={<Icon boxSize="1rem" as={SiGithub} />}
                category="topnav"
                label="github"
              />
            </Flex>
          </Stack>
          <LandingMenu
            aria-label="Homepage Menu"
            display={{ base: "inherit", md: "none" }}
          />
        </Container>
      </Box>
      <Box h="35px" w="100%" display={["block", "block", "none"]} />
    </>
  );
};
