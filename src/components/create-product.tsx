import { FC, FormEvent } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "../web3/abi.ts";
import { Button } from "@/components/ui/button.tsx";

const CreateProduct: FC = () => {
  const { data: hash, writeContract } = useWriteContract();

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const productName = formData.get("title") as string;
    const productPrice = formData.get("price") as string;
    const productQuantity = formData.get("quantity") as string;
    writeContract({
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      abi: abi,
      functionName: "createProduct",
      args: [productName, BigInt(productPrice), BigInt(productQuantity)],
    });
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" name="title" placeholder="Enter product name"></input>
        <input type="number" name="price" placeholder="Enter product price"></input>
        <input type="number" name="quantity" placeholder="Enter product quantity"></input>
        <Button type="submit">Create product</Button>
      </form>
      {hash && <p>Hash: {hash}</p>}
    </div>
  );
};

export { CreateProduct };
