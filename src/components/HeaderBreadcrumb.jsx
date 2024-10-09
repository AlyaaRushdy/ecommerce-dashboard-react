import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { ChevronRight, Slash, SlashIcon, SlashSquare } from "lucide-react"

const HeaderBreadcrumb = ({ prevPageLink, prevPage, currentPage }) => {
  return (
    <Breadcrumb className="w-full max-w-screen-xl mx-auto px-1 sm:px-6 lg:px-2">
      <BreadcrumbList className="flex flex-wrap items-center space-x-1 sm:space-x-2">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to={prevPageLink}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {prevPage}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground">
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default HeaderBreadcrumb