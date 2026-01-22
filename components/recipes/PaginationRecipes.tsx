"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PAGE_SIZE } from "@/lib/const";
import { useSearchParams } from "next/navigation";

type Props = { currentPage: string; numOfRecipes: number };

function PaginationRecipes({ currentPage, numOfRecipes }: Props) {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  params.delete("page");

  const url = params.toString() ? `&${params.toString()}` : "";

  const numOfPages = Math.ceil(numOfRecipes / PAGE_SIZE);

  if (numOfPages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        {/* ************* PreviousPage *************** */}
        {+currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/recipes?page=${+currentPage - 1}${url}`}
            />
          </PaginationItem>
        )}

        {/* ************* Page 1 *************** */}
        <PaginationItem>
          <PaginationLink
            isActive={+currentPage === 1}
            href={`/recipes?page=${1}${url}`}
          >
            {1}
          </PaginationLink>
        </PaginationItem>

        {/* ************* Ellipsis *************** */}
        {+currentPage - 2 > 2 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : (
          // *** CurrentPage -2 ***
          +currentPage - 2 > 1 && (
            <PaginationItem>
              <PaginationLink href={`/recipes?page=${+currentPage - 2}${url}`}>
                {+currentPage - 2}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* ************* CurrentPage -1 *************** */}
        {+currentPage - 1 > 1 && (
          <PaginationItem>
            <PaginationLink href={`/recipes?page=${+currentPage - 1}${url}`}>
              {+currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* ************* CurrentPage *************** */}
        {+currentPage !== 1 && +currentPage !== numOfPages && (
          <PaginationItem>
            <PaginationLink
              isActive
              href={`/recipes?page=${+currentPage}${url}`}
            >
              {+currentPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* ************* CurrentPage +1 *************** */}
        {+currentPage + 1 < numOfPages && (
          <PaginationItem>
            <PaginationLink href={`/recipes?page=${+currentPage + 1}${url}`}>
              {+currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* ************* Ellipsis *************** */}
        {numOfPages - +currentPage - 2 >= 2 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : (
          // *** CurrentPage +2 ***
          +currentPage + 2 < numOfPages && (
            <PaginationItem>
              <PaginationLink href={`/recipes?page=${+currentPage + 2}${url}`}>
                {+currentPage + 2}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* ************* LastPage *************** */}
        <PaginationItem>
          <PaginationLink
            isActive={+currentPage === numOfPages}
            href={`/recipes?page=${numOfPages}${url}`}
          >
            {numOfPages}
          </PaginationLink>
        </PaginationItem>

        {/* ************* NextPage *************** */}
        {+currentPage < numOfPages && (
          <PaginationItem>
            <PaginationNext href={`/recipes?page=${+currentPage + 1}${url}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationRecipes;
