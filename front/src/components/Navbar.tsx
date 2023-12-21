"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
return (
    <>
        <div className='navbar'>
            <div className="navbar__logo"></div>
            <div className="navbar__list">
                <Link href="/stores" className='navbar__list--item'>충전소 생성</Link>
                <Link href="/stores/new" className='navbar__list--item'>충전소 상세 페이지</Link>
                <Link href="/stores/edit" className='navbar__list--item'>충전소 수정</Link>
                <Link href="/users/login" className='navbar__list--item'>로그인</Link>
                <Link href="/users/" className='navbar__list--item'>마이페이지</Link>
                <Link href="/users/likes" className='navbar__list--item'>찜한 충전소</Link>
            </div>
            <div>
                {/* mobile */}
                <div className="navbar__button" onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen ? <AiOutlineClose/> : <BiMenu/>}
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className="navbar--mobile">
                    <Link href="/stores" className='navbar__list--item--mobile'>충전소 생성</Link>
                    <Link href="/stores/new" className='navbar__list--item--mobile'>충전소 상세 페이지</Link>
                    <Link href="/stores/edit" className='navbar__list--item--mobile'>충전소 수정</Link>
                    <Link href="/users/login" className='navbar__list--item--mobile'>로그인</Link>
                    <Link href="/users/" className='navbar__list--item--mobile'>마이페이지</Link>
                    <Link href="/users/likes" className='navbar__list--item--mobile'>찜한 충전소</Link>
                </div>
            )
        }
        
    </>
  )
}
