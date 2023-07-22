import Sentence from "../sentence/index";
import styles from "./index.module.scss";

const Section = (
  { name, sentences, index }: SectionType & { index: number }
) => {
  const renderSentences = () => {
    return sentences.map((sentence, index) => {
      return <Sentence {...sentence} key={index} index={index} />
    });
  };
  return (
    <div className={styles.section}>
      <div className={styles.title}>No. {index+1} {name}</div>
      <div className={styles.divider} />
      <div>
        {renderSentences()}
      </div>
    </div>
  );
};

export default Section;