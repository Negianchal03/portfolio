import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:12 items-center">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel free To reach out!</h3>
        </div>

        <ul className="text-sm md:text-xl">
            <li className="flex gap-1 items-center">
                <MdOutlineEmail size={20}/>
                negianchal983@gmail.com
            </li>

            <li  className="flex gap-1 items-center">
                <CiLinkedin/>
                linkedin.com/anchalnegi
            </li>

            <li  className="flex gap-1 items-center">
                <FaGithub/>
                github.com/Negianchal03
            </li>
        </ul>
    </div>
  )
}

export default Footer