"use client"
import * as React from 'react'
import styles from '@/app/ui/styles/header.module.css'
import Icon from '@/components/ui/icon'
import Link from 'next/link'

interface HeaderProps {
  icon:string,
  iconReverse:string,
  iconDescription:string
  title:string
}

/**
 * 
 * @param props - {icon, iconReverse, iconDescription, title, hasMenu, role, userInfo }
 * permet d'afficher le header avec des propriétés différentes selon les pages
 * @example
 * ```
    return (
        <Header icon={iconSVG} icon={iconReverseSVG} iconDescription={'icone description'} title={'titre du header'}  />
    )
    ```
 */
const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return <header className={styles.header}>
    <Link href="/" className={styles.headerTitle}>
      <Icon image={props.icon} description={props.iconDescription} imageReverse={props.iconReverse}/>
      <h1>{props.title}</h1>
    </Link>
  </header>
}
export default Header