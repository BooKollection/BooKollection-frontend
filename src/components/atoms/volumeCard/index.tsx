import Image from 'next/image'
import { CenterText, CustomText } from '../text'
import { Card } from './style'

const myLoader = ({ src }) => {
  return src
}

export const VolumeCard = ({
  name,
  imgSrc,
  edition,
  publisher,
  status,
  number,
  owned
}: {
  name: string
  imgSrc: string
  edition: string
  publisher: string
  status?: boolean
  number?: number
  owned: boolean
}) => (
  <Card owned={owned}>
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
    <CustomText> Volume {number}</CustomText>
  </Card>
)
