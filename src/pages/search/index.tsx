import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GET_ALL_LITERARY_WORK_QUERY } from '../../graphql'
import { clientGraphql } from '../../graphql/client-graphql'
import { SearchTemplate } from '../../templates'

const SearchPage = () => {
  const router = useRouter()
  const { text = '', type = 'literaryWorks' } = router.query
  const [itens, setItens] = useState(null)

  const getAllLiteraryWorks = () => {
    clientGraphql
      .query({
        query: GET_ALL_LITERARY_WORK_QUERY,
        variables: {
          offset: 0,
          limit: 0,
          language: router.locale.replace('-', ''),
          name: text
        }
      })
      .then(res => setItens(res.data.getAllLiteraryWorks))
  }

  useEffect(() => {
    if (type === 'literaryWorks') {
      getAllLiteraryWorks()
    }
  })

  return <SearchTemplate locale={router.locale} itens={itens} type={type} />
}

export default SearchPage
