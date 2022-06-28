import React from 'react'
import { MenuBox, StyledPopover } from './style'
const CustomPopover = ({
  open,
  children,
  anchorEl
}: {
  open: boolean
  children: React.ReactElement
  anchorEl: null | HTMLElement
}) => {
  return (
    <StyledPopover
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={open}
      anchorEl={anchorEl}
    >
      <MenuBox>{children}</MenuBox>
    </StyledPopover>
  )
}
export { CustomPopover }
