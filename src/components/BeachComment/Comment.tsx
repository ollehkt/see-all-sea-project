import React from 'react'
interface PropsType {
  list: any
}

function Comment({ list }: PropsType) {
  return (
    <div>
      <div className="flex text-xl p-2 ">
        <div className="flex-1 ">{list.data().comment}</div>
        <button className="mx-2 px-2 border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400">
          수정
        </button>
        <button className="mx-2 px-2 border-2 border-cyan-200 rounded-md box-border hover:border-2 hover:text-white hover:bg-cyan-400">
          삭제
        </button>
      </div>
    </div>
  )
}

export default Comment
