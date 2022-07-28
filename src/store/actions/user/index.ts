import { USER_UPDATE, USER_DELETE } from '..'

export const userUpdate = (user: {
  id?: string
  name?: string
  email?: string
  token?: string
}) => ({
  type: USER_UPDATE,
  payload: user
})

export const userDelete = () => {
  localStorage.removeItem(process.env.TOKEN_NAME)

  return {
    type: USER_DELETE
  }
}
