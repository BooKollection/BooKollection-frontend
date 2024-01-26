import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Collection } from '../../templates'
import { i18nFormatPropData } from '../../utils/formatData'
import { getAllUserLiteraryWork, getCollectionValue } from '../../rest'
import { useDispatch } from 'react-redux'
import { userUpdate } from '../../store/actions/user'

const MyCollection = () => {
  const dispatch = useDispatch()
  const { locale } = useRouter()

  useEffect(() => {
    Promise.all([
      getAllUserLiteraryWork({
        language: locale
      }),
      getCollectionValue({
        coin: 'BRL',
        locale
      })
    ]).then(([literaryWork, collectionVolume]) => {
      dispatch(
        userUpdate({
          collection: {
            ...literaryWork.data,
            collectionValue: i18nFormatPropData(
              collectionVolume.data,
              locale,
              'Price'
            )
          }
        })
      )
    })
  }, [dispatch, locale])

  return <Collection />
}

export default MyCollection
