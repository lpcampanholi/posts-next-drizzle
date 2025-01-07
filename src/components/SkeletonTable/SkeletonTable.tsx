import { columns } from "../DataTable/columns.";
import { Skeleton } from "../ui/skeleton";
import { Table, TableBody, TableHeader, TableCell, TableHead, TableRow } from "../ui/table";

export default function SkeletonTable() {
  return (

    <div className="rounded-md border my-4">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={index} >
                <Skeleton className="h-4 w-1/4" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(3)].map((_, index) => (
            <TableRow key={index} >
              {columns.map((_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton className="h-4 w-3/4" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}