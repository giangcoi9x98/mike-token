import { Button, Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
const MSNFTBuy = () => {
  
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
      className="xs:flex-col sm:flex-col lg:flex-row relative z-1"
    >
      
      {/* <Image src=""/> */}
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
            right: "-100px",
            zIndex: 1,
          }}
          priority
        />
        <Flex className="border-2 border-green-700 lg:mr-[100px] mr-[0px] min-w-[330px] rounded-lg">
        <Image
          src="/images/MS_NFT.jpg"
          width={500}
          height={500}
          
          alt="MS_NFT"
          style={{
            width: "100%",
            height: "100%",
          }}
          className=" p-[3px] rounded-lg"
          priority
        />
        </Flex>
      </Flex>
      <Flex maxW={600} flexDirection={"column"} className="xs:mb-[28px] xl:mb-[0px]  ">
        <Typography
          type="headline1"
          as="span"
          lineHeight={"64px"}
          color="text.success"
        >
          Monsters Syndicate{" "}
          {/* <Typography type="headline1" as="span" color="text.success">
            CoinAI
          </Typography> */}
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Befenit:          
        </Typography>
        <Typography type="body1" color="text.read" mb="8px">
          Holders of Monsters Syndicate NFTs gain exclusive access to private social channels, fostering a sense of community and providing a platform for networking and sharing insights. Monsters Syndicate NFT holders can unlock unique vanity profile pictures and obtain a special role within the Discord community, showcasing their status as esteemed holders.
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Deposit Allowance:          
        </Typography>
        <Typography type="body1" color="text.read" mb="8px">
          Each Monsters Syndicate NFT allows the holder to deposit up to 5,000 USDT.
        </Typography>
        <Typography type="headline4" as="span" color="text.primary">
          Additional Yield:        
        </Typography>
        <Typography type="body1" color="text.read" mb="8px" >
          Monsters Syndicate NFTs offer an additional yield of 200% APR.
        </Typography>
        <Flex>
          <Flex className="flex-col" >
            <Typography type="headline4" as="span" color="text.primary" >
              3000 
              <Typography type="body1" as="span" color="text.primary">
                USDT       
              </Typography>          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Minting Price        
            </Typography>
          </Flex>
          
          <Flex className="flex-col mx-auto" >
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
      
    </Flex>
  );
};
export default MSNFTBuy;
