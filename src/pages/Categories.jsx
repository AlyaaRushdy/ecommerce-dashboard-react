import Header from "@/components/shared/Header";
import DataTable from "@/components/shared/DataTable";
import { categoriesArray } from "@/test arrays/categories";
import { categoriesColumns } from "@/data table columns/categoriesColumns";

function Categories() {
  return (
    <>
      <div className="p-5">
        <Header currentPage={"Categories"} />
        <div className="py-4">
        <DataTable
          ButtonLink={"/categories/create"}
          ButtonText={"Create Category"}
          columns={categoriesColumns}
          data={categoriesArray}
          tableTitle={"All Categories"}
        />
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 md:gap-8 py-4">
      </main>

    </>
  );
}

export default Categories;
