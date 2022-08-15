import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { dbService } from 'firebase'
import CommentList from './CommentList'

interface PropsType {
  areaInfo: {
    sta_nm: string
  }
}

function ViewBeachComments({ areaInfo }: PropsType) {
  const [comment, setComment] = useState('')
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await addDoc(collection(dbService, 'comments'), {
      beach: areaInfo.sta_nm,
      comment,
      createdAt: Date.now(),
    })
    setComment('')
    console.log(data)
  }
  
  return (
    <div className="w-[400px] h-[200px] flex justify-center  rounded-md border-2 border-solid border-cyan-400 text-cyan-400">
      <form onSubmit={onSubmit} className="">
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
        <CommentList areaInfo={areaInfo} comment={comment} />
      </form>
    </div>
  )
}

export default ViewBeachComments
