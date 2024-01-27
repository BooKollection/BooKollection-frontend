import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  CenterText,
  CustomText,
  Card,
  CustomPopover,
  StyledButton
} from '../../atoms'
import { i18n } from '../../../shared/i18n'
import { Box } from '@mui/material'
import { DialogDetails } from '../../molecules'
import { Edition } from '../o-edition'
import { EditionDetailsType } from '../o-edition/details'
import { Status } from '../../../shared/enum/status'

export const EditionCard = ({ data }: { data: EditionDetailsType }) => {
  const { locale } = useRouter()
  const { details } = i18n[locale]
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const {
    name,
    imageUrl,
    edition,
    publisher,
    status,
    totalVolumes,
    adquiredVolumes
  } = data
  const [open, setOpen] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <>
      <Card open={Boolean(anchorEl)} onClick={handleClick}>
        <Image
          src={imageUrl}
          alt="Picture of the edition"
          width={150}
          height={200}
          unoptimized={true}
        />
        <CenterText fontWeight={'bold'}>{name}</CenterText>
        <CenterText>{edition}</CenterText>
        <CustomText>{publisher}</CustomText>
        {status && (
          <CustomText
            padding="1px 7px"
            borderRadius={1}
            bgcolor={
              status === 'Complete'
                ? '#04C900'
                : status === 'Hiatus'
                  ? '#838269'
                  : '#faf324be'
            }
            textAlign="center"
          >
            {i18n[locale][status]}
          </CustomText>
        )}
        {totalVolumes && adquiredVolumes && (
          <CustomText>
            {adquiredVolumes} /{' '}
            {status !== Status.Complete ? ' ???' : totalVolumes}
          </CustomText>
        )}
        <CustomPopover open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <Box width="10em">
            <StyledButton
              style={{ width: '100%' }}
              onClick={() => {
                setOpen(true)
                setAnchorEl(null)
              }}
            >
              {details}
            </StyledButton>
          </Box>
        </CustomPopover>
      </Card>
      <DialogDetails
        title={name + ' ' + edition}
        open={open}
        setOpen={() => setOpen(false)}
      >
        <Edition editionDetails={data} />
      </DialogDetails>
    </>
  )
}
