import React from 'react'
import { EditionDetails } from './details'
import { BoxContainer } from '../../components/atoms/boxContainer'
import { CustomText } from '../../components/atoms/text'

const mock = {
  name: 'One piece',
  details: {
    edition: 'Luxo',
    status: 'Em andamento',
    publisher: 'Panini',
    totalVolumes: '102',
    format: '15x25',
    author: 'Echiro Oda',
    ageGroup: '12+',
    bagShape: '15x25',
    language: 'PT-BR',
    country: 'Japonesa',
    paperType: 'Jornal',
    categories: 'Ação, Aventura, Sobrenatural',
    synopsis:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet ligula cursus, ullamcorper ex id, ornare dui.'
  }
}
const Edition = () => {
  return (
    <BoxContainer>
      <CustomText variant="h6" marginRight={2}>
        {mock.name}
      </CustomText>
      <div
        style={{
          width: '100%',
          border: '1px solid white',
          padding: '12px 0px',
          borderRadius: '10px'
        }}
      >
        <EditionDetails details={mock.details} />
      </div>
    </BoxContainer>
  )
}

export default Edition
