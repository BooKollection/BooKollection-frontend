import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Tooltip, Fade } from '@mui/material'
import { Search as SearchIcon, Close } from '@mui/icons-material'
import { i18n } from '../../../shared/i18n'
import { StyledButton } from '../../atoms/a-button'

import {
  Search,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase
} from './style'
import { SelectionDropdown } from '../../atoms/a-selection-dropdown'

export const SearchBar = ({
  drawerOpen,
  handleDrawerClose
}: {
  drawerOpen: boolean
  handleDrawerClose: () => void
}) => {
  const router = useRouter()
  const { locale } = router
  const [searchInput, setSearchInput] = useState('')
  const { search } = i18n[locale]
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    handleDrawerClose()
    setOpen(true)
  }
  const options = [
    { value: 'literaryWorks', label: i18n[locale].literaryWork },
    { value: 'author', label: i18n[locale].author }
    // { value: 'volume', label: i18n[locale].volume }
  ]
  const [dropdownValue, setDropdownValue] = useState(options[0].label)
  const i18nOptions = options.map(({ label }) => label)
  const setDropdown = (value: string) => {
    const filteredValue = getDropdownServerData(value)
    setDropdownValue(filteredValue)
  }
  const getDropdownServerData = label =>
    options.filter(opt => label === opt.label)[0].value
  const handleClose = () => setOpen(false)
  useEffect(() => {
    drawerOpen && open && handleClose()
  }, [drawerOpen, open])
  const searchHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push({
      pathname: 'search',
      query: {
        text: searchInput,
        type: getDropdownServerData(dropdownValue)
      }
    })
  }
  const keyPress = e => {
    if (e.keyCode == 13) {
      searchHandler(e)
    }
  }
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
      {open && (
        <SearchContainer>
          <SelectionDropdown
            width={200}
            options={i18nOptions}
            setValue={setDropdown}
            value={dropdownValue}
          />
          <Search sx={{ display: 'flex' }}>
            <SearchIconWrapper onClick={searchHandler}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: '100%' }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchInput}
              onChange={e => {
                setSearchInput(e.target.value)
              }}
              onKeyDown={keyPress}
            />
          </Search>
        </SearchContainer>
      )}

      <StyledButton onClick={() => (open ? handleClose() : handleOpen())}>
        {open ? (
          <Fade in>
            <Tooltip title="Fechar">
              <Close />
            </Tooltip>
          </Fade>
        ) : (
          <Fade in>
            <Tooltip title={search}>
              <SearchIcon />
            </Tooltip>
          </Fade>
        )}
      </StyledButton>
    </Box>
  )
}
