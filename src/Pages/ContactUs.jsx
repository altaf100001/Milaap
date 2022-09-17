import { Box, Flex, Image, Text, Tabs,TabList, Tab,TabPanel,TabPanels,Heading,Input,Center, Button, Textarea,} from "@chakra-ui/react";
  import React from "react";
  
  const ContactUs = () => {

    function handleSubmit(e){
      setTimeout(() => {
        e.target.reset();
      }, 3000);
    }

    return (
      <>
        <div>
          <Box h={"380px"} color={"whitesmoke"} bgColor={"#9c3353"}>
            <Box>
              <Flex justifyContent={"space-around"} wrap={"wrap"}>
                <Box mt={"9%"} textAlign={"start"}>
                  <Text fontSize={"30px"} as={"b"}>
                    Contact us
                  </Text>
                  <Text mt={"3%"} fontSize={"20px"}>
                    We are here to help you and answer any questions you may
                    <br /> have. Here is how to reach us!
                  </Text>
                </Box>
                <Box mt={"3%"}>
                  <Image src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2022/01/Contact_illustration.png?w=328&ssl=1" />
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w={"70%"} m={"auto"} mt={"5%"}>
            <Tabs isLazy>
              <TabList gap={"30%"}>
                <Tab
                  _selected={{ color: "black", textDecor: "!underline" }}
                  fontSize={"25px"}
                >
                  INDIA
                </Tab>
                <Tab
                  _selected={{ color: "#9c3353", textDecor: "underline" }}
                  fontSize={"25px"}
                >
                  SINGAPORE
                </Tab>
                <Tab
                  _selected={{ color: "#9c3353", textDecor: "underline" }}
                  fontSize={"25px"}
                >
                  US
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel textAlign={"start"}>
                  <Text mt={"2%"} mb={"2%"}>
                    Milaap Social Ventures India Pvt. Ltd. ClayWorks Create –
                    building,11th KM Create Campus, Arakere Bannerghatta Rd,
                    Bangalore, Karnataka, India 560076
                  </Text>
                  <a
                    style={{ color: "#9c3353" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=&body=&to=feedback@milaap.org"
                  >
                    feedback@milaap.org
                  </a>
                  <Box mt={"1%"} color={"#9c3353"}>
                    2370042324
                  </Box>
                </TabPanel>
                <TabPanel textAlign={"start"}>
                  <Text mt={"2%"} mb={"2%"}>
                    Milaap Social Ventures Pte. Ltd.
                    <br />
                    C/O Jungle Ventures,
                    <br />
                    79 Ayer Rajah Crescent, Block 79,
                    <br />
                    Singapore 139955
                    <br />
                  </Text>
                  <a
                    style={{ color: "#9c3353" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=&body=&to=feedback@milaap.org"
                  >
                    mayukh@milaap.org
                  </a>
                  <Box mt={"1%"} color={"#9c3353"}>
                    (+65) 3129 5466
                  </Box>
                </TabPanel>
                <TabPanel textAlign={"start"}>
                  <Text mt={"2%"} mb={"2%"}>
                    Milaap Social Ventures USA Pvt. Ltd.
                    <br />
                    311 North Market Street – Suite 200
                    <br />
                    Dallas, TX 75202
                    <br />
                  </Text>
                  <a
                    style={{ color: "#9c3353" }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=&body=&to=feedback@milaap.org"
                  >
                    feedback@milaap.org
                  </a>
                  <Box mt={"1%"} color={"#9c3353"}>
                    +1 (805) 590-7978
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box mt={"4%"}  >
            <Image src="./img4.png" m={"auto"} w="98%"/>
          </Box>
          
          <Box w={"80%"} m={"auto"} mt={"5%"} textAlign={"start"}>
            <Heading fontSize={"30px"}>Let us know what you think</Heading>
            <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/8868c4e2-ac5f-4c2a-89fc-71844d80620e"
            
          >
            <Center>
              <Input mt={"3%"} mr={"2%"} name="name" placeholder={"Name"} required/>
              <Input mt={"3%"} name="email" placeholder={"Email address"} required />
            </Center>
            <Center>
              <Textarea
                mt={"3%"}
                h={"200px"}
                
                placeholder={
                  "You can type any suggestions or queries you might have. Let us help you!"
                } required
              />
            </Center>
            <Button
              mt={"4%"}
              h={"50px"}
              color={"white"}
              fontSize={"20px"}
              w="18%"
              type="submit"
              name="message"
              bgColor={"#9c3353"}
            >
              Send
            </Button>
            </form>
          </Box>
        </div>
       
      </>
    );
  };
  
  export default ContactUs;
  