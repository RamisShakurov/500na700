import styles from "@/app/news/[id]/news.module.scss";
import Image from "next/image";
import {NewsItem} from "@/app/news/[id]/page";

type NewsContentProps = {
  news: NewsItem;
};

export default function NewsContent({ news }: NewsContentProps) {
  const { image, title, date, content } = news;

  return (
    <div className={styles.section}>
      <article>
        <div className={styles.hero}>
          <Image
            className={styles.image}
            src={image}
            alt={title}
            width={440}
            height={320}
            unoptimized
          />
          <div className={styles.articleBody}>
            <span className={styles.date}>{date}</span>
            <h2 className={styles.title}>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
