type Props = {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
};

export default function Categories({
  categories,
  selected,
  setSelected,
}: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && 'text-sky-600'
            }`}
            key={category}
            onClick={() => setSelected(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
