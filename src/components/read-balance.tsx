import { FC } from "react";
import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "../web3/contract";

const ReadBalance: FC = () => {
  const { data: balance } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getBalance",
  });
  return <div>Balance: {balance?.toString()}</div>;
};

export { ReadBalance };
