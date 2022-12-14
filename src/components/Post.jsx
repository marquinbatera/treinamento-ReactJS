import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  const [comments, setComments] = useState([1, 2]);

  function handleNewComment() {
    setComments([...comments, comments.length + 1]);
    console.log(comments);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {/* <img
            className={styles.avatar}
            src="https://ca.slack-edge.com/TK9LJ91GE-UJZUM3W02-aa05b07575e9-512"
          /> */}
          <Avatar src="https://ca.slack-edge.com/TK9LJ91GE-UJZUM3W02-aa05b07575e9-512" />

          <div className={styles.authorInfo}>
            <strong>Rafael</strong>
            <span>Gerente</span>
          </div>
        </div>

        <time title="24 de Novembro às 14:00" dateTime="2022-11-25 14:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>
            Fala Marquin 👋 Acabei de conversar com o Chefe e vamos te dar um
            aumento.
          </p>
          <p>
            O projeto que fez no treinamento ficou lindo, parabéns. Você é um
            excelente profissional.
          </p>
          <p>Continue assim 🚀 👉 Marcos Bloguer</p>
          <p>
            <a href="#">#goKangu</a> <a href="#">#marcosBloguer</a>{" "}
            <a href="#">#aumento</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Comente aqui" name="comment" />

        <footer>
          <button onClick={handleNewComment} type="button">
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} />;
        })}
        {/* <Comment />
        <Comment />
        <Comment /> */}
      </div>
    </article>
  );
}
