import styles from './Avatar.module.css'

export function Avatar({ hasBorder, src}){

   return(
      <div>
         <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}/>
      </div>
   )
}