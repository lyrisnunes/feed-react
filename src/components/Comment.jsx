import styles from "./Comment.module.css";

export function Commment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/lyrisnunes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lyris Nunes</strong>
              <time className={styles.authorAndTime} title="04/07/2023" dataTime="2023-07-04 16:02:33">
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar comentário">
               Deletar
            </button>
          </header>

          <p>Muito bom, parabéns!!</p>
        </div>

        <footer>
         <button>
            Curtir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  );
}
