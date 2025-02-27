import { createConfig, http, injected } from "@wagmi/core";
import { hardhat } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [hardhat],
  connectors: [injected()],
  transports: {
    [hardhat.id]: http(),
  },
});
