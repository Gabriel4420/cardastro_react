import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { Car } from "../../types/Car";
import { BrandIcon } from "../BrandIcon";
import { PointButton } from "../PointButton";



export const CarListRender = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const [list, setList] = useState<Car[]>(state.cars);
  
  const [pointOpened, setPointOpened] = useState<number>(-1);

  useEffect(() => {
    setList([...state.cars]);
  }, [state.cars]);

  useEffect(() => {
    window.addEventListener("click", hidePoint);
    return () => window.removeEventListener("click", hidePoint);
  }, []);

  const hidePoint = (e: MouseEvent) => {
    if (!(e.target as HTMLDivElement).classList.contains("pointButton")) {
      setPointOpened(-1);
    }
  };

  const editCar = (index: number) => {
    navigate(`/car/${list[index].id}`);
  };

  const removeCar = (index: number) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      dispatch({
        type: "DELETE_CAR",
        payload: {
          id: list[index].id,
        },
      });
    }
  };

  return (
    <>
      {list.length > 0 && (
        <div className="list">
          {list.map((car, index) => (
            <div key={index} className="carItem">
              <div className="column brand">
                <BrandIcon brand={car.brand} />
              </div>
              <div className="column model">{car.model}</div>
              <div className="column year">{car.year}</div>
              <div className="column km">{car.km} Km</div>
              <div className="column price">R$ {car.price.toFixed(2)}</div>
              <div className="column options">
                <PointButton onClick={() => setPointOpened(index)} />
                {pointOpened === index && (
                  <div className="pointWindow">
                    <div
                      className="pointWindowBtn"
                      onClick={() => editCar(index)}
                    >
                      Editar
                    </div>
                    <div
                      className="pointWindowBtn"
                      onClick={() => removeCar(index)}
                    >
                      Excluir
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
