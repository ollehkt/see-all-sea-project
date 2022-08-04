import React, { useState } from 'react'
interface PropsType {
  setInputValue: Function
}
function Search({ setInputValue }: PropsType) {
  return (
    <form>
      <div className="z-99999 w-[500px] h-[80px] border-2 border-solid bg-transparent flex flex-col">
        <input className="" type="text" onChange={(e) => setInputValue(e.currentTarget.value)} />
      </div>
    </form>
  )
}

export default Search
