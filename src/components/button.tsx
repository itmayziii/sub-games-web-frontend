import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './nav/bottom-nav.module.css'

interface ButtonProps {
  component: React.ElementType
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined'
  className?: string
  children?: React.ReactNode
}
const Button: TestingThings<ButtonProps> = function Button (props) {
  const [isRippling, setIsRippling] = useState<boolean>(false)
  const [coords, setCoords] = useState<{ x: number, y: number }>({ x: -1, y: -1 })
  const Component = props.component
  const color = props.color === undefined ? 'primary' : props.color
  const isPrimary = color === 'primary'
  const isSecondary = color === 'secondary'

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
      return
    }

    setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  // Need to filter out certain props like "component" that are common in React so they don't get used again.
  const filteredProps = { ...props, ...{ component: undefined } }
  return (
    <Component
      {...filteredProps}
      className={cn(
        props.className,
        'shadow-md cursor-pointer text-on-primary rounded hover:shadow-lg whitespace-nowrap uppercase relative' +
        ' overflow-hidden focus:outline-none transition-shadow transform active:shadow-xl',
        {
          'bg-primary': isPrimary,
          'bg-secondary': isSecondary
        }
      )}
      onClick={(event: any) => {
        const rect = event.target.getBoundingClientRect()
        setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
      }}
    >
      {props.children}
      {isRippling && (
        <span className={styles.ripple} style={{ left: coords.x, top: coords.y }} />
      )}
    </Component>
  )
}

export type TestingThings<M extends object> = <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C
    } & M & React.ComponentProps<C>
  ) => JSX.Element

export default Button
