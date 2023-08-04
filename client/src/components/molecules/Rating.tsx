export default function Rating({ rating, text }) {
  return (
    <div>
      <span className='text-orange-400'>{getRating(rating)}</span>
      {text && <span className='text-sm ml-4'>{text}</span>}
    </div>
  )
}

function getRating(rating) {
  const floorRating = Math.floor(rating)
  const mapped = {
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  }
  return mapped[floorRating]
}
