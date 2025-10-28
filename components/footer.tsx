import * as React from 'react'
import styles from '@/app/ui/styles/footer.module.css'
import Link from 'next/link'

/**
 * 
 * @description permet d'afficher le meme footer sur toutes les pages
 * @example
 * ```
     return ( <Footer /> )
    ```
 */
const Footer: React.FunctionComponent = () => {
  const year = new Date().getFullYear()
  return <footer className={styles.footer}>
    <div className={styles.contentinfo}>
      <p>©{year} Recipes App</p>
      <Link href="mailto:drucilla.webapps24@gmail.com">WebApps24</Link> 
      <p>Tous droits réservés</p>
    </div>
  </footer>
}
export default Footer