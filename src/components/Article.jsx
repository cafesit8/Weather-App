import { IoLocation } from "react-icons/io5";
import { nombreDelDiaSegunFecha } from "../day";

export function Article({ data }) {
  return (
    <article className="wheather w-[30%] min-h-screen flex justify-center items-center max-[700px]:w-full">
      <div className="flex flex-col items-center h-[550px] justify-between">
        <img className="w-[250px]" alt="" src={data?.current.condition.icon} />
        <h1 className="text-center text-[70px] relative">
          {data?.current.temp_c}
          <span className="text-white/50 text-[30px]">°C</span>
        </h1>
        <h2 className="text-center text-[30px] text-white/60">
          {data?.current.condition.text}
        </h2>
        <div>
          <div className="grid place-content-center">
            <h4 className="text-[15px] text-white/60">
              Today -{" "}
              {nombreDelDiaSegunFecha(data?.forecast.forecastday[0].date)}
            </h4>
            <span className="text-[13px] text-center text-white/60">
              {data?.forecast.forecastday[0].date}
            </span>
          </div>
        </div>
        <h6 className="flex items-center justify-center text-white/70">
          <IoLocation />
          {data?.location.country} - {data?.location.name}
        </h6>
      </div>
    </article>
  );
}
