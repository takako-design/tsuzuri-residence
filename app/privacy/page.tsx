import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'プライバシーポリシー（サンプル）｜TSUZURI RESIDENCE',
  description: 'ポートフォリオ用架空サイトのプライバシーポリシーサンプルです。',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return <LegalLayout eyebrow="PRIVACY POLICY / SAMPLE" title="プライバシーポリシー" lead="TSUZURI RESIDENCEのデモサイトにおける、個人情報の取扱いに関するサンプル方針です。">
    <section><h2>1. このデモサイトについて</h2><p>本サイトは、デザインと実装の紹介を目的としたポートフォリオです。実在する法人、介護施設、医療機関、サービスとは関係ありません。</p></section>
    <section><h2>2. 個人情報の取得・保存</h2><p>本デモサイトは、氏名、住所、健康情報などの個人情報を送信するフォームや保存用データベースを設けておらず、これらの情報を実際に取得・保存していません。</p></section>
    <section><h2>3. メール・電話リンク</h2><p>掲載しているメールアドレス、電話番号、mailtoリンクおよび予約・相談導線は、画面表現を確認するためのデモです。実際のお問い合わせ、見学予約、資料請求は受け付けていません。</p></section>
    <section><h2>4. 外部サービス</h2><p>閲覧環境やホスティング基盤によって、サイト提供に必要な技術情報が処理される場合があります。本ページは、その取扱いを法的に保証する正式文書ではありません。</p></section>
    <section><h2>5. 内容の変更</h2><p>本サンプル文面は、ポートフォリオの更新に伴い予告なく変更される場合があります。</p></section>
    <p className="legal-updated">サンプル更新日：2026年7月19日</p>
  </LegalLayout>
}
