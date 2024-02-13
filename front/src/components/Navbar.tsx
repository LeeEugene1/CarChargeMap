'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link href="/">모두의 충전소</Link>
        </div>
        <ul className="navbar__list">
          <li>
            <Link href="/stores" className="navbar__list--item">
              충전소 목록
            </Link>
          </li>
          <li>
            <Link href="/stores/new" className="navbar__list--item">
              충전소 추가
            </Link>
          </li>
          <li>
            <Link href="/stores/edit" className="navbar__list--item">
              충전소 수정
            </Link>
          </li>
          <li>
            <Link href="/users/login" className="navbar__list--item">
              로그인
            </Link>
          </li>
          <li>
            <Link href="/users/" className="navbar__list--item">
              마이페이지
            </Link>
          </li>
          <li>
            <Link href="/users/likes" className="navbar__list--item">
              찜한 충전소
            </Link>
          </li>
        </ul>
        {/* mobile */}
        <div className="navbar__button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {isOpen && (
        <ul className="navbar--mobile">
          <li>
            <Link href="/stores" className="navbar__list--item">
              충전소 생성
            </Link>
          </li>
          <li>
            <Link href="/stores/new" className="navbar__list--item">
              충전소 상세 페이지
            </Link>
          </li>
          <li>
            <Link href="/stores/edit" className="navbar__list--item">
              충전소 수정
            </Link>
          </li>
          <li>
            <Link href="/users/login" className="navbar__list--item">
              로그인
            </Link>
          </li>
          <li>
            <Link href="/users/" className="navbar__list--item">
              마이페이지
            </Link>
          </li>
          <li>
            <Link href="/users/likes" className="navbar__list--item">
              찜한 충전소
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
