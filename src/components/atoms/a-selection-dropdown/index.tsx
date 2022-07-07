import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material'

interface SelectionDropdownProps {
  options: string[]
  width?: number
  value: string
  setValue: (value: string) => void
}
export const SelectionDropdown = ({
  options,
  width,
  value,
  setValue
}: SelectionDropdownProps) => {
  const theme = useTheme()
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }
  const FormControlWrapper = styled(FormControl)(({ theme }) => ({
    background: alpha(theme.palette.common.white, 0.15),
    width: width ? width : 120,
    borderRadius: '10px 0px 0px 10px',
    height: '39px'
  }))

  return (
    <FormControlWrapper>
      <Select
        variant="standard"
        disableUnderline
        size="small"
        value={value}
        onChange={handleChange}
        style={{ border: 'none', padding: '6px 5px 5px 10px' }}
        sx={{
          '.MuiSelect-icon': {
            color: theme.palette.primary.contrastText
          },
          '.MuiSelect-outlined': {
            color: theme.palette.primary.contrastText
          },
          '.MuiSelect-select ': { color: theme.palette.primary.contrastText }
        }}
      >
        {options.map((option: string, index: number) => (
          <MenuItem key={'dropdown' + index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControlWrapper>
  )
}
