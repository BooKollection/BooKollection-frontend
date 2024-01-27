import { USER_UPDATE, USER_DELETE } from '..'

export const userUpdate = (user: {
  id?: string
  name?: string
  email?: string
  token?: string
  getCollectionInfoPage?: boolean
  collection?: {
    totalLiteraryWorks: number
    literaryWorks: unknown[]
    totalVolumes: number
    collectionValue: string
    completeLiteraryWorks: number
    memberSince: Date
  }
}) => ({
  type: USER_UPDATE,
  payload: user
})

export const userDelete = () => {
  localStorage.removeItem(process.env.tokenName)

  return {
    type: USER_DELETE
  }
}
