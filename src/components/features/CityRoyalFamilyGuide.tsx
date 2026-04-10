import { getCityRoyalFamilyBundle } from '@/data/cityRoyalFamily'
import type { RoyalFamilyNode } from '@/data/cityRoyalFamily'
import './CityRoyalFamilyGuide.css'

type Props = {
  citySlug: string
  cityName: string
}

function TreeNode({ node, depth = 0 }: { node: RoyalFamilyNode; depth?: number }) {
  const d = Math.min(depth, 4)
  const hasChain = Boolean(node.chain?.length)

  return (
    <li className={`royal-tree__item royal-tree__item--depth-${d}`} data-depth={d}>
      <div className="royal-tree__block">
        <div className="royal-tree__header">
          <span className="royal-tree__name">{node.name}</span>
          {node.note ? <span className="royal-tree__note">{node.note}</span> : null}
        </div>
        {hasChain ? (
          <div
            className="royal-tree__chain"
            role="group"
            aria-label={`${node.name}: succession chain`}
          >
            {node.chain!.map((part, i) => (
              <span key={`${node.id}-c-${i}`} className="royal-tree__chain-pill-wrap">
                {i > 0 ? (
                  <span className="royal-tree__chain-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <span className="royal-tree__chain-pill">{part}</span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {node.children?.length ? (
        <ul className="royal-tree__children">
          {node.children.map((c) => (
            <TreeNode key={c.id} node={c} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export function CityRoyalFamilyGuide({ citySlug, cityName }: Props) {
  const bundle = getCityRoyalFamilyBundle(citySlug, cityName)

  return (
    <section
      id="city-royal-family"
      className="royal-guide"
      aria-labelledby="royal-guide-title"
    >
      <header className="royal-guide__header-block">
        <p className="royal-guide__eyebrow">Royal heritage</p>
        <h2 id="royal-guide-title" className="royal-guide__title">
          {bundle.houseLabel}
        </h2>
        <p className="royal-guide__disclaimer" role="note">
          {bundle.disclaimer}
        </p>
        <p className="royal-guide__intro">{bundle.intro}</p>
      </header>

      <div className="royal-guide__lineage-panel">
        <div className="royal-guide__lineage-head">
          <span className="royal-guide__lineage-icon" aria-hidden="true" />
          <div>
            <h3 className="royal-guide__lineage-title">Lineage map</h3>
            <p className="royal-guide__lineage-sub">
              Nested view with guide lines — arrows compress long stretches of succession.
            </p>
          </div>
        </div>
        <div className="royal-tree royal-tree--illustrated">
          <ul className="royal-tree__root">
            <TreeNode node={bundle.familyTree} depth={0} />
          </ul>
        </div>
      </div>

      {bundle.currentHead ? (
        <div className="royal-guide__current" role="region" aria-label="Current head of the house">
          <p className="royal-guide__current-label">{bundle.currentHead.roleLabel}</p>
          <p className="royal-guide__current-name">{bundle.currentHead.name}</p>
          {bundle.currentHead.note ? (
            <p className="royal-guide__current-note">{bundle.currentHead.note}</p>
          ) : null}
        </div>
      ) : null}

      {bundle.successionLine?.length ? (
        <div className="royal-guide__succession-panel">
          <h3 className="royal-guide__subhead royal-guide__subhead--tight">Ruler-by-ruler line</h3>
          <p className="royal-guide__succession-intro">
            Principal line only — not every branch. Dates approximate; 1971 ended legal princely titles.
          </p>
          <ol className="royal-guide__succession">
            {bundle.successionLine.map((s, i) => (
              <li key={`${s.name}-${i}`} className="royal-guide__succession-item">
                <span className="royal-guide__succession-card">
                  <span className="royal-guide__succession-name">{s.name}</span>
                  {s.era ? <span className="royal-guide__succession-era">{s.era}</span> : null}
                  {s.note ? <span className="royal-guide__succession-note">{s.note}</span> : null}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <h3 className="royal-guide__subhead">Era timeline</h3>
      <ol className="royal-guide__timeline">
        {bundle.timeline.map((t) => (
          <li key={`${t.period}-${t.headline}`} className="royal-guide__timeline-item">
            <div className="royal-guide__timeline-card">
              <p className="royal-guide__period">{t.period}</p>
              <p className="royal-guide__headline">{t.headline}</p>
              <p className="royal-guide__detail">{t.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
