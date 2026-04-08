import { FOOD_CATEGORY_LABELS } from '@/data/food'
import type { FoodCategory } from '@/types'
import './FoodCategoryStrip.css'

const categories = Object.keys(FOOD_CATEGORY_LABELS) as FoodCategory[]

type Props = {
  active?: FoodCategory | 'all'
  onSelect?: (c: FoodCategory | 'all') => void
}

export function FoodCategoryStrip({ active = 'all', onSelect }: Props) {
  return (
    <div className="food-strip" role="group" aria-label="Food categories">
      <button
        type="button"
        className={`food-strip__chip${active === 'all' ? ' food-strip__chip--on' : ''}`}
        onClick={() => onSelect?.('all')}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`food-strip__chip${active === cat ? ' food-strip__chip--on' : ''}`}
          onClick={() => onSelect?.(cat)}
        >
          {FOOD_CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  )
}
