import { useContext, useState } from "react";
import { Car } from "../types/Car";
import { Context } from "../contexts/Context";
import { BlankList, CarListRender } from "../components";

export const CarList = () => {
  const { state } = useContext(Context);
  const [list] = useState<Car[]>(state.cars);
  return (
    <div className="container">
      <div className="tableHeader">
        <div className="tableHeaderLeft">Carros disponíveis</div>
        <div className="tableHeaderRight">Total 6 carros</div>
      </div>

      {list.length === 0 ? <BlankList /> : <CarListRender />}
    </div>
  );
};
