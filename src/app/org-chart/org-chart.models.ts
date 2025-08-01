export interface ChartNode {
    name: string | null;
    childs: ChartNode[];
    parent?: ChartNode;
}
