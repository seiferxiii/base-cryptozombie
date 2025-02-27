import { FC } from "react";
import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "../web3/contract";

const ReadProducts: FC = () => {
  const { data: products } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getUserProducts",
  });

  return (
    <div>
      {products?.map((value, idx) => (
        <div key={idx}>
          <p>Название {value.name}</p>
          <p>Цена {value.price}</p>
          <p>Кол-во {value.quantity} </p>
        </div>
      ))}
    </div>
  );
};

export { ReadProducts };
