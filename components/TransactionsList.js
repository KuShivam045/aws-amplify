const TransactionsList = (props) => {
  const dateHandler = (transactionDate) => {
    let date = new Date(transactionDate);
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

  return (
    <div>
      <div className="min-w-full border-separate border-2 border-gray-200 rounded-xl">
        <div className="">
          <div className="text-base font-bold">{props.tableHeader}</div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-y-auto md:min-w-full sm:min-w-full border-b border-gray-200 bg-white shadow sm:rounded-lg">
                  <table className="min-w-full overflow-x-hidden divide-y divide-gray-200 rounded-xl">
                    <thead className="bg-gray-50 ">
                      <tr>
                        {/* <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex ">
                            <span className="mr-2">ID</span>
                          </div>
                        </th> */}
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex">
                            <span className="mr-2">Order ID</span>
                          </div>
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex">
                            <span className="mr-2">Freelancer</span>
                          </div>
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex">
                            <span className="mr-2">Amount</span>
                          </div>
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex">
                            <span className="mr-2">Type</span>
                          </div>
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex">
                            <span className="mr-2">Created_On</span>
                          </div>
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-xs font-medium uppercase leading-4 tracking-wider text-gray-500">
                          <div className="flex cursor-pointer">
                            <span className="mr-2">Status</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {props.data?.map((person, idx) => {
                        return (
                          <tr key={idx}>
                           {/*  <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p>
                                {props.pageLimit * (props.pageNum - 1) +
                                  (idx + 1)}
                              </p>
                            </td> */}
                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p className="">
                                {person.PGOrderId}
                              </p>
                            </td>
                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p>
                                {person.FreelancerFirstName}&nbsp;
                                {person.FreelancerLastName}
                              </p>
                            </td>
                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p>{person.GrandTotal}</p>
                            </td>
                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p>{person.PaymentType}</p>
                            </td>
                            <td className="whitespace-no-wrap px-6 py-4 text-sm leading-5">
                              <p>{dateHandler(person.UpdatedAt)}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700 text-center">
                              <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                                {person.PaymentStatus} 
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
