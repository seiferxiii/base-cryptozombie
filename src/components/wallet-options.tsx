import { useConnect } from "wagmi";
import { FC } from "react";
import { WalletOption } from "@/components/wallet-option.tsx";

const WalletOptions: FC = () => {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <WalletOption key={connector.uid} connector={connector} onClick={() => connect({ connector })} />
  ));
};

export { WalletOptions };
