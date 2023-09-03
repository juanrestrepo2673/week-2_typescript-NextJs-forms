import Link from 'next/link'
 
function Login() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/login/register">Register</Link>
      </li>
      <a href="/login/register">Register  with anchor</a>
    </ul>
  )
}
 
export default Login