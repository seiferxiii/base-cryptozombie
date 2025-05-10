import { FC, FormEvent } from "react";
import { useWriteContract } from "wagmi";
import { zombie_abi } from "../web3/abi.ts";
import { Button } from "@/components/ui/button.tsx";

const UpdateZombie: FC = () => {
  const { data: hash, writeContract } = useWriteContract();

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const zombieId = BigInt(formData.get("zombieId") as string);
    const zombieName = formData.get("name") as string;
    writeContract({
      address: import.meta.env.VITE_ZOMBIE_ADDRESS,
      abi: zombie_abi,
      functionName: "updateName",
      args: [zombieId, zombieName],
    });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" name="zombieId" placeholder="Enter zombie id"></input>
        <input type="text" name="name" placeholder="Enter new zombie name"></input>
        <Button type="submit">Update zombie name</Button>
      </form>
      {hash && <p>Hash: {hash}</p>}
    </div>
  );
};

export { UpdateZombie };
