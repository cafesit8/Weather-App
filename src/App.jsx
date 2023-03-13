import { useEffect, useState } from 'react'
import { Article } from './components/Article'
import { DaysWeather } from './components/DaysWeather'
import { HightlightsCard } from './components/HightlightsCard'
import './App.css'
import { Form } from './components/Form'

function App() {
  const [city, setCity] = useState('Lima')
  const [data, setData] = useState()

  const wheather = async () => {
    try {
      const api = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d8a85ca6485d4aa8a71142737231303&q=${city}&days=6&aqi=no&alerts=no`)
      const resp = await api.json()
      setData( resp) 
    } catch (error) {
      alert('Ocurrió un error al buscar la ciudad')
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    wheather()
  }

  useEffect(()=>{
    wheather()
  }, [])

  return (
    <section className="App bg-[#100e1d] w-full min-h-screen flex text-white max-[700px]:flex-col">
      <Article data={data} />
      <article className='w-[70%] flex flex-col justify-center items-center max-[700px]:w-full py-5'>
          <div className='w-[80%] flex flex-col gap-5 max-[1300px]:w-[90%]'>
            <Form setCity={setCity} handleSubmit={handleSubmit}/>
            <div className='w-full gap-5 m-auto flex justify-between flex-wrap max-[700px]:justify-evenly max-[700px]:mb-6'>
              <DaysWeather data={data} number={1} />
              <DaysWeather data={data} number={2} />
              <DaysWeather data={data} number={3} />
              <DaysWeather data={data} number={4} />
              <DaysWeather data={data} number={5} />
            </div>  
            <div className='flex flex-col'>
              <h3 className='text-[20px] mb-3'>Today's Hightlights</h3>
              <div className='items-container'>
                <HightlightsCard text='Humidity' info={data?.current.humidity} symbol='%' />
                <HightlightsCard text='Air Pressure' info={data?.current.pressure_mb} symbol='mb' />
                <HightlightsCard text='Wind Gust' info={data?.current.gust_kph} symbol='kph' />
                <HightlightsCard text='Visibility' info={data?.current.vis_km} symbol='km' />
              </div>
            </div>
          </div>
      </article>
    </section>
  )
}

export default App
