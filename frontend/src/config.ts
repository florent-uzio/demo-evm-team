import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const xrplEvmRpc = "https://rpc-evm-sidechain.xrpl.org";

const xrpl: Chain = {
  id: 1440002,
  name: "XRPL EVM Sidechain",
  network: "xrpl",
  nativeCurrency: {
    decimals: 18,
    name: "xrp",
    symbol: "XRP",
  },
  rpcUrls: {
    public: { http: [xrplEvmRpc] },
    default: { http: [xrplEvmRpc] },
  },

  testnet: true,
};

export const { chains, publicClient } = configureChains(
  [xrpl],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Demo EVM app",
  projectId: "EVM_APP",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
