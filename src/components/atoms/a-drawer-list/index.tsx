import {
  List,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/reducers'

export const DrawerList = ({
  titles,
  iconList,
  open
}: {
  titles: { label: string; link: string }[]
  iconList: React.JSX.Element[]
  open: boolean
}) => {
  const { push, asPath } = useRouter()

  const { token } = useSelector((state: IRootState) => state.user)
  const redirect = (link: string) => {
    push(link)
  }
  const disableButtonOpenedPage = (link: string) =>
    asPath.split('/')[1].trim() === link.split('/')[1].trim()
  return (
    <List style={{ height: 'calc(100% - 7em)' }}>
      {titles.map(
        ({ label, link }: { label: string; link: string }, index: number) => {
          const disabled =
            (link === '/collection' && !token) || disableButtonOpenedPage(link)

          return (
            <Tooltip
              key={'navbar-drawer-' + index}
              title={open ? '' : label}
              placement="right"
            >
              <ListItem
                button
                onClick={() => {
                  if (!disabled) redirect(link)
                }}
                style={{
                  cursor: 'pointer',
                  opacity: !disabled ? '1' : '0.5'
                }}
                disabled={disabled}
              >
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Tooltip>
          )
        }
      )}
    </List>
  )
}
