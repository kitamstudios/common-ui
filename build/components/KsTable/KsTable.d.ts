export declare type KsTableSortOrder = 'asc' | 'desc' | undefined;
export interface KsTableRow {
    id: number;
}
export interface KsTableColumnDefinition {
    id: number;
    field: string;
    displayName: string;
    sortable: boolean;
    width?: string;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
export interface KsTableProps {
    sortBy: string;
    sortOrder?: KsTableSortOrder;
    requestSort?: (col: string) => void;
    columnDefinitions: KsTableColumnDefinition[];
    rows: KsTableRow[];
}
export declare const KsTable: (props: KsTableProps) => JSX.Element;
export default KsTable;
