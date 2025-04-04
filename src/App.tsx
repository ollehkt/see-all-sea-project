import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Router from 'routes/Router'
import TheHeader from 'components/TheHeader'
import TheFooter from 'components/TheFooter'
import { authService } from 'firebase'
import { useAppDispatch } from 'store/store'
import { userActions } from 'store/userInfo/userSlice'

function App() {
  const [init, setInit] = useState(false)
  const [isLogged, setIsLogged] = useState<any>(authService.currentUser)
  const [userObj, setUserObj] = useState<any>(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogged(true)
        dispatch(userActions.getUser({ payload: user.uid }))
      } else {
        setIsLogged(false)
      }
      navigate('/')
      setInit(true)
    })
  }, [])

  return (
    <>
      <div className="bg-[url('/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-on-blue-sky-background_74190-13665.webp')] bg-no-repeat bg-cover">
        <TheHeader isLogged={isLogged} init={init} />
        <Router />
      </div>
      <TheFooter />
    </>
  )
}

export default App
{
}
