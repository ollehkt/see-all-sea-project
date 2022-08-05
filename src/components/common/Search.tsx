import React, { useState } from 'react'

interface PropsType {
  setInputValue: Function
}
function Search({ setInputValue }: PropsType) {
  return (
    <form>
      <div className="flex ">
        <input
          className="h-[20px] text-xl"
          type="text"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <button>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Search
