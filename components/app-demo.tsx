'use client'

import Image from 'next/image'
import { CheckCircle2, RotateCcw } from 'lucide-react'
import { useState, type KeyboardEvent } from 'react'
import japaneseDining from '../public/images/japanese-dining.png'

const runOnEnter = (event: KeyboardEvent<HTMLButtonElement>, action: () => void) => {
  if (event.key !== 'Enter') return
  event.preventDefault()
  action()
}

export function AppDemo() {
  const [selected, setSelected] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const statusMessage = confirmed
    ? '季節の和御膳を選択しました。'
    : selected
      ? '季節の和御膳を選択中です。確認ボタンで確定してください。'
      : '食事を選んでください。'

  const reset = () => {
    setSelected(false)
    setConfirmed(false)
  }

  return (
    <div className="app-visual">
      <div className="app-tablet" aria-label="デジタルコンシェルジュの食事選択デモ">
        <div className="app-tablet__screen">
          <header className="app-demo__header">
            <p>TSUZURI</p>
            <time dateTime="2026-07-18">7月18日 土曜日</time>
          </header>

          <div className="app-demo__layout">
            <aside className="app-demo__schedule" aria-label="今日の予定">
              <p>GOOD MORNING</p>
              <h3>今日の予定</h3>
              <ol>
                <li><time dateTime="10:30">10:30</time><span>ガーデン散歩</span></li>
                <li><time dateTime="14:00">14:00</time><span>音楽の時間</span></li>
              </ol>
            </aside>

            <div className="app-demo__meal">
              <p className="app-demo__eyebrow">DINNER SELECTION</p>
              <h3 id="app-demo-title">今夜のお食事を<br />お選びください</h3>

              <button
                className="app-demo__meal-card"
                type="button"
                aria-pressed={selected}
                aria-describedby="app-demo-meal-description"
                disabled={confirmed}
                onClick={() => setSelected((current) => !current)}
                onKeyDown={(event) => runOnEnter(event, () => setSelected((current) => !current))}
              >
                <span className="app-demo__meal-image">
                  <Image
                    src={japaneseDining}
                    alt="旬魚の焼き物とお造りを中心とした季節の和御膳"
                    fill
                    sizes="(min-width: 1051px) 36vw, (min-width: 768px) 62vw, calc(100vw - 4rem)"
                  />
                </span>
                <span className="app-demo__meal-copy">
                  <span>
                    <strong>季節の和御膳</strong>
                    <small id="app-demo-meal-description">旬魚の焼き物とお造り、季節の小鉢</small>
                  </span>
                  <span className="app-demo__selection" aria-hidden="true">
                    {selected ? <><CheckCircle2 />選択中</> : <><span className="app-demo__selection-long">この食事を選ぶ</span><span className="app-demo__selection-short">選ぶ</span></>}
                  </span>
                </span>
              </button>

              <div className="app-demo__actions">
                <button
                  className="app-demo__confirm"
                  type="button"
                  disabled={!selected || confirmed}
                  onClick={() => setConfirmed(true)}
                  onKeyDown={(event) => runOnEnter(event, () => setConfirmed(true))}
                >
                  {confirmed ? '選択しました' : '選択を確定する'}
                </button>
                {confirmed && (
                  <button className="app-demo__reset" type="button" onClick={reset} onKeyDown={(event) => runOnEnter(event, reset)}>
                    <RotateCcw aria-hidden="true" />やり直す
                  </button>
                )}
              </div>

              <p className="app-demo__status" role="status" aria-live="polite" aria-atomic="true">
                {statusMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
