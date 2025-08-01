type Props = {
  selected: string;
  setSelected: (cat: string) => void;
};

export const CategoryTabs = ({ selected, setSelected }: Props) => {
  const categories = ['Photographers', 'Caterers', 'Purohits', 'Decorators'];
  return (
    <div className="flex gap-4 p-2 border-b">
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-3 py-1 rounded ${selected === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelected(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
