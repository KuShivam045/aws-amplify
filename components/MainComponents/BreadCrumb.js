import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const BreadCrumb = (props) => {
  return (
    <div
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Breadcrumb"
    >
      <ul role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a
              href="/"
              className={
                props.color === "White"
                  ? "text-white hover:text-gray-500"
                  : "text-gray-400 hover:text-gray-500"
              }
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {props.pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className={
                  props.color === "White"
                    ? "h-5 w-5 flex-shrink-0 text-white"
                    : "h-5 w-5 flex-shrink-0 text-gray-400"
                }
                aria-hidden="false"
              />
              <a
                href={page.href}
                className={
                  props.color === "White"
                    ? "ml-4 text-sm capitalize font-medium text-white hover:text-gray-200 "
                    : "ml-4 text-sm capitalize font-medium text-gray-500 hover:text-gray-700"
                }
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BreadCrumb;
