import { useRouter } from 'next/router'
import { BoxContainer, CustomText } from '../../components/atoms'
import { CardGrid } from '../../components/organisms'
import { i18n } from '../../shared/i18n'

const Homepage = ({ volumes, editions }) => {
  const { locale } = useRouter()
  const { addVolumes, literaryWorksAdd } = i18n[locale]
  return (
    <BoxContainer>
      <CustomText variant="h6" margin="15px 0px">
        {addVolumes}
      </CustomText>
      <CardGrid volumes={volumes} />
      <CustomText variant="h6" margin="25px 0px 15px 0px">
        {literaryWorksAdd}
      </CustomText>
      <CardGrid editions={editions} />
    </BoxContainer>
  )
}

export { Homepage }
