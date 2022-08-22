import { dbService } from 'firebase'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
interface PropsType {
  list: any
  isOwner: boolean
}

function Comment({ list, isOwner }: PropsType) {
  const [editing, setEditing] = useState(false)

  const [newComment, setNewComment] = useState(list.data().comment)
  const onDeleteClick = async (id: string) => {
    const ok = confirm('정말 삭제해?')
    if (ok) {
      await deleteDoc(doc(dbService, 'comments', id))
    }
  }
  const toggleEditing = () => {
    setEditing((prev) => !prev)
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.currentTarget.value)
  }
  const onSubmitInput = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault()
    updateDoc(doc(dbService, 'comments', id), { comment: newComment })
    setEditing((prev) => !prev)
  }
  return (
    <div>
      {editing ? (
        <div className="flex justify-center items-center">
          <form onSubmit={(e) => onSubmitInput(e, list.id)}>
            <input
              className="h-[30px] text-lg px-[10px] my-2 rounded-md"
              maxLength={10}
              type="text"
              value={newComment}
              onChange={onChangeInput}
              placeholder="후기를 10자 이내로 입력 해"
            />
            <button className="mx-2 px-2 h-[30px] border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400">
              수정
            </button>
          </form>
          <button
            className="mx-2 px-2 h-[30px] border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400"
            onClick={toggleEditing}
          >
            닫기
          </button>
        </div>
      ) : (
        <div className="flex text-xl p-2 ">
          <div className="flex-1 ">{list.data().comment}</div>
          {isOwner && (
            <>
              <button
                className="mx-2 px-2 border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400"
                onClick={toggleEditing}
              >
                수정
              </button>
              <button
                className="mx-2 px-2 border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400"
                onClick={() => onDeleteClick(list.id)}
              >
                삭제
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Comment
