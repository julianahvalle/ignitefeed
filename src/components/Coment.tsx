import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Coment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Coment({ content, onDeleteComment }: CommentProps){
  const [likeCount, setLikeCount] = useState(0);

   
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  
  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  return(
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://github.com/Rocketseat.png" alt=""/>

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dev</strong>
              <time title="11 de Maio às 08:30h" dateTime="2022-05-11 08:30:13">Publicado há 1h</time>
            </div>  
              <button 
                onClick={handleDeleteComment}
                title="Deletar comentário"
              >
                <Trash size={24}/>
              </button>
          </header>

          <p>{content}</p>
        
        </div>
          

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  ); 
}