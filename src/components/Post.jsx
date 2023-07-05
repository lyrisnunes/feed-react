import { Commment } from './Comment';
import styles from './Post.module.css'

export function Post(){
   return (
     <article className={styles.post}>
       <header>
         <div className={styles.author}>
           <img
             className={styles.avatar}
             src="https://github.com/lyrisnunes.png"
           />
           <div className={styles.authorInfo}>
             <strong>Lyris Nunes</strong>
             <span>Programadora React</span>
           </div>
         </div>

         <time title="04/07/2023" dataTime="2023-07-04 16:02:33">
           Publicado há 1h
         </time>
       </header>

       <div className={styles.content}>
         <p>Fala galeraa 👋</p> 
         <p>Acabei de subir mais um projeto no meu portfólio.</p>
         <p>
            É um
            projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
         </p>
          <p><a href=""> 👉 jane.design/doctorcare</a> <a href="">#novoprojeto</a> <a href="">#nlw </a><a href="">#rocketseat</a></p>
       </div>

       <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder='Deixe um comentário'/>

        <button type='submit'>Comentar</button>
       </form>

       <div className={styles.commentList}>
         <Commment/> 
       </div>
     </article>
   );
}