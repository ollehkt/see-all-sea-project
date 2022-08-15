import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { authService } from 'firebase'
import { Link } from 'react-router-dom'

function Auth() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [newAccount, setNewAccount] = useState(false)
  const [error, setError] = useState<any>('')
  let data
  const changeUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setUser({ ...user, [name]: value })
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (newAccount) {
        //create
        data = await createUserWithEmailAndPassword(authService, user.email, user.password)
      } else {
        //login
        data = await signInWithEmailAndPassword(authService, user.email, user.password)
      }
      console.log(data)
    } catch (error: any) {
      console.log(error.message)
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('이미 존재하는 ID라고 해')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('이메일을 확인해')
      } else if (
        error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'
      ) {
        setError('비밀번호를 6자 이상 입력해')
      } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setError('존재하지 않는 아이디라고 해')
      } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setError('비밀번호를 확인해')
      } else if (
        error.message ===
        'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
      ) {
        setError('잠시 후 다시 시도해')
      }
    }
  }
  useEffect(() => {
    setError('')
  }, [error.message, newAccount])
  const toggleAccount = () => {
    setNewAccount((prev) => !prev)
  }
  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    let provider: any
    if (name === 'google') {
      provider = new GoogleAuthProvider()
    } else if (name === 'github') {
      provider = new GithubAuthProvider()
    }
    const data = await signInWithPopup(authService, provider)
    console.log(data)
  }
  return (
    <div className="w-[500px] h-[500px] mx-auto">
      <h1 className="text-3xl text-center text-white my-10 ">
        {newAccount ? '회원가입 해!' : '로그인 해!'}
      </h1>
      <form className="flex flex-col w-[200px] mx-auto" onSubmit={onSubmitHandler}>
        <input
          className={
            error === '이메일을 확인해'
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
            error === '비밀번호를 6자 이상 입력해'
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
        <div className="text-center font text-lg text-red-600">{error}</div>
        <input
          className="h-[40px] text-white text-xl text-center my-4 border-2 border-cyan-600  cursor-pointer box-border rounded-sm flex justify-center items-center hover:border-none hover:text-cyan-300 hover:bg-white"
          type="submit"
          value={newAccount ? '회원가입 해?' : '로그인 해?'}
        />
      </form>
      <div className="flex justify-center w-[350px] box-border  mx-auto">
        <button
          onClick={onSocialClick}
          name="google"
          className="h-[40px] px-[10px] box-border mx-[10px] text-white text-xl text-center my-4 border-2 border-cyan-600  cursor-pointer  rounded-sm flex justify-center items-center hover:border-none hover:text-cyan-300 hover:bg-white"
        >
          구글로 로그인 해
        </button>

        <button
          onClick={onSocialClick}
          name="github"
          className="h-[40px] px-[10px] box-border text-white text-xl text-center my-4 border-2 border-cyan-600  cursor-pointer  rounded-sm flex justify-center items-center hover:border-none hover:text-cyan-300 hover:bg-white"
        >
          깃허브로 로그인 해
        </button>
      </div>
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
