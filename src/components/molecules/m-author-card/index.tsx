import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { i18n } from '../../../shared/i18n'
import { Card, CenterText, CustomPopover, StyledButton } from '../../atoms'
import { CustomButtonBox } from '../m-volume-card/style'
import { useRouter } from 'next/router'
import { DialogDetails } from '../m-dialog-details'
import { AuthorDetails } from './detais'
import { GET_ALL_AUTHOR_LITERARY_WORK_QUERY } from '../../../graphql'
import { clientGraphql } from '../../../graphql/client-graphql'

export const AuthorCard = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [literaryWorks, setLiteraryWorks] = useState(null)
  const { locale } = useRouter()
  const { details } = i18n[locale]
  const { imageUrl, name } = data
  const getAllAuthorLiteraryWorks = () => {
    clientGraphql
      .query({
        query: GET_ALL_AUTHOR_LITERARY_WORK_QUERY,
        variables: {
          offset: 0,
          limit: 10,
          language: locale.replace('-', ''),
          author: data.id
        }
      })
      .then(res => setLiteraryWorks(res.data.getAllAuthorLiteraryWorks))
  }
  useEffect(() => {
    if (open && !literaryWorks) {
      getAllAuthorLiteraryWorks()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Card open={open} onClick={handleClick}>
        <Box display="flex" position="relative">
          <Image
            unoptimized={true}
            src={imageUrl}
            alt="top"
            width={150}
            height={180}
            style={{ position: 'absolute' }}
          />
        </Box>
        <CenterText>{name}</CenterText>
        <CustomPopover open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <CustomButtonBox width="12em">
            <StyledButton style={{ width: '100%' }} onClick={handleOpen}>
              {details}
            </StyledButton>
          </CustomButtonBox>
        </CustomPopover>
      </Card>
      <DialogDetails open={open} setOpen={setOpen} title={details}>
        <AuthorDetails
          data={{ ...data, literaryWorks: literaryWorks }}
          locale={locale}
        />
      </DialogDetails>
    </>
  )
}
