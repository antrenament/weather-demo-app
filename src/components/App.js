import React, {useState} from 'react'
import InputLocation from "./InputLocation/InputLocation";
import WeatherCard from "./WeatherCard/WeatherCard";

const App = () => {
  const [locations, setLocations] = useState([])

  return (
    <>
      <h1>Welcome to WeatherTime app</h1>
      <InputLocation
        setLocations={setLocations}
        locations={locations}
      />
      {
        locations.length > 0 && locations.map((location, index) =>
          <WeatherCard location={location} key={index}/>
        )
      }
    </>
  )
}


export default App;
