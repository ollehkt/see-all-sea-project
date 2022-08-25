import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
const About = () => {
  return (
    <div className="w-[600px] mx-auto text-center flex flex-col items-center ">
      <h1 className="text-5xl my-[20px]">About</h1>
      <div className="text-4xl  flex justify-center items-center ">
        <a
          href="https://github.com/davidktlee"
          target="_blank"
          className="w-[54px] h-[54px] mx-[10px] my-[10px] flex justify-center items-center rounded-full hover:border-none cursor-pointer hover:text-white"
        >
          <AiFillGithub className="text-5xl " />
        </a>
        <a
          href="https://davidktlee.notion.site/bdba3696bf884d959fa4d764f19b29c0"
          target="_blank"
          className="w-[54px] h-[54px] my-[10px] flex justify-center items-center  rounded-full hover:border-none cursor-pointer hover:text-white"
        >
          <SiNotion className="text-5xl " />
        </a>
      </div>
      <div className="text-4xl my-[10px]">KTLEE</div>
    </div>
  )
}
export default About
