import React from "react";
interface Prop {
  params: { "catch-all": string[] };
  searchParams: { [key: string]: string };
}

// for route - /route1/part1/part2/part3?p1=v1&p2=v2
// {
//    params: { 'catch-all': [ 'route2', 'part1', 'part2', 'part3' ] },
//    searchParams: { p1: 'v1', p2: 'v2' }
// }
const page = (obj: Prop) => {
  console.log(obj, "aaaaaa");
  return (
    <div>
      <div>catch all page - complete param details</div>
      <div>
        Param:{" "}
        {obj.params["catch-all"].map((p) => (
          <span key={p}>{p} &nbsp;</span>
        ))}
      </div>
      <div>
        Search Params :
        <div>searchParams: {JSON.stringify(obj.searchParams)}</div>
      </div>
    </div>
  );
};

export default page;
