// import React, { ChangeEvent, FormEvent, useState } from 'react'

// interface PropsType {
//   setInputValue: Function
//   noResult: string
//   isLoading: boolean
// }
// function Search({ setInputValue, noResult, isLoading }: PropsType) {
//   // if (!noResult) {
//   //   setIsLoading(true)
//   // } else if (noResult) {
//   //   setIsLoading(false)
//   // }
//   const submitInput = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setInputValue(e.currentTarget[0].value)
//   }
//   return (
//     <form onSubmit={submitInput}>
//       <div className="flex">
//         <input className="h-[20px] text-xl" type="text" placeholder="도시명으로 검색하기" />
//         <button>
//           <svg
//             className="w-6 h-6"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//       {isLoading ? (
//         <p className="text-2xl font-bold my-5">Loading...</p>
//       ) : noResult ? (
//         <p className="text-2xl font-bold my-5">찾으시는 결과가 없습니다</p>
//       ) : (
//         <p>검색이 완료되었습니다</p>
//       )}
//     </form>
//   )
// }

// export default Search
