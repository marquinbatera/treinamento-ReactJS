import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      {/* <img src="https://ca.slack-edge.com/TK9LJ91GE-U01NMDQKV6U-f33b079b9094-512" /> */}
      <Avatar
        src="https://ca.slack-edge.com/TK9LJ91GE-U01NMDQKV6U-f33b079b9094-512"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael</strong>
              <time
                title="24 de Novembro às 14:00"
                dateTime="2022-11-25 14:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Parabéns Marcos você merece!! 👏👏</p>
        </div>

        <footer>
          <button type="button" title="Curtir comentário">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
