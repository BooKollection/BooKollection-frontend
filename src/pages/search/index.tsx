import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SearchTemplate } from '../../templates'
import { getAllLiteraryWork } from '../../rest'
import { useDispatch } from 'react-redux'
import { loadingUpdate } from '../../store/actions/loading'

const SearchPage = () => {
  const router = useRouter()
  const { type = 'literaryWorks' } = router.query
  const [itens, setItens] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'literaryWorks') {
      getAllLiteraryWork({
        offset: 0,
        limit: 0,
        language: router.locale
      })
        .then(res => setItens(res.data))
        .catch(() => {
          dispatch(loadingUpdate({ open: false }))
          setItens([])
        })
    }
  }, [dispatch, router.locale, type])

  return <SearchTemplate locale={router.locale} itens={itens} type={type} />
}

export default SearchPage
