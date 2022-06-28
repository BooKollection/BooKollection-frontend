import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Logout from '@mui/icons-material/Logout'
import { CustomText } from '../a-text'
import { BoxStyled, paperStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'
import { userDelete } from '../../../store/actions/user'

export const MenuI = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { name } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch()

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const logout = () => {
    localStorage.removeItem(process.env.tokenName)
    dispatch(userDelete())
  }
  return (
    <React.Fragment>
      <BoxStyled>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {name ? name.charAt(0).toUpperCase() : 'BK'}
            </Avatar>
          </IconButton>
        </Tooltip>
      </BoxStyled>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={paperStyle}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <CustomText>Logout</CustomText>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
