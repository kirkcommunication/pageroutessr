export type PostTypes ={
    id : number;
    title : {rendered : string};
    content : { rendered : string};
    yoast_head_json?: {
    title: string;
    og_description: string;
  };
}