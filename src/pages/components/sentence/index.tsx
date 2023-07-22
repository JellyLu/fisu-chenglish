import styles from "./index.module.scss";

const Sentence = (
  {en, cn, sc, index}: SentenceType & { index: number
  }) => {
  return (
    <div className={styles.sentence}>
      <div className={styles.row}>
        <div className={styles.index}>{index}.</div>
        {en}
      </div>
      <div className={styles.row}>{cn}</div>
      {sc && <div className={styles.row}>{sc}</div>}
    </div>
  );
};

export default Sentence;