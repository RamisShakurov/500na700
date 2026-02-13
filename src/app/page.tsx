import styles from "@/app/page.module.css";
import Article from "@/components/Article/Article";
import { getNewsData } from './api/news/route';

export const dynamic = 'force-dynamic'

export type TArticle = {
    id: number;
    image: string;
    title: string;
    content: string;
    date: string;
};

export default async function Home() {
    const data = getNewsData();

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Новости</h1>
            <ul className={styles.list}>
                {data.news.map((item: TArticle) => (
                    <li className={styles.item}
                        key={item.id}>
                        <Article data={item} />
                    </li>
                ))}
            </ul>
        </main>
    );
}