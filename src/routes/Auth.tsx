import React, { useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  AuthProvider,
} from 'firebase/auth'
import { authService } from 'firebase'

function Auth() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [newAccount, setNewAccount] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const changeUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setUser({ ...user, [name]: value })
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (newAccount) {
        //create
        await createUserWithEmailAndPassword(authService, user.email, user.password)
      } else {
        //login
        await signInWithEmailAndPassword(authService, user.email, user.password)
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          setErrorMessage('이미 존재하는 ID라고 해')
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMessage('이메일을 확인해')
        } else if (
          error.message ===
          'Firebase: Password should be at least 6 characters (auth/weak-password).'
        ) {
          setErrorMessage('비밀번호를 6자 이상 입력해')
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
          setErrorMessage('존재하지 않는 아이디라고 해')
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
          setErrorMessage('비밀번호를 확인해')
        } else if (
          error.message ===
          'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
        ) {
          setErrorMessage('잠시 후 다시 시도해')
        }
      }
    }
  }
  useEffect(() => {
    setErrorMessage('')
  }, [newAccount])
  const toggleAccount = () => {
    setNewAccount((prev) => !prev)
  }
  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    let provider: GoogleAuthProvider | GithubAuthProvider
    if (name === 'google') {
      provider = new GoogleAuthProvider()
      await signInWithPopup(authService, provider)
    } else if (name === 'github') {
      provider = new GithubAuthProvider()
      await signInWithPopup(authService, provider)
    }
  }
  return (
    <div className="w-[500px] h-[500px] mx-auto">
      <h1 className="text-3xl text-center text-white my-10 ">
        {newAccount ? '회원가입 해!' : '로그인 해!'}
      </h1>
      <form className="flex flex-col w-[200px] mx-auto" onSubmit={onSubmitHandler}>
        <input
          className={
            errorMessage === '이메일을 확인해'
              ? 'h-[30px] text-lg my-3 rounded-sm p-2 border-solid border-red-600 border-2'
              : 'h-[30px] text-lg my-3 rounded-sm p-2 '
          }
          onChange={changeUserInputHandler}
          type="email"
          placeholder="이메일"
          required
          name="email"
          value={user.email}
        />
        <input
          className={
            errorMessage === '비밀번호를 6자 이상 입력해'
              ? 'h-[30px] text-lg my-3 rounded-sm p-2 border-solid border-red-600 border-2'
              : 'h-[30px] text-lg my-3 rounded-sm p-2 '
          }
          onChange={changeUserInputHandler}
          type="password"
          placeholder="패스워드"
          required
          name="password"
          value={user.password}
        />
        <div className="text-center font text-lg text-red-600">{errorMessage}</div>
        <input
          className="h-[40px] text-white text-xl text-center my-4 border-2 border-cyan-600  cursor-pointer box-border rounded-sm flex justify-center items-center hover:border-none hover:text-cyan-300 hover:bg-white"
          type="submit"
          value={newAccount ? '회원가입 해?' : '로그인 해?'}
        />
      </form>
      {newAccount ? (
        <div className="flex justify-center my-4 w-[110px] mx-auto  text-white text-2xl ">
          <button
            className="underline text-black hover:text-white hover:underline"
            onClick={toggleAccount}
          >
            로그인 해?
          </button>
        </div>
      ) : (
        <div className="flex justify-center my-4 w-[130px] mx-auto  text-white text-2xl ">
          <button
            className="underline text-black hover:text-white hover:underline"
            onClick={toggleAccount}
          >
            회원가입 해?
          </button>
        </div>
      )}
    </div>
  )
}

export default Auth
