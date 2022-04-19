import Image from 'next/image'
import { CenterText, CustomText } from '../text'
import { Card } from './style'

const myLoader = ({ src }) => {
  return src
}

export const EditionCard = ({
  name,
  imgSrc,
  edition,
  publisher,
  status
}: {
  name: string
  imgSrc: string
  edition: string
  publisher: string
  status?: boolean
}) => (
  <Card>
    <Image
      loader={myLoader}
      src={imgSrc}
      alt="Picture of the author"
      width={150}
      height={200}
    />
    <CenterText>{name}</CenterText>
    <CenterText>{edition}</CenterText>
    <CustomText>{status}</CustomText>
    <CustomText>{publisher}</CustomText>
  </Card>
)
