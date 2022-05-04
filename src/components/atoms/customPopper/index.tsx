import { Popper, PopperPlacementType } from '@mui/material'
import React from 'react'
import { MenuBox } from './style'
const CustomPopper = ({
  open,
  children,
  anchorEl,
  placement
}: {
  open: boolean
  children: React.ReactElement
  anchorEl: null | HTMLElement
  placement: PopperPlacementType
}) => {
  const popperId = open ? 'simple-popper' : undefined
  return (
    <Popper id={popperId} open={open} anchorEl={anchorEl} placement={placement}>
      <MenuBox>{children}</MenuBox>
    </Popper>
  )
}
export { CustomPopper }
