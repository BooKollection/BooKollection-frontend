import { Popper, PopperPlacementType } from '@mui/material'
import React from 'react'
import { MenuBox } from './style'
const CustomPopper = ({
  children,
  anchorEl,
  placement
}: {
  children: React.ReactElement
  anchorEl: null | HTMLElement
  placement: PopperPlacementType
}) => {
  const open = Boolean(anchorEl)
  const popperId = open ? 'simple-popper' : undefined
  return (
    <Popper id={popperId} open={open} anchorEl={anchorEl} placement={placement}>
      <MenuBox>{children}</MenuBox>
    </Popper>
  )
}
export { CustomPopper }
