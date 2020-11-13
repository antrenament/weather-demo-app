import React from 'react'
import TextField from '@material-ui/core/TextField'
import {InputAdornment} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

const InputLocation = () => {
  return (
    <TextField
      placeholder={"Type your favorite location. Use city name or postal code"}
      multiline
      variant={"outlined"}
      rowsMax={2}
      fullWidth
      InputLabelProps={{ color: 'salmon', focused: true}}
      InputProps={{
        endAdornment: <InputAdornment position={"end"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }}
    />
  )
}

export default InputLocation