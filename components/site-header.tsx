'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const nav = [
  ['暮らし', '#residence'],
  ['ダイニング', '#dining'],
  ['医療・看護', '#medical'],
  ['専用アプリ', '#app'],
  ['入居案内', '#information'],
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="TSUZURI RESIDENCE 神戸御影 トップへ">
          <span>TSUZURI RESIDENCE</span><small>KOBE MIKAGE</small>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-request" href="#contact">資料を取り寄せる</a>
          <a className="button button--hero header-visit" href="#contact">見学を予約する</a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
            <span className="sr-only">メニューを{open ? '閉じる' : '開く'}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="モバイルナビゲーション">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>資料を取り寄せる</a>
        <a href="#contact" onClick={() => setOpen(false)}>見学を予約する</a>
      </nav>
    </header>
  )
}
