import * as React from 'react'
import { alpha, styled, useTheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.15),
  width: 120,
  borderRadius: '10px 0px 0px 10px',
  height: '39px'
}))

export const SelectionDropdown = () => {
  const [age, setAge] = React.useState('10')
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <FormControlWrapper>
      <Select
        variant="standard"
        disableUnderline
        size="small"
        value={age}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
        style={{ border: 'none', padding: '6px 5px 5px 10px' }}
      >
        <MenuItem value={10}>Autor</MenuItem>
        <MenuItem value={20}>Obra</MenuItem>
        <MenuItem value={30}>Volume</MenuItem>
      </Select>
    </FormControlWrapper>
  )
}
