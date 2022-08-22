import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { dbService } from 'firebase'
import CommentList from './CommentList'
import { useStoreSelector } from 'store/store'

interface PropsType {
  areaInfo: {
    sta_nm: string
  }
}

function ViewBeachComments({ areaInfo }: PropsType) {
  const [comment, setComment] = useState('')
  const user = useStoreSelector((state) => state.userInfo.user.payload)

  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await addDoc(collection(dbService, 'comments'), {
      beach: areaInfo.sta_nm,
      comment,
      createdAt: Date.now(),
      creator: user,
    })
    setComment('')
  }

  return (
    <div className="w-[400px] h-[200px]  overflow-y-scroll rounded-md border-2 border-solid border-cyan-400 text-cyan-400 ">
      <form onSubmit={onSubmit} className="flex justify-center ">
        <input
          className="h-[30px] text-lg px-[10px] my-2 rounded-md"
          maxLength={10}
          type="text"
          value={comment}
          onChange={changeComment}
          placeholder="후기를 10자 이내로 입력 해"
        />
        <button className="w-[80px] h-[30px] text-lg p-[2px] my-2 mx-2 border-2 border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-white">
          등록해
        </button>
      </form>
      <CommentList areaInfo={areaInfo} comment={comment} />
    </div>
  )
}

export default ViewBeachComments
