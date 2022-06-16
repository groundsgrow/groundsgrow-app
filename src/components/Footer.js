import {
  Box,
  ButtonGroup,
  Container,
  DarkMode,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  LightMode,
  SimpleGrid,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Logo } from "components/logo";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import {
  Button,
  Heading,
  LinkButton,
  CustomIconButton,
  Link,
} from "tw-components";
import { sendEmailToConvertkit } from "utils/convertkit";

const HomepageFooter = () => {
  const { register, handleSubmit, setError } = useForm();
  const toast = useToast();

  return (
    <Box bgColor="#111315" zIndex="100">
      <Container as="footer" maxW="container.page" color="gray.500">
        <Box p={16} px={{ base: 4, md: 16 }} mx="auto">
          <Heading
            size="label.md"
            textTransform="uppercase"
            pb={3}
            textAlign="center"
            lineHeight={1.5}
          >
            Join groundsgrow and stay up to date with our newsletter
          </Heading>
          <Flex
            as="form"
            direction={{ base: "column", sm: "row" }}
            mx="auto"
            maxW="md"
            gap={{ base: 4, md: 0 }}
            onSubmit={handleSubmit(async ({ email }) => {
              try {
                await sendEmailToConvertkit(email, [3136080]);
                toast({
                  position: "bottom",
                  variant: "solid",
                  title: "You're in!",
                  description: "Check your inbox to confirm your subscription.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              } catch (err) {
                console.error("failed to send email to convertkit", err);
                setError("email", {
                  message:
                    err instanceof Error ? err.message : "Something went wrong",
                });
              }
            })}
          >
            <InputGroup display="flex" size="md">
              <InputLeftElement pointerEvents="none">
                <Icon as={HiOutlineMail} />
              </InputLeftElement>
              <Input
                borderEndRadius={{ base: "md", md: "none" }}
                variant="outline"
                borderColor="rgba(255,255,255,.2)"
                placeholder="Email address"
                type="email"
                required
                {...register("email")}
              />
            </InputGroup>
            <LightMode>
              <Button
                borderStartRadius={{ base: "md", md: "none" }}
                variant="gradient"
                fromcolor="#1D64EF"
                tocolor="#E0507A"
                type="submit"
                borderRadius="md"
                borderWidth="1px"
                bgColor="white"
                flexShrink={0}
              >
                <Box as="span">Subscribe</Box>
              </Button>
            </LightMode>
          </Flex>
        </Box>
        <DarkMode>
          <Divider borderColor="rgba(255,255,255,0.1)" />
        </DarkMode>
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "12", md: "16" }}
        >
          <Stack spacing={{ base: "6", md: "8" }} align="start">
            <Logo color="#fff" />
            <ButtonGroup variant="ghost">
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href="https://twitter.com/groundsgrow"
                icon={<SiTwitter fontSize="1.25rem" />}
                category="footer"
                aria-label="Twitter"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href="https://discord.gg/groundsgrow"
                aria-label="Discord"
                icon={<SiDiscord fontSize="1.25rem" />}
                category="footer"
                label="discord"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href="https://www.linkedin.com/company/groundsgrow/"
                aria-label="LinkedIn"
                icon={<SiLinkedin fontSize="1.25rem" />}
                category="footer"
                label="youtube"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href="https://www.instagram.com/groundsgrow/"
                aria-label="Instagram"
                icon={<SiInstagram fontSize="1.25rem" />}
                category="footer"
                label="instagram"
              />
              <CustomIconButton
                as={LinkButton}
                isExternal
                noIcon
                href="https://github.com/groundsgrow"
                aria-label="GitHub"
                icon={<SiGithub fontSize="1.25rem" />}
                category="footer"
                label="github"
              />
            </ButtonGroup>
          </Stack>
          <Flex
            direction={{ base: "column-reverse", md: "column", lg: "row" }}
            gap={{ base: "12", md: "8" }}
          >
            <SimpleGrid columns={{ base: 2, lg: 4 }} spacing="8">
              <Stack spacing="4" minW="36" flex="1">
                <Heading size="label.lg">Product</Heading>
                <Stack spacing="3" shouldWrapChildren>
                  <Link href="#features" category="footer" label="features">
                    Features
                  </Link>
                  <Link href="#fees" category="footer" label="pricing">
                    Pricing
                  </Link>
                  <Link href="/dashboard" category="footer" label="dashboard">
                    Dashboard
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Heading size="label.lg">Company</Heading>
                <Stack spacing="3" shouldWrapChildren>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com"
                    category="footer"
                    label="portal"
                  >
                    Docs
                  </Link>
                  <Link
                    isExternal
                    href="https://blog.thirdweb.com/"
                    category="footer"
                    label="blog"
                  >
                    Blog
                  </Link>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com/guides"
                    category="footer"
                    label="guides"
                  >
                    Guides
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Heading size="label.lg">SDKs</Heading>
                <Stack spacing="3" shouldWrapChildren>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com/typescript"
                    category="footer"
                    label="javascript"
                  >
                    JavaScript
                  </Link>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com/react"
                    category="footer"
                    label="react"
                  >
                    React
                  </Link>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com/python"
                    category="footer"
                    label="python"
                  >
                    Python
                  </Link>
                  <Link
                    isExternal
                    href="https://portal.thirdweb.com/contracts"
                    category="footer"
                    label="contracts"
                  >
                    Contracts
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing="4" minW="36" flex="1">
                <Heading size="label.lg">Legal</Heading>
                <Stack spacing="3" shouldWrapChildren>
                  <Link
                    isExternal
                    href="/privacy"
                    category="footer"
                    label="privacy"
                  >
                    Privacy Policy
                  </Link>
                  <Link isExternal href="/tos" category="footer" label="terms">
                    Terms of Service
                  </Link>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomepageFooter;
