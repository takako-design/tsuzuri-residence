import Image from 'next/image'
import { ArrowRight, CalendarDays, HeartPulse, MessageCircle, Utensils } from 'lucide-react'

const ButtonLink = ({ href, children, light = false, outline = false }: { href: string; children: React.ReactNode; light?: boolean; outline?: boolean }) => (
  <a href={href} className={`button ${light ? 'button--light' : ''} ${outline ? 'button--outline' : ''}`}>{children}<ArrowRight aria-hidden="true" /></a>
)

const Label = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => <p className={`section-label ${dark ? 'section-label--dark' : ''}`}>{children}</p>

export function Hero() {
  return <>
    <section id="top" className="hero">
      <Image src="/images/hero-lounge.png" alt="庭へ視線が抜ける、自然光に満ちたラウンジ" fill priority sizes="100vw" className="hero__image" />
      <div className="hero__overlay" />
      <div className="hero__content page-shell">
        <p className="hero__eyebrow"><span className="hero__eyebrow-en">ARTFUL WELLNESS RESIDENCE</span><span>介護付き有料老人ホーム</span></p>
        <h1>これからの人生を、<br />もっと自分らしく、美しく。</h1>
        <p className="hero__lead">上質な住環境と、医療・看護・介護の安心。<br />一人ひとりの意思と、毎日の楽しみを大切にする<br className="desktop-only" />シニアレジデンスです。</p>
        <div className="button-row"><ButtonLink href="#contact" light>見学を予約する</ButtonLink><ButtonLink href="#contact" light outline>資料を取り寄せる</ButtonLink></div>
      </div>
      <a className="scroll-cue" href="#philosophy">SCROLL<span /></a>
    </section>
    <TrustBar />
  </>
}

function TrustBar() {
  return <aside className="trust-wrap" aria-label="施設の特徴">
    <div className="trust-bar">
      {['看護職員24時間常駐','協力医療機関と連携','全48室・全室個室','神戸・御影の閑静な住環境'].map(x => <p key={x}>{x}</p>)}
    </div>
    <p className="fiction-note">※掲載している施設、料金、サービスは、ポートフォリオ制作のための架空設定です。</p>
  </aside>
}

