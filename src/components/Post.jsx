import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Commment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt,content}){
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
  locale: ptBR,
})

const publishedDateToNow =  formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix:true,
})

function newComment(){
  event.preventDefault()

  setComments([...comments, newCommentText]);
  setNewCommentText('')
}

function handleNewCommentChange(){
  event.target.setCustomValidity('');
  setNewCommentText(event.target.value);
}

function handleNewCommentInvalid(){
  event.target.setCustomValidity('Esse campo é obrigatorio!');
}

function deleteComment(commentToDelete){
  const commentsWithouDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
  })
 setComments(commentsWithouDeleteOne);
}

const IsNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
         })}
       </div>

       <form onSubmit={newComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
        placeholder='Deixe um comentário'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
        <button type='submit' disabled={IsNewCommentEmpty}>Publicar</button>
        </footer>
       </form>

       <div className={styles.commentList}>
         {comments.map(comment => {
          return <Commment key={comment} content={comment} onDeleteComment={deleteComment}/>
         })}
       </div>
     </article>
   );
   }