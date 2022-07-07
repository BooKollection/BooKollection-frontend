import { BoxContainer, CustomText } from '../../components/atoms'
import { CardGrid } from '../../components/organisms'
import { i18n } from '../../shared/i18n'

const SearchTemplate = ({ locale, itens, type }) => {
  const itensType = type === 'literaryWorks' ? 'editions' : 'volumes'
  const cardGridProp = {
    [itensType]: itens
  }
  return (
    <BoxContainer>
      <CustomText variant="h6" margin="15px 0px">
        {i18n[locale][type]}
      </CustomText>
      <CardGrid {...cardGridProp} />
    </BoxContainer>
  )
}

export { SearchTemplate }
