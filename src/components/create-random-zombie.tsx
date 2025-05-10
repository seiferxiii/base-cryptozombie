import { FC, FormEvent } from "react";
import { useWriteContract } from "wagmi";
import { zombie_abi } from "../web3/abi.ts";
import { Button } from "@/components/ui/button.tsx";

const CreateRandomZombie: FC = () => {
  const { data: hash, writeContract } = useWriteContract();

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const zombieName = formData.get("name") as string;
    writeContract({
      address: import.meta.env.VITE_ZOMBIE_ADDRESS,
      abi: zombie_abi,
      functionName: "createRandomZombie",
      args: [zombieName],
    });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" placeholder="Enter zombie name"></input>
        <Button type="submit">Create random zombie</Button>
      </form>
      {hash && <p>Hash: {hash}</p>}
    </div>
  );
};

export { CreateRandomZombie };
