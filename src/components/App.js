import React, {useState} from 'react'
import InputLocation from "./InputLocation/InputLocation";

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
          <p key={index}> {location} </p>
        )
      }
    </>
  )
}


export default App;