export function Philosophy() {
  const values = [
    ['01','選べる日常','食事、予定、体験、家族との時間。小さな選択を重ねられる毎日を大切にします。'],
    ['02','暮らしに寄り添う安心','看護・介護・医療の支援を、生活を過度に管理しない形で届けます。'],
    ['03','美しさのある時間','季節の花、料理、アート、自然光。心が動く瞬間を、日常の中に取り入れます。'],
  ]
  return <section id="philosophy" className="section philosophy page-shell">
    <Label>OUR PHILOSOPHY</Label>
    <div className="philosophy__intro"><h2>安心のために、<br />自分らしさを諦めない。</h2><div><p>年齢を重ねても、今日をどう過ごすか、何を食べるか、誰と会うかを、自分で選べること。</p><p>TSUZURI RESIDENCEは、その人が大切にしてきた価値観や習慣を尊重し、必要な支援を暮らしのそばに整えます。</p></div></div>
    <div className="values">{values.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
  </section>
}

export function Residence() {
  return <section id="residence" className="section residence page-shell">
    <div className="residence__lead visual"><Image src="/images/hero-lounge.png" alt="庭とつながるガーデンラウンジ" fill sizes="(min-width: 768px) 58vw, 100vw" /></div>
    <div className="residence__copy"><Label>RESIDENCE</Label><h2>私の時間が、<br />心地よく流れる場所。</h2><p>静かな朝を過ごす居室。季節の花が迎えるラウンジ。庭を眺めながら交わす会話。思い出の品や好きな家具を加えながら、自分らしい住まいを整えていただけます。</p><ButtonLink href="#contact">暮らしを見学する</ButtonLink></div>
    <figure className="residence__room"><div className="visual"><Image src="/images/residence-room.png" alt="思い出の品と家具を配した個室" fill sizes="(min-width: 768px) 32vw, 50vw" /></div><figcaption><i>Private Residence</i>思い出とともに、自分らしく整える居室。</figcaption></figure>
    <figure className="residence__garden"><div className="visual"><Image src="/images/garden-terrace.png" alt="緑に囲まれた庭とテラス" fill sizes="(min-width: 768px) 42vw, 50vw" /></div><figcaption><i>Garden Lounge</i>ひとりの時間も、人とつながる時間も心地よく。</figcaption></figure>
    <div className="residence__detail"><p className="detail-mark">花とアートのある日常</p><p>全室個室／私物・家具の持ち込み／庭・テラス／コンシェルジュ</p></div>
  </section>
}

export function Dining() {
  const features = [['選べるメニュー','季節の和御膳、魚料理、肉料理、洋食、軽食から。'],['美しく整える栄養支援','体調に配慮しながら、同じ食卓を楽しめる味わいへ。'],['家族と囲む特別な食卓','記念日には個室や特別メニューをご用意します。']]
  return <section id="dining" className="dark-section section"><div className="page-shell dining-grid">
    <div className="dining__copy"><Label dark>RESIDENCE DINING</Label><h2>今日の気分で選ぶ、<br />私のための食卓。</h2><p>食事を管理される時間ではなく、選び、味わい、誰かと楽しむ時間へ。和食を中心に、その日の気分や体調に合わせてお選びいただけます。</p></div>
    <figure className="dining__main"><div className="visual"><Image src="/images/japanese-dining.png" alt="鰆の西京焼きを中心とした季節の和御膳" fill sizes="(min-width: 768px) 58vw, 100vw" /></div><figcaption><i>Today&apos;s selection</i>本日の季節の和御膳</figcaption></figure>
    <div className="dining__details"><div className="feature-lines">{features.map(([t,d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div><p className="app-note">毎日のメニューは、専用タブレットでも写真を見ながら選べます。</p><ButtonLink href="#app" light>食事選択のデモを見る</ButtonLink></div>
    <div className="dining__room visual"><Image src="/images/dining-room.png" alt="庭を望むレジデンスダイニング" fill sizes="(min-width: 768px) 50vw, 100vw" /></div>
    <div className="dining__menu"><p>SEASONAL MENU</p><h3>味わい、彩り、器、香りまで。</h3><ul><li>鰆の西京焼き</li><li>翡翠茄子の含め煮</li><li>季節の炊き込みご飯</li><li>茶碗蒸し・水菓子</li></ul></div>
  </div></section>
}

export function Medical() {
  const items = [['24時間の看護体制','看護職員が24時間館内に常駐する想定です。夜間の体調変化や健康相談にも対応します。'],['協力医療機関との連携','医師常駐ではありません。定期往診と、必要時の受診・緊急連携を行います。'],['服薬・通院・入退院支援','お薬の確認、受診予定の調整、通院時の支援、入退院時の情報連携を行います。'],['リハビリと健康づくり','状態や希望に合わせ、無理のない運動と健康相談を日常に取り入れます。']]
  return <section id="medical" className="section medical page-shell"><div className="medical__heading"><Label>MEDICAL &amp; WELLNESS</Label><h2>暮らしのそばに、<br />必要な安心を。</h2><p>看護、介護、医療、栄養、リハビリの専門職が連携し、日々の生活を支えます。</p></div><div className="medical__image visual"><Image src="/images/wellness-room.png" alt="木と自然光に包まれた健康相談室" fill sizes="(min-width: 768px) 46vw, 100vw" /></div><div className="medical-cards">{items.map(([t,d],i) => <article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="medical__foot"><p><strong>暮らしを支える、多職種チーム。</strong><br />コンシェルジュ・介護職・看護職・管理栄養士・シェフ・リハビリ担当・生活相談員・協力医療機関</p><small>医療・介護サービスの内容は、健康状態、契約内容、協力医療機関の診療方針等によって異なります。</small><ButtonLink href="#contact">医療・看護について相談する</ButtonLink></div></section>
}

function AppMockup() {
  return <div className="device" data-layer="app"><div className="device__screen"><p className="app-date">7月18日 土曜日</p><h3>今夜のお食事を<br />お選びください</h3><div className="meal-choice"><Image src="/images/japanese-dining.png" alt="季節の和御膳" width={460} height={345} /><div><strong>季節の和御膳</strong><span>おすすめ</span></div></div><button type="button" disabled>この食事を選ぶ（デモ）</button></div></div>
}

export function DigitalConcierge() {
  const features = [[CalendarDays,'今日の予定が分かる'],[Utensils,'食事や体験を自分で選べる'],[HeartPulse,'健康・お薬を確認できる'],[MessageCircle,'家族・コンシェルジュとつながれる']] as const
  return <section id="app" className="section app-section"><div className="page-shell app-grid"><div className="device-stage"><div className="device-secondary"><p>おはようございます</p><strong>今日の予定</strong><span>10:30 ガーデン散歩</span><span>14:00 音楽の時間</span></div><AppMockup /></div><div className="app-copy"><Label>DIGITAL CONCIERGE</Label><h2>今日を分かりやすく。<br />選ぶことを、いつまでも自分らしく。</h2><p>今日の予定、食事、健康、お薬、家族からのメッセージを、見やすい画面にまとめます。大きな文字とボタンで、必要なときはスタッフが操作をお手伝いします。</p><div className="app-features">{features.map(([Icon,text]) => <div key={text}><Icon aria-hidden="true" /><span>{text}</span></div>)}</div><ButtonLink href="#contact">アプリについて相談する</ButtonLink><small>本アプリは医療診断や治療を行うものではありません。</small></div></div></section>
}

export function Families() {
  const rows = [['面会・会食を予約しやすく','家族との面会や食事の予定を、分かりやすく相談・予約できます。'],['本人の同意に基づく情報共有','生活や健康の情報は、ご本人が許可した範囲で共有します。'],['緊急時の連絡を明確に','どのような場合に、誰からお知らせするかを入居前に確認します。']]
  return <section className="families"><div className="families__image visual"><Image src="/images/family-table.png" alt="庭を眺めながらお茶を囲む家族の後ろ姿" fill sizes="(min-width: 768px) 58vw, 100vw" /></div><div className="families__copy"><Label>FOR FAMILIES</Label><h2>離れている時間にも、<br />心地よいつながりを。</h2><p>ご家族が安心できることと、ご本人のプライバシーが守られること。その両方を大切にします。</p><div className="family-lines">{rows.map(([t,d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div><ButtonLink href="#contact">ご家族から相談する</ButtonLink></div></section>
}

const overview = [['施設名','TSUZURI RESIDENCE 神戸御影'],['施設種別','介護付き有料老人ホーム'],['所在地','兵庫県神戸市東灘区御影［架空所在地］'],['居室数','全48室・全室個室［仮設定］'],['入居対象','原則65歳以上。自立・要支援・要介護'],['看護体制','看護職員24時間常駐［仮設定］'],['医療','協力医療機関による定期往診・緊急連携'],['食事','1日3食。選択メニュー、個別調整']]
const steps = [['資料請求','施設概要や料金をご確認ください。'],['個別相談','ご希望や現在の暮らしを伺います。'],['施設見学','居室や支援体制をご案内します。'],['体験・面談','ご本人とご家族の希望を確認します。'],['条件確認','必要な支援と対応範囲を確認します。'],['契約','費用とサービスをご説明します。'],['ご入居','新しい暮らしを始めます。']]
const faqs = [['自立していても入居できますか。','はい。本企画では、自立の方から要支援・要介護の方までを対象とする設定です。'],['介護度が変わっても住み続けられますか。','可能な限り継続して暮らせる設定ですが、必要な支援内容に応じて対応方法を相談します。'],['看護職員は夜間もいますか。','本企画では、看護職員が24時間館内に常駐する設定です。'],['医師は施設内に常駐していますか。','医師常駐の設定ではありません。協力医療機関による定期往診と緊急連携を行います。'],['家具や思い出の品を持ち込めますか。','安全や動線を確認したうえで、自分らしい空間に整えられる設定です。'],['タブレットを使えなくても入居できますか。','はい。アプリの利用を入居条件にはしません。別の方法をご用意します。']]

export function Information() {
  return <section id="information" className="section information page-shell"><Label>RESIDENCE INFORMATION</Label><div className="information__intro"><h2>入居をご検討の方へ。</h2><p>暮らしのご希望、健康状態、ご家族の状況を伺いながら、一人ひとりに合う入居方法をご案内します。ご本人だけ、ご家族だけでのご相談も承ります。</p></div><div className="overview"><h3>施設概要</h3><dl>{overview.map(([dt,dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}</dl></div><div className="pricing"><div><p>入居一時金</p><strong>3,000<small>万円〜</small></strong></div><div><p>月額利用料</p><strong>35<small>万円〜</small></strong></div><p>月額利用料には、居室利用料、管理費、食費を含む想定です。介護保険の自己負担分、医療費等は別途必要です。<br />※上記はポートフォリオ制作のための架空料金です。</p></div><div className="flow"><h3>ご入居までの流れ</h3><ol>{steps.map(([t,d],i) => <li key={t}><span>0{i+1}</span><h4>{t}</h4><p>{d}</p></li>)}</ol></div><div className="access"><div><Label>ACCESS</Label><h3>神戸・御影の、<br />緑と文化が息づく場所。</h3><p>阪急御影駅より送迎車で約5分<br />JR住吉駅より車で約10分<br />来館者用駐車場あり</p><small>※所在地、交通時間、駐車場情報は架空設定です。</small></div><div className="map-placeholder"><span>MIKAGE</span><i /><b>TSUZURI<br />RESIDENCE</b></div></div><div className="faq"><Label>FAQ</Label><h3>よくあるご質問</h3>{faqs.map(([q,a],i) => <details key={q} open={i === 0}><summary><span>{q}</span><b aria-hidden="true">＋</b></summary><p>{a}</p></details>)}</div></section>
}

export function FinalCta() {
  return <section id="contact" className="final-cta"><Image src="/images/evening-lounge.png" alt="夕暮れの光に包まれたラウンジと庭" fill sizes="100vw" /><div className="final-cta__overlay"/><div className="final-cta__content"><Label dark>VISIT TSUZURI</Label><h2>新しい暮らしを、<br />まずは見学から。</h2><p>写真だけでは分からない、空間の心地よさ、食事、スタッフの対応をご体感ください。</p><div className="button-row"><ButtonLink href="mailto:visit@example.com" light>見学を予約する</ButtonLink><ButtonLink href="mailto:concierge@example.com" light outline>入居について相談する</ButtonLink></div><div className="contact-links"><a href="mailto:info@example.com">資料を取り寄せる</a><a href="tel:0120000000">0120-000-000 <small>9:00〜18:00／架空番号</small></a></div></div></section>
}

export function Footer() {
  return <footer className="footer"><div className="page-shell footer__grid"><div><p className="footer__brand">TSUZURI RESIDENCE<small>KOBE MIKAGE</small></p><p>私らしい毎日を、安心とともに。</p></div><nav aria-label="フッターナビゲーション">{[['暮らし','#residence'],['ダイニング','#dining'],['医療・看護','#medical'],['専用アプリ','#app'],['入居案内','#information'],['見学予約','#contact']].map(([t,h])=><a key={t} href={h}>{t}</a>)}</nav></div><div className="page-shell footer__bottom"><p>本サイトは、田中貴子によるポートフォリオ掲載用の架空プロジェクトです。実在する施設、法人、サービス、医療機関とは関係ありません。</p><p>© 2026 TSUZURI RESIDENCE</p></div></footer>
}

export function MobileFixedCta() { return <nav className="mobile-fixed" aria-label="お問い合わせ"><a href="mailto:info@example.com">資料請求</a><a href="#contact">見学予約</a></nav> }
