import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { i18nFormatData } from '../../../utils/formatData'
import { CenterText } from '../../atoms'

const InfoGrid = ({
  data,
  bgcolor = 'none',
  xs = 3,
  gap = '1rem',
  columns = 12,
  borderRadius = 0,
  itemStyle,
  labelStyle
}: {
  data: unknown
  bgcolor?: string
  xs?: number
  md?: number
  gap?: string
  columns?: number
  borderRadius?: number | string
  itemStyle?: unknown
  labelStyle?: unknown
}) => {
  const { locale } = useRouter()

  return (
    <Grid
      width={'100%'}
      container
      gap={gap}
      paddingX={0}
      paddingY={2}
      columns={columns}
      borderRadius={borderRadius}
      justifyContent="center"
      bgcolor={bgcolor}
    >
      {Object.entries(data).map(([atribute, value], index) => {
        const title = i18nFormatData(atribute, locale)

        const labelValue = i18nFormatData(value, locale)

        return (
          <Grid
            style={itemStyle}
            item
            width={'100%'}
            xs={xs}
            key={'details' + index}
          >
            <CenterText>{title}</CenterText>
            <CenterText style={labelStyle} flexWrap={'wrap'}>
              {labelValue}
            </CenterText>
          </Grid>
        )
      })}
    </Grid>
  )
}

export { InfoGrid }
