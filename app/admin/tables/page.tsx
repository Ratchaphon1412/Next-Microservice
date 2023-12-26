import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/app/components/Tables/TableOne";
import TableThree from "@/app/components/Tables/TableThree";
import TableTwo from "@/app/components/Tables/TableTwo";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
