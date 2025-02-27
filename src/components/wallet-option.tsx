import { Connector } from "wagmi";
import { FC, useEffect } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button.tsx";

type Props = {
  connector: Connector;
  onClick: () => void;
};

const WalletOption: FC<Props> = ({ connector, onClick }) => {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button disabled={!ready} onClick={onClick}>
      {connector.name}
    </Button>
  );
};

export { WalletOption };
