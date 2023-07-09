import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Commment({content, onDeleteComment}) {

  const [like, setLikeCount] = useState(0)

  function handleDeletarComment(){
    onDeleteComment(content);
  }

  function handleLikeHere(){
    setLikeCount((state) => {
      return state + 1
    });

  }

  return (
    <div className={styles.comment}>
      <Avatar  src="https://github.com/lyrisnunes.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lyris Nunes</strong>
              <time className={styles.authorAndTime} title="04/07/2023" dataTime="2023-07-04 16:02:33">
                Publicado há 1h
              </time>
            </div>

            <button onClick={handleDeletarComment} title="Deletar comentário">
               Deletar
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
         <button onClick={handleLikeHere}>
            Curtir <span>{like}</span>
         </button>
        </footer>
      </div>
    </div>
  );
}
