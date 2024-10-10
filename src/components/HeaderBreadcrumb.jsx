/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const HeaderBreadcrumb = ({ prevPageLink, prevPage, currentPage }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-2 text-sm sm:text-lg lg:text-2xl leading-none font-medium">
        {prevPage && (
          <>
            <BreadcrumbItem className="inline-flex">
              <BreadcrumbLink asChild>
                <Link
                  to={prevPageLink}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  {prevPage}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="[&>svg]:size-4 sm:[&>svg]:size-5 mx-2 self-end" />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground">
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HeaderBreadcrumb;
