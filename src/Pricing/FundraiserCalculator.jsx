import {
  Box,
  Button,
  Collapse,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const FundraiserCalculator = () => {
  const property = {
    
    defaultValue: 10000,
  };
  const { isOpen, onToggle } = useDisclosure();
  const [price, setPrice]  = useState(0)
  const handleChange = (e) =>  {
    setPrice(e.target.value)
    console.log(price)
  }
  return (
    <Box>
      <Box fontSize="22px" p={"20px 0 10px"} fontFamily="AvenirLTPro-Book" textAlign="center">
        <h3 style={{fontWeight:"700", fontSize:"26px"}}>Fundraiser goal calculator</h3>
        <Box color={"#5d5d5d"} fontSize="18px" p={"0 30px"} >
          A simple way to plan and achieve your fundraiser goal
        </Box>
      </Box>

      <Box
        marginLeft="34%"
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Flex d="flex" alignItems="baseline">
            <Box>I want to raise:</Box>
            <Spacer />
            <Flex>
              <Select
                w="30%"
                borderLeft="none"
                borderTop={"none"}
                borderRadius="0px"
                borderRight={"0px"}
              >
                <option value="INR">₹ INR</option>
                <option value="USD">₹ USD</option>
              </Select>
              <input type="number" onChange={handleChange}  />
              {/* <NumberInput
                ml="-1"
                borderTopColor="#fff"
                borderLeftColor="#fff"
                borderRightColor="#fff"
                borderRadius={"none"}
                // value= {`${property.defaultValue}`}
                onChange = {handleChange}
                // value = {price}
                
              >
                <NumberInputField />

                <NumberInputStepper></NumberInputStepper>
              </NumberInput> */}
            </Flex>
          </Flex>
          <Box ml="5%" w="90%" mt={"14"}>
            <Slider defaultValue={10000} min={10000} max={100000} step={3000}>
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb bg="#9c3353" boxSize={6} />
            </Slider>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <Box
        marginLeft="34%"
        minHeight="120px"
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        bg={"#9c3353"}
        textAlign="center"
      >
        <Button
          onClick={onToggle}
          borderRadius="30px"
          line-height="50px"
          marginTop="40px"
          size="md"
          fontSize="20px"
          height="50px"
          width="230px"
          color="#9c3353"
          backgroundColor="#fff"
        >
          Calculate
        </Button>
      </Box>
      <br />
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="#9c3353"
          rounded="md"
          shadow="md"
        >
          <Flex>
            <Box p={4} textAlign={"left"} maxW={"24%"}>
                <Box mt={"50px"}><h4>​​Consider setting a goal of approx.</h4></Box>
              <Box fontSize="30px"><h1 >{((+price)+(+price)*2/100)}</h1></Box>
              <Box fontStyle={"italic"} fontSize={"12px"}>Disclaimer: This goal is the approximate amount you should consider setting where we assume that you would receive 70% of the total funds from INR contributions.</Box>
              
            </Box>
            <Spacer />
            <Box minW={'60%'} >
                <Box ml={"50%"}>See breakup</Box>
                <br /><br />
                <Flex marginLeft={"20%"}>
                    <Box>
                        <Box>Want to raise (₹) :</Box><br />
                        <Box>Milaap platform fee (₹) :</Box><br />
                        <Box>Payment gateway charges (₹) :</Box><br />
                    </Box>
                    <Spacer />
                    <Box>
                    <Box>{price}</Box><br />
                        <Box>0</Box><br />
                        <Box>{price*2/100}</Box><br />
                    </Box>
                </Flex>
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FundraiserCalculator;
