import {nombreDelDiaSegunFecha} from '../day'

export default function DaysWeather({data}) {
  return (
    <div className="bg-[#1E213A] rounded-md p-3 flex flex-col justify-between">
      <h3 className="text-center">
        {nombreDelDiaSegunFecha(data.date)}
      </h3>
      <img className='w-[80%] m-auto' src={data.day.condition.icon} />
      <div className="flex justify-between">
        <h5>{data?.day.maxtemp_c}°C</h5>
        <h6 className="text-white/60">
          {data?.day.mintemp_c}°C
        </h6>
      </div>
    </div>
  );
}
