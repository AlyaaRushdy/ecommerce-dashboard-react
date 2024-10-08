import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function HeaderBreadcrumb({ prevPageLink, prevPage, currentPage }) {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to={prevPageLink}
                className="font-medium text-2xl text-primary"
              >
                {prevPage}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <p className="font-medium text-2xl">/</p>
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-2xl">
              {currentPage}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

export default HeaderBreadcrumb;
