import { Button, Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
const GPNFTBuy = () => {
  
  const router = useRouter();
  
  return (
    <Flex
      w="100%"
      maxW={"1200px"}
      mx="auto"
      justifyContent={"space-between"}
      mt={["3em"]}
      p={["24px"]}
      
      //   flexDirection={["column", "column", "row"]}
      className="xs:flex-col sm:flex-col-reverse lg:flex-row relative z-1"
    >
      
      <Flex maxW={600} flexDirection={"column"} className="xs:mb-[28px] xl:mb-[0px]  ">
        <Typography
          type="headline1"
          as="span"
          lineHeight={"64px"}
          color="text.success"
        >
          Generation Prime{" "}
          {/* <Typography type="headline1" as="span" color="text.success">
            CoinAI
          </Typography> */}
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Befenit:          
        </Typography>
        <Typography type="body1" color="text.read" mb="8px">
          Holders of Generation Prime NFTs enjoy exclusive benefits such as extra $MKT tokens as a bonus with each MKT purchase, tax exemption on deposits made to CoinAI Pools, extra CoinAI Pool deposit allowance of up to 20,000 USDT, governance vote power, access to private social channels, and vanity profile pictures and Discord role.
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Deposit Allowance:          
        </Typography>
        <Typography type="body1" color="text.read" mb="8px">
          Each Generation Prime NFT allows the holder to deposit up to 10,000 USDT.Additional Yield: Generation Prime NFTs offer an additional yield of 365% Annual Percentage Rate (APR).
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Additional Yield:        
        </Typography>
        <Typography type="body1" color="text.read" mb="8px" >
          Monsters Syndicate NFTs offer an additional yield of 200% APR.
        </Typography>
        <Flex>
          <Flex className="flex-col">
            <Typography type="headline4" as="span" color="text.primary" >
              5000 
              <Typography type="body1" as="span" color="text.primary">
                USDT       
              </Typography>          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Minting Price        
            </Typography>
          </Flex>
          
          <Flex className="flex-col mx-auto">
            <Typography type="headline4" as="span" color="text.primary" >
              365          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Total Unique Copies      
            </Typography>
          </Flex>
          <Button
            // className={className}
            colorScheme="brand"
            size="md"
            bgColor="bg.brand !important"
            rounded="full"
            px={8}
            py={7}
            // onClick={}
            color="white"
            fontSize={20}
            borderRadius={"8px"}
            zIndex={11}
            className="mx-auto"
          >
            Buy
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          src="/images/blur-ai.png"
          width={531}
          height={637}
          alt="blur-solution"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "-100px",
            zIndex: 0,
          }}
          priority
        />
        <Flex className="border-2 border-green-700 lg:ml-[100px] ml-[0px] min-w-[330px] rounded-lg">
        <Image
          src="/images/GP_NFT.jpg"
          width={500}
          height={500}
          
          alt="GP_NFT"
          style={{
            width: "100%",
            height: "100%",
          }}
          className=" p-[3px] rounded-lg"
          priority
        />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default GPNFTBuy;
