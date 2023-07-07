import { HiArrowNarrowRight } from "react-icons/hi";

import styles from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar(){
   return(
      <aside className={styles.sidebar}>
         <img className={styles.cover} src="https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"/>

         <div className={styles.profile}>
            <Avatar hasBorder src="https://github.com/lyrisnunes.png"/>
            <strong>Lyris Nunes</strong>
            <span>Programadora React</span>
            <ul className={styles.language}>
               <li>JS</li>
               <li>REACT</li>
               <li>Bootstrap</li>
               <li>NODE</li>
            </ul>
         </div>

         <footer>
         
            <a href="#"><HiArrowNarrowRight size={20}/>  Editar perfil</a>
         </footer>
      </aside>
   )
}