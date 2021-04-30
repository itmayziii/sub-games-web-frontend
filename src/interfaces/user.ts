export default interface User {
  aud: string
  exp: number
  iat: number
  iss: string
  roles: string[]
  sub: string
}
