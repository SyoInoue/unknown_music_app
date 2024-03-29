import React from 'react'
import { useTrail, animated as a } from '@react-spring/web'

const Trail = ({ open, children, ...props }) => {
  // アニメーション対象と設定の初期化
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 8000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 0,
    height: open ? 100 : 0,
    from: { opacity: 1, x: -40, height: 0 },
  })
  return (
    <div className='trails-main' {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className='trails-text'
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(${x}px,0,0`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}
export default Trail
