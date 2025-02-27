import { useAccount } from "wagmi";
import { WalletOptions } from "./components/wallet-options";
import { ReadBalance } from "./components/read-balance";
import { ReadProducts } from "./components/read-user-products";
import { CreateProduct } from "./components/create-product";
import { Account } from "./components/account.tsx";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

function App() {
  return (
    <>
      <ConnectWallet />
      <ReadBalance />
      <ReadProducts />
      <CreateProduct />
    </>
  );
}

export default App;
