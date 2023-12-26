import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SearchTemplate } from '../../templates'
import { getAllLiteraryWork } from '../../rest'

const SearchPage = () => {
  const router = useRouter()
  const { type = 'literaryWorks' } = router.query
  const [itens, setItens] = useState(null)

  useEffect(() => {
    if (type === 'literaryWorks') {
      getAllLiteraryWork({
        offset: 0,
        limit: 0,
        language: router.locale
      })
        .then(res => setItens(res.data))
        .catch(() => setItens([]))
    }
  })

  return <SearchTemplate locale={router.locale} itens={itens} type={type} />
}

export default SearchPage
