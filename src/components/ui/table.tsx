import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faSort,
  faSortUp,
  faSortDown,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Table type definitions
export type TableHeaderType = {
  label: string;
  key: string;
  sortable?: boolean;
  onItemClick?: (item: TableDataType) => void;
};

export type TableDataType = Record<string, string> & { actions?: React.ReactNode };


export interface TableProps {
  data: TableDataType[];
  headers: TableHeaderType[];
  filterFields?: FilterField[];
  showPagination?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  onPageChange?: (direction: 'forward' | 'backward') => void;
  onSortChange?: (header: TableHeaderType, direction: 'ascending' | 'descending') => void;
  onRowClick?: (row: TableDataType) => void;
  className?: string;
  total?: number;
  previousToken?: string | null;
  nextToken?: string | null;
}

export type FilterField = {
  name: string;
  label: string;
  type: 'text' | 'daterange';
  defaultValue?: string | number | boolean;
  dateRangeControls?: {
    fromName: string;
    fromDefaultValue?: string;
    toName: string;
    toDefaultValue?: string;
  };
};

const filterSchema = z.record(z.string(), z.string());

export function Table({
  data,
  headers,
  filterFields = [],
  showPagination = true,
  isFirstPage = true,
  isLastPage = false,
  onPageChange,
  onSortChange,
  onRowClick,
  className,
  total,

}: TableProps) {
  const [activeSortField, setActiveSortField] = useState<string>('');
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [showMoreMap, setShowMoreMap] = useState<Record<string, boolean>>({});
  const { control } = useForm<TableDataType>({ resolver: zodResolver(filterSchema), defaultValues: {} });

  const handleSort = (header: TableHeaderType) => {
    if (!header.sortable) return;
    let direction: 'ascending' | 'descending' = 'ascending';
    if (activeSortField === header.key) {
      setIsAscending((prev) => !prev);
      direction = isAscending ? 'descending' : 'ascending';
    } else {
      setActiveSortField(header.key);
      setIsAscending(true);
    }
    if (onSortChange) onSortChange(header, direction);
  };

  const handleRowClick = (row: TableDataType) => {
    if (onRowClick) onRowClick(row);
  };

  const handleMoreActionsClick = (id: string) => {
    setShowMoreMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Filter Fields */}
      {filterFields.length > 0 && (
        <form className="mb-4 flex gap-2">
          {filterFields.map((field) => {
            if (field.type === 'daterange' && field.dateRangeControls) {
              return (
                <React.Fragment key={field.name}>
                  <Controller
                    control={control}
                    name={field.dateRangeControls.fromName as never}
                    render={({ field: ctrlField }) => (
                      <input type="date" placeholder="From" className="input input-bordered px-2 py-1 rounded border" {...ctrlField} />
                    )}
                  />
                  <Controller
                    control={control}
                    name={field.dateRangeControls.toName as never}
                    render={({ field: ctrlField }) => (
                      <input type="date" placeholder="To" className="input input-bordered px-2 py-1 rounded border" {...ctrlField} />
                    )}
                  />
                </React.Fragment>
              );
            }
            return (
              <Controller<TableDataType>
                key={field.name}
                control={control}
                name={field.name as never}
                render={({ field: ctrlField }) => (
                  <input placeholder={field.label} className="input input-bordered px-2 py-1 rounded border" {...ctrlField} value={typeof ctrlField.value === 'string' ? ctrlField.value : ''} />
                )}
              />
            );
          })}
          <Button type="submit" variant="outline">Filter</Button>
        </form>
      )}
      <div className="w-full border rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-50">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  className={cn('px-4 py-2 text-left cursor-pointer select-none', header.sortable && 'hover:text-primary')}
                  onClick={() => handleSort(header)}
                >
                  {header.label}
                  {header.sortable && (
                    <span className="ml-2">
                      {activeSortField === header.key ? (
                        isAscending ? <FontAwesomeIcon icon={faSortUp} className="inline w-4 h-4" /> : <FontAwesomeIcon icon={faSortDown} className="inline w-4 h-4" />
                      ) : (
                        <FontAwesomeIcon icon={faSort} className="inline w-4 h-4 text-muted-foreground" />
                      )}
                    </span>
                  )}
                </th>
              ))}
              {/* Actions column if any row has actions */}
              {data.some((row) => row.actions) && <th className="px-4 py-2">Actions</th>}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.length === 0 ? (
              <tr>
                <td colSpan={headers.length + 1} className="text-center text-muted-foreground py-4">
                  No data
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} onClick={() => handleRowClick(row)} className="hover:bg-muted cursor-pointer">
                  {headers.map((header) => (
                    <td key={header.key} onClick={() => header.onItemClick && header.onItemClick(row)} className="px-4 py-2">
                      {row[header.key] as React.ReactNode}
                    </td>
                  ))}
                  {row.actions && (
                    <td className="px-4 py-2 relative">
                      <Button variant="ghost" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); handleMoreActionsClick(String(row['id'])); }}>
                        <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
                      </Button>
                      {/* Example: show more actions dropdown if needed */}
                      {showMoreMap[String(row['id'])] && (
                        <div className="absolute z-10 bg-white border rounded shadow p-2">
                          {row.actions}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
          {showPagination && (
            <tfoot>
              <tr>
                <td colSpan={headers.length + 1}>
                  <div className="flex items-center justify-between gap-2 py-2">
                    <div className="text-muted-foreground text-sm">
                      {typeof total === 'number' ? `Total: ${total}` : ''}
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" disabled={isFirstPage} onClick={() => onPageChange && onPageChange('backward')}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" disabled={isFirstPage} onClick={() => onPageChange && onPageChange('backward')}>
                        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" disabled={isLastPage} onClick={() => onPageChange && onPageChange('forward')}>
                        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" disabled={isLastPage} onClick={() => onPageChange && onPageChange('forward')}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

