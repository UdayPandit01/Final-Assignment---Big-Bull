export interface WorldIndices {
  header: Header[];
  dataList: DataList[];
}
export interface Header {
  name: string;
  type: string;
}
export interface DataList {
  heading: string;
  data: string[][];
}
