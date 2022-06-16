import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  Input,
  Textarea
} from "@chakra-ui/react";
import { Heading, Text, Button } from "tw-components";
import { HomepageSection } from "components/HomeSection";

export default function ContactPage() {
  return (
    <HomepageSection id="contact" topGradient bottomGradient>
      <Box
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
        my={28}
        px={[0, 10]}
        py={[5, 10]}
        borderRadius={5}
      >
        <Box>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                  Profile
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  please share your profile and project.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={[8,12]}
                  py={6}
                  px={[6, 12]}
                >
                  <FormControl isRequired as={GridItem} colSpan={6}>
                    <FormLabel htmlFor="todo" fontSize={"sm"} fontWeight={"md"}>
                      What would you like to do ?
                    </FormLabel>
                    <CheckboxGroup
                      colorScheme="purple"
                    >
                      <Stack spacing={[1, 5]} direction={["column", "row"]}>
                        <Checkbox value="build_a_digital_product">Build a digital product</Checkbox>
                        <Checkbox value="improve_your_current_product">Improve your current product</Checkbox>
                        <Checkbox value="digital_marketing">Digital Marketing</Checkbox>
                        <Checkbox value="other">Other</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </FormControl>
                  <FormControl isRequired>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <Input
                          type="text"
                          name="Email"
                          placeholder="Your Email"
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                          type="text"
                          name="about"
                          placeholder="where did you hear about us ?"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <Textarea
                          placeholder="tell us about your project and challenge you have"
                        />
                    </FormControl>
                </Stack>
                <Flex
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  justifyContent={"space-between"}
                  flexDir={['column', 'row']}
                >
                  <Button
                    type="submit"
                    colorScheme="purple"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Send us a message
                  </Button>
                  <Text>you can directly mail at hello@groundsgrow.com</Text>
                </Flex>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </HomepageSection>
  );
}
