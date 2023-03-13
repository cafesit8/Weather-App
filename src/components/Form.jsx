import { ImSearch } from 'react-icons/im'

export function Form({setCity, handleSubmit}) {

    const handleCity=(e)=>{
        setCity(e.target.value)
      }

  return (
    <form onSubmit={handleSubmit} className="w-[400px] flex max-[445px]:w-full">
      <input
        onChange={handleCity}
        className="self-start bg-[#1E213A] py-2 px-4 w-[90%] rounded-lg text-white"
        type="text"
        placeholder="Write city name, example: Lima"
      />
      <button className="bg-[#1E213A] w-[10%] ml-2 rounded-md grid place-content-center">
        <ImSearch />
      </button>
    </form>
  );
}
