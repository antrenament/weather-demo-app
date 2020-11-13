import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import {InputAdornment} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

const InputLocation = ({ setLocations, locations }) => {
  const [input, setInput] = useState('')
  const handleInput = (e) => setInput(e.target.value)
  const updateLocations = input => setLocations([...locations, input])

  const keyPress = (e) => {
    if(e.keyCode == 13){
      updateLocations(input)
    }
  }

  return (
    <TextField
      onChange={handleInput}
      onKeyDown={keyPress}
      placeholder={"Type your favorite location. Use city name or postal code"}
      variant={"outlined"}
      fullWidth
      InputLabelProps={{ color: 'salmon', focused: true}}
      InputProps={{
        endAdornment: <InputAdornment position={"end"}>
          <IconButton onClick={() => updateLocations(input)}>
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }}
    />
  )
}

export default InputLocation