import type { CSSProperties } from 'react'
import { assetUrl } from '../utils/assetUrl'
import { countryStamps } from '../data/countryStamps'

const W = 168
const H = 202
const PERF_R = 5.2

function perfCircles(): { cx: number; cy: number }[] {
  const circles: { cx: number; cy: number }[] = []
  const nH = Math.round(W / 14)
  const stepH = W / nH
  for (let i = 0; i <= nH; i++) {
    const x = i * stepH
    circles.push({ cx: x, cy: 0 })
    circles.push({ cx: x, cy: H })
  }
  const nV = Math.round(H / 14)
  const stepV = H / nV
  for (let i = 1; i < nV; i++) {
    const y = i * stepV
    circles.push({ cx: 0, cy: y })
    circles.push({ cx: W, cy: y })
  }
  return circles
}
const PERF_CIRCLES = perfCircles()

/** A miniature postage-stamp: perforated border, country landmark art, and the visit date. */
export function CountryStamp({
  id,
  nameEn,
  date,
  className,
  style,
}: {
  id: string
  nameEn: string
  date: string
  className?: string
  style?: CSSProperties
}) {
  const icon = countryStamps[id]
  if (!icon) return null

  const scale = W / 200
  const iconTy = 26 * scale
  const boxW = W - 34 * scale
  const iconTx = (W - boxW) / 2
  const boxH = (H - 24 * scale - iconTy) * 0.92

  const r = Math.min(boxW / icon.width, boxH / icon.height)
  const dw = icon.width * r
  const dh = icon.height * r
  const dx = iconTx + (boxW - dw) / 2
  const dy = iconTy + (boxH - dh) / 2

  const maskId = `stamp-perf-${id}`

  return (
    <svg className={className} style={style} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={nameEn}>
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
          <rect x="0" y="0" width={W} height={H} fill="white" />
          {PERF_CIRCLES.map((c, i) => (
            <circle key={i} cx={c.cx} cy={c.cy} r={PERF_R} fill="black" />
          ))}
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <rect x="0" y="0" width={W} height={H} fill="#f1e9d3" stroke="#cdbf9a" strokeWidth="1" />
        <rect
          x={8 * scale}
          y={8 * scale}
          width={W - 16 * scale}
          height={H - 16 * scale}
          fill="none"
          stroke="#b7a87d"
          strokeWidth="1"
        />
        <text
          x={W / 2}
          y={27 * scale}
          fontSize={11.5 * scale}
          fontWeight="800"
          letterSpacing="0.4"
          fill="#2b2418"
          textAnchor="middle"
          fontFamily="ui-monospace, 'SF Mono', monospace"
        >
          {nameEn.toUpperCase()}
        </text>
        {icon.kind === 'raster' ? (
          <image
            x={dx}
            y={dy}
            width={dw}
            height={dh}
            href={assetUrl(`/stamps/${id}.png`)}
            preserveAspectRatio="none"
          />
        ) : (
          <g transform={`translate(${dx},${dy}) scale(${r})`} dangerouslySetInnerHTML={{ __html: icon.markup }} />
        )}
        <text
          x={W / 2}
          y={H - 13 * scale}
          fontSize={9 * scale}
          fontWeight="700"
          letterSpacing="0.8"
          fill="#6b5c3f"
          textAnchor="middle"
          fontFamily="ui-monospace, 'SF Mono', monospace"
        >
          {date}
        </text>
      </g>
    </svg>
  )
}
