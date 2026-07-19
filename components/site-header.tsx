'use client'

import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

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
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false)
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus({ preventScroll: true }))
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true)
    }
    const onResize = () => {
      if (window.innerWidth > 1050) closeMenu(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [closeMenu, open])

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''} ${open ? 'is-menu-open' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <span>TSUZURI RESIDENCE</span><small>KOBE MIKAGE</small><span className="sr-only">トップへ</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-request" href="#contact">資料を取り寄せる</a>
          <a className="button button--hero header-visit" href="#contact">見学を予約する</a>
          <button ref={menuButtonRef} className="menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-menu">
            <span className="sr-only">メニューを{open ? '閉じる' : '開く'}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="モバイルナビゲーション">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => closeMenu()}>{label}</a>)}
        <a href="#contact" onClick={() => closeMenu()}>資料を取り寄せる</a>
        <a href="#contact" onClick={() => closeMenu()}>見学を予約する</a>
      </nav>
    </header>
  )
}
