import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Commment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt,content}){
  const [comments, setComments] = useState([
    1,
    2,
  ])

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
  locale: ptBR,
})

const publishedDateToNow =  formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix:true,
})

function newComment(){
  event.preventDefault()

  setComments([...comments, comments.length + 1])
}

   return (
     <article className={styles.post}>
       <header>
         <div className={styles.author}>
           <Avatar hasBorder src={author.avatarUrl}/>
           <div className={styles.authorInfo}>
             <strong>{author.name}</strong>
             <span>{author.role}</span>
           </div>
         </div>

         <time title={publishedDateFormatted}  dataTime={publishedAt.toISOString()}>
            {publishedDateToNow}
         </time>
       </header>

       <div className={styles.content}>
         {content.map(line => {
          if(line.type == 'paragraph'){
            return <p>{line.content}</p>;
          } else if (line.type == 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
         })}
       </div>

       <form onSubmit={newComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder='Deixe um comentário'/>

        <button type='submit'>Comentar</button>
       </form>

       <div className={styles.commentList}>
         {comments.map(comment => {
          return <Commment/>
         })}
       </div>
     </article>
   );
   }