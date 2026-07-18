import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal-layout'

export const metadata: Metadata = {
  title: '利用規約（サンプル）｜TSUZURI RESIDENCE',
  description: 'ポートフォリオ用架空サイトの利用規約サンプルです。',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return <LegalLayout eyebrow="TERMS OF USE / SAMPLE" title="利用規約" lead="TSUZURI RESIDENCEのデモサイトをご覧いただく際の、サンプル利用条件です。">
    <section><h2>1. 適用範囲</h2><p>本規約は、ポートフォリオとして公開する本デモサイトの閲覧に関するサンプル文面です。実在する施設の利用契約や入居契約には適用されません。</p></section>
    <section><h2>2. 掲載情報</h2><p>施設名、所在地、料金、居室数、サービス、医療・看護体制、交通時間などは、すべて架空の設定です。掲載情報の正確性、完全性、継続性を保証するものではありません。</p></section>
    <section><h2>3. 医療・介護に関する情報</h2><p>本サイトの医療・介護に関する表現はデザイン上のサンプルであり、診断、治療、医学的助言、施設選定の助言を行うものではありません。</p></section>
    <section><h2>4. 予約・相談導線</h2><p>フォーム、メールアドレス、電話番号、mailtoリンクはデモ用途です。操作しても、実在する施設への予約、相談、申込み、契約は成立しません。</p></section>
    <section><h2>5. 関係法人と免責</h2><p>本サイトは実在する法人、施設、医療機関、交通機関とは関係ありません。本サンプル文面は、特定の権利や法的保証を提供するものではありません。</p></section>
    <p className="legal-updated">サンプル更新日：2026年7月19日</p>
  </LegalLayout>
}
