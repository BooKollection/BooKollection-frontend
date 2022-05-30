import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Tooltip, Fade } from '@mui/material'
import { Search as SearchIcon, Close } from '@mui/icons-material'
import { i18n } from '../../../shared/i18n'
import { StyledButton } from '../../atoms/button'

import {
  Search,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase
} from './style'
import { SelectionDropdown } from '../../atoms/selectionDropdown'

export const SearchBar = ({
  drawerOpen,
  handleDrawerClose
}: {
  drawerOpen: boolean
  handleDrawerClose: () => void
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    handleDrawerClose()
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  const { locale } = useRouter()
  const { search } = i18n[locale]

  useEffect(() => {
    drawerOpen && open && handleClose()
  }, [drawerOpen])

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
      {open && (
        <SearchContainer>
          <SelectionDropdown />
          <Search sx={{ display: 'flex' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: '100%' }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
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
