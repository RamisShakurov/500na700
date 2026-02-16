import {notFound} from 'next/navigation';
import styles from './news.module.scss'
import {getNewsData} from '@/app/api/news/route';
import Footer from "@/components/Footer/Footer";
import NewsContent from "@/components/NewsContent/NewsContent";

export type NewsItem = {
  id: number,
  image: string,
  title: string,
  content: string,
  date: string,
};

function getNewsById(id: string): NewsItem | null {
  try {
    const data = getNewsData();
    const news = data.news.find((item: NewsItem) => item.id === Number(id));
    return news || null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export default async function NewsDetail({
                                           params
                                         }: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  const news = getNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <NewsContent news={news} />
      <Footer />
    </div>
  );
}