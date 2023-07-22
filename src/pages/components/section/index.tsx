import { useState } from "react";
import classes from "classnames";
import Sentence from "../sentence/index";

import styles from "./index.module.scss";

const Section = (
  { name, sentences, index }: SectionType & { index: number }
) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClickHeader = () => {
    setCollapsed(!collapsed);
  };

  const renderSentences = () => {
    if (collapsed) {
      return null;
    }

    return (
      <div>
       <div className={styles.divider} />
       {
         sentences.map((sentence, index) => {
           return <Sentence {...sentence} key={index} index={index} />
         })
       }
     </div>
  );
  };

  return (
    <div className={styles.section}>
      <div className={styles.header} onClick={handleClickHeader}>
        <div className={styles.title}>No. {index+1} {name}</div>
        <div className={classes(styles.icon, collapsed && styles.collapsed)}>^</div>
      </div>
      {renderSentences()}
    </div>
  );
};

export default Section;