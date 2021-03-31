import { NewsType } from '@/models/news';

type Props = {
  news: NewsType;
};

const NewsCard: React.FC<Props> = ({ news }) => {
  const style = {
    backgroundImage: `url(${news.image_url})`,
  };

  return (
    <a href={news.from} target="_blank" rel="noreferrer">
      <div className="flex flex-col md:flex-row rounded-lg h-64 my-4 md:mr-4 p-4 bg-gray-900 cursor-pointer">
        <span
          className="flex justify-center bg-cover bg-no-repeat bg-center h-full w-full md:w-3/4"
          style={style}
        >
          &nbsp;
        </span>
        <div className="flex text-gray-200 md:text-xl font-bold w-full md:px-4 pt-4 md:pt-0">
          {news.title}
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
