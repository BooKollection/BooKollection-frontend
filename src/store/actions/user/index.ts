import { USER_UPDATE, USER_DELETE } from '..'

export const userUpdate = (user: {
  id?: string
  name?: string
  email?: string
}) => ({
  type: USER_UPDATE,
  payload: user
})

export const userDelete = () => {
  return {
    type: USER_DELETE
  }
}
