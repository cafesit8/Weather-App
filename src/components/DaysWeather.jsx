import {nombreDelDiaSegunFecha} from '../day'

export function DaysWeather({data, number}) {
  return (
    <div className="bg-[#1E213A] h-[190px] w-[130px] rounded-md p-3 flex flex-col justify-between">
      <h3 className="text-center">
        {nombreDelDiaSegunFecha(data?.forecast.forecastday[number].date)}
      </h3>
      <img src={data?.forecast.forecastday[number].day.condition.icon} />
      <div className="flex justify-between">
        <h6>{data?.forecast.forecastday[number].day.maxtemp_c}°C</h6>
        <h6 className="text-white/60">
          {data?.forecast.forecastday[number].day.mintemp_c}°C
        </h6>
      </div>
    </div>
  );
}
