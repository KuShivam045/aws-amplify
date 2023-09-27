import { MdQuestionAnswer } from "react-icons/md";
import { encodeAndSendToChat } from "../../pages/_app";
const MyProposal = (props) => {
  const dateHandler = (proDate) => {
    let date = new Date(proDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
  };

  const proposalStatusHandler = (status) => {
    if (status === "") {
      return <span className="text-base font-bold">Awaiting response</span>;
    }
    if (status === "Accept") {
      return (
        <span className="text-base font-bold text-[#268b22]">Accepted</span>
      );
    }
    if (status === "Reject") {
      return <span className="text-base font-bold text-red-500">Rejected</span>;
    }
  };
  return (
    <div className="bg-white shadow-md p-4 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-bold"> Recent proposals received</h3>

      {props?.freelancerProposal?.length ? (
        <div className="pt-2 max-h-[500px] overflow-auto">
          {props?.freelancerProposal?.map((item, i) => {
            return (
              <>
                <div className="py-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 italic">
                      {dateHandler(item.UpdatedAt)}
                    </div>
                    <div className="text-base flex gap-2">
                      Proposal Amount
                      <span className="font-semibold">
                        {item.Currency + item.PraposalAmount + "/" + item.Unit}
                      </span>
                    </div>
                    <div className="text-base flex gap-2">
                      Deposit Amount
                      <span className="font-semibold">
                        {item.Currency + item.DepositAmount}
                      </span>
                    </div>
                    <div className="text-base font-semibold">
                      Requirement
                      <a
                        href={"/clientrequirementdetail/" + item.RequirementId}
                        className="text-blue-500 pl-3"
                      >
                        view
                      </a>
                    </div>
                    <div className="text-lg font-semibold flex gap-2">
                      Status
                      <span className="">
                        {proposalStatusHandler(item.ClientRStatus)}
                      </span>
                    </div>
                    <div className="text-sm leading-6 text-gray-600"> {item.ProposalDetail}</div>
                    <div className="flex justify-end gap-1 items-center mr-2">
                      <MdQuestionAnswer />
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          encodeAndSendToChat(item.FreelancerId, item.ClientId);
                        }}
                        className=""
                      >
                        <div className="text-blue-500 "> Chat</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="border"> </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="text-sm leading-6 text-gray-600">
          You have not given any proposal to propspective clients yet
        </div>
      )}
    </div>
  );
};

export default MyProposal;
