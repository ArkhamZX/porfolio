// Code: Chips
type Props = {
  tegnologies: string[];
};

export const Chips = ({ tegnologies }: Props) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {tegnologies.map((teg, index) => (
        <li 
          key={`${teg}-${index}`}
          className="
            px-3 py-1 rounded-md text-xs uppercase
            bg-blue-100/20 dark:bg-blue-400/10
            border border-gray-300/20 dark:border-gray-500/30
            text-gray-700 dark:text-gray-300
            flex items-center gap-1
            transition-colors duration-200
          "
        >
          {teg}
        </li>
      ))}
    </ul>
  );
};