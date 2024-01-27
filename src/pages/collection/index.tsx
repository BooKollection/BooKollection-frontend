import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Collection } from '../../templates'
import { i18nFormatPropData } from '../../utils/formatData'
import { getAllUserLiteraryWork, getCollectionValue } from '../../rest'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdate } from '../../store/actions/user'
import { IRootState } from '../../store/reducers'

const MyCollection = () => {
  const dispatch = useDispatch()
  const { locale } = useRouter()
  const { getCollectionInfoPage } = useSelector(
    (state: IRootState) => state.user
  )
  const [pageHasStarted, setPageHasStarted] = useState(false)

  useEffect(() => {
    if (pageHasStarted || getCollectionInfoPage) {
      Promise.all([
        getAllUserLiteraryWork({
          language: locale
        }),
        getCollectionValue({
          coin: 'BRL',
          locale
        })
      ]).then(([literaryWork, collectionVolume]) => {
        setPageHasStarted(true)
        dispatch(
          userUpdate({
            collection: {
              ...literaryWork.data,
              collectionValue: i18nFormatPropData(
                collectionVolume.data,
                locale,
                'Price'
              )
            },
            getCollectionInfoPage: false
          })
        )
      })
    }
  }, [dispatch, getCollectionInfoPage, locale, pageHasStarted])

  return <Collection />
}

export default MyCollection
