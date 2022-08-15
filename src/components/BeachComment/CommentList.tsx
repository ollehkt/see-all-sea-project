import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore'
import { dbService } from 'firebase'

interface PropsType {
  areaInfo: {
    sta_nm: string
  }
  comment: string
}

function CommentList({ areaInfo, comment }: PropsType) {
  const [commentsLists, setCommentsLists] = useState<any>([])
  const [filteredCommentsLists, setFilteredCommentsList] = useState()

  const getCommentsList = async () => {
    const dbComments = await getDocs(collection(dbService, 'comments'))
    // setCommentsLists(() => dbComments.data())
    // dbComments.forEach((document: any) =>
    //   setCommentsLists((prev: any) => [document.data(), ...prev])
    // )
  }
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(dbService, 'comments'), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setCommentsLists(snapshot.docs)
      }
    )
    return () => unsubscribe()
  }, [])
  const filteredList = commentsLists.filter((list: any) => list.data().beach === areaInfo.sta_nm)
  // console.log(filteredList)

  return (
    <div>
      {filteredList.map((list: any, index: number) => (
        <div key={index}>
          <p>{list.data().comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
