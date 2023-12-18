import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Card,
  Text,
  Flex,
  Heading,
  PrimaryButton,
  TextButton,
  Atom,
} from "@ripple/design-system";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { FloNFT__factory } from "./typechain-types";
import { useEffect, useState } from "react";

const contractConfig = {
  address: "0xc35bC00163BDC97685b6b52285dee58B4b700F64",
  abi: FloNFT__factory.abi,
} as const;

export const HomePage = () => {
  const { isConnected } = useAccount();
  const [totalMinted, setTotalMinted] = useState(0n);

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
  } = useContractWrite(contractWriteConfig);

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "totalSupply",
    watch: true,
  });

  const { data: txData, isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(totalSupplyData);
    }
  }, [totalSupplyData]);

  const isMinted = txSuccess;

  return (
    <Flex
      alignItems="center"
      direction="column"
      justifyContent="center"
      css={{ height: "100vh" }}
    >
      <Flex alignItems="center" gap={10}>
        <Flex direction="column" gap={4}>
          <Flex gap={1} direction="column">
            <Heading level="1">EVM Sidechain Demo</Heading>
            <Text>{Number(totalMinted)} minted so far!</Text>
            <ConnectButton showBalance />
          </Flex>

          {isConnected && !isMinted && (
            <PrimaryButton
              disabled={!mint || isMintLoading || isMintStarted}
              onClick={() => mint?.()}
            >
              {isMintLoading && "Waiting for approval"}
              {isMintStarted && "Minting..."}
              {!isMintLoading && !isMintStarted && "Mint"}
            </PrimaryButton>
          )}
          {isMinted && txData && (
            <TextButton
              as="a"
              href={`https://evm-sidechain.xrpl.org/tx/${txData.transactionHash}`}
              target="_blank"
            >
              See on the Explorer
            </TextButton>
          )}
        </Flex>
        <Card elevation="low">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWllOG5nMXFhM3p0eTlyemxrZm1obmZlMDAxMW1hb3RxaXRxc3hldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gNke2UrUTopOg/giphy.gif" />
        </Card>
      </Flex>
    </Flex>
  );
};
