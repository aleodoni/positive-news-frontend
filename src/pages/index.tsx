import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';

import { getLastTenNews } from '@/util/helpers/news';
import { getMainInfo } from '@/util/helpers/info';
import { InfoType } from '@/models/info';
import { NewsType } from '@/models/news';

import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';

type PropsType = {
  info: InfoType;
  news: NewsType[];
};

const IndexPage: NextPage<PropsType> = ({ info, news }) => {
  return (
    <Layout title={info.title} description={info.description} by={info.by}>
      <div className="flex flex-col min-h-screen">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const lastTenNews = await getLastTenNews(context);
  const mainInfo = await getMainInfo(context);

  console.log(mainInfo);

  return {
    props: {
      news: lastTenNews,
      info: mainInfo,
    },
    revalidate: 60,
  };
};

export default IndexPage;
