export type WorkItem = {
  id: string;
  title: string;
  description: string;
};

export type ProjectItem = WorkItem & {
  link: string | URL;
  stack: Array<string>;
};

export type BlogItem = WorkItem & {
  medium: string;
  published: string;
};

export type ToolItem = {
  score: number;
  brand: string;
  name: string;
  imgSrc: string;
  id: string;
}
