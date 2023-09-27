import { useRouter } from "next/router";
import NewJobCard from "../CardComponents/NewJobCard";
import NoApplication from "../MainComponents/NoApplication";


const MyApplicationSnippet = (props) => {
  const router = useRouter();
  const pathName = router.asPath;

  return (
    <div className="">
      {pathName === "/workrequirementdashboard" ? (
        ""
      ) : (
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {props.Text}
        </h1>
      )}

      {props.postArequirementDetails?.length > 0 ? (
        props.postArequirementDetails.map((list, index) => {
          return (
            <div key={index} className="">
              <NewJobCard data={list} />
            </div>
          );
        })
      ) : (
        <div className="my-12">
          <NoApplication Text={"You haven't applied on any requirement yet"} />
        </div>
      )}
    </div>
  );
};

export default MyApplicationSnippet;
