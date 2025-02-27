import { abi } from "@/web3/abi.ts";

export const wagmiContractConfig = {
  address: import.meta.env.VITE_CONTRACT_ADDRESS,
  abi: abi,
} as const;
