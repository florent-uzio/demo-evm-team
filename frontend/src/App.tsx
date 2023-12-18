import "@rainbow-me/rainbowkit/styles.css";
import { useThemeSetup } from "@ripple/design-system";
import { chains, wagmiConfig } from "./config";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { HomePage } from "./home.page";

function App() {
  useThemeSetup();

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains}>
        <HomePage />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
