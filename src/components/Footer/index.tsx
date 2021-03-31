import { AiOutlineCopyright } from 'react-icons/ai';
type Props = {
  description: string;
  by: string;
};

const Footer: React.FC<Props> = ({ description, by }) => {
  return (
    <div
      className="
      flex
      items-center
      justify-end
      w-full
      h-20
      px-4"
    >
      <span className="flex flex-col items-center justify-center w-full h-full md:text-base xs:text-xs text-gray-400 pl-4">
        <span className="">{description}</span>
        <span className="flex">
          <span className="flex items-center mr-2">
            <AiOutlineCopyright />
          </span>
          <span>{by}</span>
        </span>
      </span>
    </div>
  );
};

export default Footer;
