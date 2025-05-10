import { useAccount } from "wagmi";
import { WalletOptions } from "./components/wallet-options";
import { Account } from "./components/account.tsx";
import { CreateRandomZombie } from "./components/create-random-zombie.tsx";
import { UpdateZombie } from "./components/update-zombie.tsx";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

function App() {
  return (
    <>
      <ConnectWallet />
      <CreateRandomZombie/>
      <br/>
      Update Zombie Name:
      <UpdateZombie/>
    </>
  );
}

export default App;
