import {
  SimpleGrid,
  Flex,
  LightMode,
  Stack,
  Box,
  Center,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { HomepageSection } from "components/HomeSection";
import { GeneralCta } from "components/shared/GeneralCta";
import { Heading, Link, Text } from "tw-components";
import { ChakraNextImage } from "components/shared/Image";
import Hero from "../../public/landingpage/hero.png";
import MobileHero from "../../public/landingpage/mobile-hero.png";
import { ContractCard } from "components/shared/ContractCard";
import { ProjectSelector } from "components/shared/ProjectSection";
import { FiCheck } from "react-icons/fi";
import { ExamplesSection } from "components/shared/ExampleSection";
import WhiteLogo from "../../public/logo.png";

export default function Home() {
  return (
    <>
      <HomepageSection id="home" topGradient bottomPattern>
        <SimpleGrid
          pt={{
            base: 24,
            md: 48,
          }}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: 8 }}
        >
          <Flex
            flexDir="column"
            gap={{ base: 6, md: 8 }}
            align={{ base: "initial", md: "start" }}
          >
            <Heading
              as="h2"
              size="display.md"
              textAlign={{ base: "center", md: "left" }}
            >
              Grow business from ground.
            </Heading>
            <Heading
              as="h3"
              size="subtitle.md"
              textAlign={{ base: "center", md: "left" }}
            >
              Groundsgrow porvides you services that grow your business from the
              ground to top lavel on internet.
            </Heading>
            <LightMode>
              <Flex flexDir="column" align="center" gap={6}>
                <GeneralCta href="/contact" size="lg" />
                <Link
                  href="#fees"
                  borderBottomWidth="1px"
                  _hover={{
                    textDecor: "none",
                    opacity: 1,
                  }}
                  opacity={0.8}
                >
                  <Text size="body.lg">with new technology</Text>
                </Link>
              </Flex>
            </LightMode>
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent="flex-end"
          >
            <ChakraNextImage
              alt=""
              maxW={96}
              w={96}
              mt={8}
              src={Hero}
              mr={12}
            />
          </Flex>
          <Flex display={{ base: "flex", md: "none" }} justifyContent="center">
            <ChakraNextImage
              alt=""
              maxW={96}
              w={96}
              mt={8}
              px={4}
              src={MobileHero}
            />
          </Flex>
        </SimpleGrid>
      </HomepageSection>

      <HomepageSection id="contracts" middleGradient>
        <Flex
          flexDir="column"
          gap={{ base: 6, md: 8 }}
          py={{ base: 12, lg: 24 }}
          pt={{ base: 24, lg: 0 }}
          align="center"
        >
          <Flex
            p={{ base: 0, md: 12 }}
            pt={{ base: 0, md: 24 }}
            flexDir="column"
            gap={{ base: 6, md: 8 }}
          >
            <Heading
              bgGradient="linear(to-r, #B8EEFF, #8689E3)"
              bgClip="text"
              _hover={{ opacity: 0.8 }}
              textAlign="center"
              size="display.sm"
              as="h2"
            >
              Why We ?
            </Heading>
            <Heading size="subtitle.md" as="p" textAlign="center">
              We offer services and strategy that grows authority within your
              business niche
            </Heading>
            <SimpleGrid
              flexDir="column"
              justifyContent="space-between"
              w="100%"
              columns={{ base: 1, md: 3 }}
              gap={{ base: 12, md: 6 }}
              py={12}
              px={{ base: 6, md: 0 }}
            >
              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/keys.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Consulting</Heading>
                <Text size="body.lg">
                  We provide the IT training and support needed to power your
                  workforce, suggesting an IT strategy that perfectly fits into
                  your business.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/extensions.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Marketing</Heading>
                <Text size="body.lg">
                  We porvide the best Marketing tools and services to market
                  your product or services online with social media and in other
                  ways also.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <ChakraNextImage
                  src={require("/public/landingpage/list.svg")}
                  placeholder="empty"
                  alt=""
                  w={12}
                />
                <Heading size="title.sm">Development</Heading>
                <Text size="body.lg">
                  We build your fully featured product with latest technologies
                  which provides reliability and scalability at the same time to
                  the end user.
                </Text>
              </Stack>
            </SimpleGrid>

            <Heading size="subtitle.lg" as="h3" textAlign="center">
              some of our services
            </Heading>
            <SimpleGrid
              columns={{ base: 2, md: 3, lg: 4 }}
              spacing={{ base: 3, md: 4 }}
            >
              <ContractCard
                icon="nft-drop"
                title="Web development"
                description="ERC721 and ERC1155, minted or lazy minted so your audience can claim them."
              />
              <ContractCard
                icon="token"
                title="S.E.O improvement"
                description="ERC20 tokens, minted or lazy minted so your audience can claim them."
              />
              <ContractCard
                icon="marketplace"
                title="App development"
                description="NFT marketplace, either open to any collection or limited to the collections you want."
              />
              <ContractCard
                icon="split"
                title="More"
                description="Governance on-chain, splitting revenue, and more."
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      </HomepageSection>

      {/* section for some related projects */}

      <HomepageSection id="developers" bottomPattern middleGradient>
        <Flex
          flexDir="column"
          pt={{ base: 12, lg: 24 }}
          align="center"
          gap={{ base: 6, md: 8 }}
        >
          <Heading as="h2" size="display.sm" textAlign="center">
            Latest Projects.
          </Heading>
          <Heading as="h3" size="subtitle.md" textAlign="center">
            here our some of the cool projects that we created and deployed
          </Heading>
          <ProjectSelector />
        </Flex>
      </HomepageSection>

      <HomepageSection id="fees">
        <SimpleGrid
          py={{ base: 12, lg: 24 }}
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 6, md: 8 }}
          alignItems="center"
        >
          <Flex gap={{ base: 6, md: 8 }} flexDir="column">
            <Heading
              size="display.sm"
              textAlign={{ base: "center", md: "left" }}
            >
              Complete tech solutions.
              <br />
            </Heading>
            <Text
              size="body.xl"
              fontStyle="italic"
              textAlign={{ base: "center", md: "left" }}
            >
              our services helps your business to grow on internet get more
              traffic and sales, we porvide everything from web development to
              marketing all services that you require for you busienss.
            </Text>
          </Flex>
          <Box
            border=".5px solid"
            borderColor="#4953AF"
            p={12}
            borderRadius="lg"
            backgroundColor="#0000004d"
          >
            <Heading
              bgGradient="linear(to-r, #FFB8E6, #8689E3)"
              bgClip="text"
              size="display.lg"
              mb={6}
            >
              Here.
            </Heading>
            <List
              spacing={3}
              display="flex"
              flexDirection="column"
              alignItems="start"
              textAlign="left"
              color="gray.400"
              mb={16}
            >
              <ListItem>
                <ListIcon as={FiCheck} color="green.500" />
                search engine optimizations
              </ListItem>
              <ListItem>
                <ListIcon as={FiCheck} color="green.500" />
                Web development
              </ListItem>
              <ListItem>
                <ListIcon as={FiCheck} color="green.500" />
                digital marketing
              </ListItem>
              <ListItem>
                <ListIcon as={FiCheck} color="green.500" />
                branding
              </ListItem>
            </List>
            <LightMode>
              <GeneralCta href="/contact" title="Start building today" size="lg" w="100%" />
            </LightMode>
          </Box>
        </SimpleGrid>
      </HomepageSection>

      <HomepageSection id="examples" middleGradient>
        <Flex
          flexDir="column"
          py={{ base: 12, lg: 24 }}
          align="center"
          gap={{ base: 12, lg: 24 }}
        >
          <Heading
            as="h2"
            bgGradient="linear(to-r, #907EFF, #C5D8FF)"
            bgClip="text"
            size="display.md"
            textAlign="center"
          >
            Build anything.
          </Heading>
          <ExamplesSection />
        </Flex>
      </HomepageSection>
      <HomepageSection id="get-started" bottomPattern>
        <Flex
          flexDir="column"
          pt={{ base: 12, lg: 24 }}
          pb={{ base: 24, lg: 0 }}
          align="center"
          gap={{ base: 6, md: 8 }}
        >
          <Center mb={6} pt={{ base: 8, lg: 24 }}>
            <Center p={2} position="relative" mb={6}>
              <Box
                position="absolute"
                bgGradient="linear(to-r, #F213A4, #040BBF)"
                top={0}
                left={0}
                bottom={0}
                right={0}
                borderRadius="3xl"
                overflow="visible"
                filter="blur(15px)"
              />

              <ChakraNextImage
                alt=""
                boxSize={{ base: 24, md: 32 }}
                placeholder="empty"
                src={WhiteLogo}
              />
            </Center>
          </Center>
          <Heading as="h2" size="display.md" textAlign="center">
            Get started with Groundsgrow
          </Heading>
          <Heading as="h3" maxW="600px" textAlign="center" size="subtitle.lg">
            lets grow your business from the ground.
          </Heading>
          <LightMode>
            <GeneralCta
              title="Contact us"
              size="lg"
              href="/contact"
              w={{ base: "full", md: "inherit" }}
            />
          </LightMode>
        </Flex>
      </HomepageSection>
    </>
  );
}
