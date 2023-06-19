import { Suspense, lazy, useEffect, useState } from 'react'
import { Article } from './components/Article'
import { Form } from './components/Form'
const HightlightsCard = lazy(() => import('./components/HightlightsCard'))
const DaysWeather = lazy(() => import('./components/DaysWeather'))
import './App.css'

function App() {
  const [city, setCity] = useState('Lima')
  const [data, setData] = useState()

  const wheather = async () => {
    try {
      const api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d8a85ca6485d4aa8a71142737231303&q=${city}&days=6&aqi=no&alerts=no`)
      if (api.status == 200) {
        const resp = await api.json()
        setData(resp) 
      }else{
        alert('Error, try again')
      }
    } catch (error) {
      alert('Ocurrió un error al buscar la ciudad')
    }
  }

  const searchCity=(e)=>{
    try {
      wheather()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    wheather()
  }, [])

  return (
    <main className="App bg-[#100e1d] w-full min-h-screen flex text-white max-[700px]:flex-col">
      <Article data={data} />
      <section className='w-[70%] flex flex-col justify-center items-center max-[700px]:w-full py-5'>
          <div className='w-[80%] flex flex-col gap-5 max-[1300px]:w-[90%]'>
            <Form setCity={setCity} searchCity={searchCity}/>
            <Suspense fallback={<p>Loading...</p>}>
              <article className='w-full m-auto grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-5'>
                {data && data?.forecast.forecastday.map(day => (
                  <DaysWeather key={day.date} data={day} />
                ))}
              </article>  
              <article className='flex flex-col'>
                <h3 className='text-[20px] mb-3'>Today's Hightlights</h3>
                <div className='items-container'>
                  <HightlightsCard text='Humidity' info={data?.current.humidity} symbol='%' />
                  <HightlightsCard text='Air Pressure' info={data?.current.pressure_mb} symbol='mb' />
                  <HightlightsCard text='Wind Gust' info={data?.current.gust_kph} symbol='kph' />
                  <HightlightsCard text='Visibility' info={data?.current.vis_km} symbol='km' />
                </div>
              </article>
            </Suspense>
          </div>
      </section>
    </main>
  )
}

export default App
