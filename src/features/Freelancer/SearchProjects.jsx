import { Button } from "../../UI/shadcn/Button";
import useAllCategories from "../category/categoryHooks/useAllCategories";
import { SelectDropDown } from "./ProjectSection";

export function SearchProjects({ setSelectedCategory, setSearch, setSortBy }) {
  const { categories, isLoading } = useAllCategories();
  const allOptions = categories?.map((category) => ({
    value: category._id,
    label: category.title,
  }));
  const sortOptions = [
    {
      label: "بالاترین مبلغ",
      value: "budget-asc",
    },
    { label: "پایین ترین مبلغ", value: "budget-desc" },
  ];
  function resetFilters() {
    setSortBy(null);
    setSearch("");
    setSelectedCategory("all");
  }
  return (
    <div className="w-[300px] sm:w-[600px] lg:w-[800px] flex flex-col sm:flex-row gap-y-2 items-center justify-between">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو در پروژه ها"
        className="text-sm dark:text-white placeholder:text-sm placeholder:opacity-50 w-full sm:w-[250px] rounded-md h-[38px]  dark:border-indigo-400 dark:focus:border-indigo-400 dark:hover:border-indigo-300 bg-white px-4 hover:border hover:border-gray-200 focus:border focus:border-gray-300 focus:ring-0 transition-all dark:bg-slate-600 dark:placeholder:text-white border-gray-50"
      />
      <SelectDropDown
        options={allOptions}
        placeholder="دسته بندی"
        setState={setSelectedCategory}
      />
      <SelectDropDown
        options={sortOptions}
        placeholder="مرتب سازی"
        setState={setSortBy}
      />
      <Button
        onClick={resetFilters}
        className="bg-sky-400 dark:bg-indigo-500 text-white hover:bg-sky-600 dark:hover:bg-indigo-600"
      >
        ریست
      </Button>
    </div>
  );
}
