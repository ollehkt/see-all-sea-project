import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs, onSnapshot, query, orderBy } from 'firebase/firestore'
import { dbService } from 'firebase'
import { useStoreSelector } from 'store/store'
import Comment from './Comment'

interface PropsType {
  areaInfo: {
    sta_nm: string
  }
  comment: string
  user: {}
}

function CommentList({ areaInfo, comment, user }: PropsType) {
  console.log(user)
  const [commentsLists, setCommentsLists] = useState<any>([])
  const [filteredCommentsLists, setFilteredCommentsList] = useState()

  // 옛날 방식
  // const getCommentsList = async () => {
  //   const dbComments = await getDocs(collection(dbService, 'comments'))
  //   dbComments.forEach((doc: any) => {
  //     console.log(doc.id, '=>', doc.data())
  //   })

  // setCommentsLists(() => dbComments.data())
  // dbComments.forEach((document: any) =>
  //   setCommentsLists((prev: any) => [document.data(), ...prev])
  // )
  // }

  useEffect(() => {
    onSnapshot(collection(dbService, 'comments'), (snapshot) => {
      const commentsArr = snapshot.docs
      setCommentsLists(commentsArr)
    })
  }, [])

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(dbService, 'comments'), orderBy('createdAt', 'desc')),
  //     (snapshot) => {
  //       setCommentsLists(snapshot.docs)
  //     }
  //   )
  //   return () => unsubscribe()
  // }, [])
  const filteredList = commentsLists.filter((list: any) => list.data().beach === areaInfo.sta_nm)
  // console.log(filteredList)

  return (
    <div className="mx-4">
      {filteredList.map((list: any, index: number) => (
        <Comment list={list} key={index} isOwner={list.data().creator === user} />
      ))}
    </div>
  )
}

export default CommentList
