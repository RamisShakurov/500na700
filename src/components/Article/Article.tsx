'use client'

import {TArticle} from "@/app/page";
import Image from "next/image";
import styles from './Article.module.scss'
import Link from "next/link";

type ArticleProps = {
    data: TArticle;
};

const Article = ({data}: ArticleProps) => {
    const {id, title, image, content, date} = data;
    return (
        <Link href={`/news/${id}`}>
            <article className={styles.article}>
                <Image src={image}
                       alt={title}
                       width={440}
                       height={300}
                       className={styles.image}
                       placeholder="blur"
                       blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
                       unoptimized/>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.content}>{content}</p>
                </div>
                <span className={styles.date}>{date}</span>
            </article>
        </Link>

    );
};

export default Article;