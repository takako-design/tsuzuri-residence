import Link from 'next/link'
import type { ReactNode } from 'react'

type LegalLayoutProps = {
  eyebrow: string
  title: string
  lead: string
  children: ReactNode
}

export function LegalLayout({ eyebrow, title, lead, children }: LegalLayoutProps) {
  return <>
    <a className="skip-link" href="#main-content">本文へ移動</a>
    <header className="legal-header">
      <Link className="legal-brand" href="/">
        <span>TSUZURI RESIDENCE</span><small>KOBE MIKAGE</small><span className="sr-only">トップへ</span>
      </Link>
      <Link className="legal-header__back" href="/">トップページへ戻る</Link>
    </header>
    <main id="main-content" className="legal-main">
      <article className="legal-document">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-lead">{lead}</p>
        <aside className="legal-notice">本ページはポートフォリオ用架空サイトのサンプル文面です。実在する施設・法人の正式な法務文書ではなく、法的保証を行うものではありません。</aside>
        <div className="legal-sections">{children}</div>
        <Link className="button legal-document__back" href="/">トップページへ戻る</Link>
      </article>
    </main>
    <footer className="legal-footer"><p>© 2026 TSUZURI RESIDENCE — FICTIONAL PORTFOLIO PROJECT</p></footer>
  </>
}
