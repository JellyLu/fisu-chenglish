import Section from "../components/section";
import data from "./data";
import styles from "./index.module.scss";

const Home = () => {
  const renderList = () => {
    return data.map((section, index) => {
      return <Section {...section} key={index} index={index} />
    });
  };
  return (
    <div className={styles.page}>
      <div className={styles.title}>2023 Summer Universiade</div>
      <div className={styles.subtitle}>大运英语-100句</div>
      <div className={styles.list}>{renderList()}</div>
    </div>
  );
};

export default Home;