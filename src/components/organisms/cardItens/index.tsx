import React from 'react'
import { EditionDetailsType } from '../edition/details'
import { EditionCard } from '../editionCard'
import { VolumeCard, VolumeType } from '../../molecules/volumeCard'
import { CardGridBox } from './style'

const CardGrid = ({
  volumes,
  editions
}: {
  volumes?: VolumeType[]
  editions?: EditionDetailsType[]
}) => (
  <CardGridBox container>
    {volumes
      ? volumes.map((data: VolumeType, index) => (
          <VolumeCard key={index} data={data} />
        ))
      : editions.map((data, index) => <EditionCard key={index} data={data} />)}
  </CardGridBox>
)

export { CardGrid }
