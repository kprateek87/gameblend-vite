import { useParams } from "react-router";

export default function Deals({ loaderData }) {
  let params = useParams();
  return (
    <>
      <div>Hello {loaderData.dealName}</div>
    </>
  );
}
