import Link from "next/link";
import { useRouter } from "next/router";

const ProfileInnerPage = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav>
            <ul className={"my-6 md:my-0 text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex"}>
                <li className="w-full">
                    <a href="/employer-workplace/my-profile"
                        className={
                            currentRoute.includes('/employer-workplace/my-profile')
                                ? 'inline-block w-full p-4 border-b-2 border-blue-400  text-gray-900 bg-gray-100 rounded-l-lg pointer-events-none active focus:outline-none'
                                : 'inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300'
                        }
                        aria-current="page">Profile Information</a>
                </li>
                <li className="w-full">
                    <a href="/employer-workplace/company-information"
                        className={
                            currentRoute.includes('/employer-workplace/company-information')
                                ? 'inline-block w-full border-b-2 border-blue-400 p-4 text-gray-900 bg-gray-100 rounded-l-lg pointer-events-none active focus:outline-none'
                                : 'inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-300'
                        }
                        aria-current="page">Company Information</a>
                </li>
            </ul>
        </nav>
    )
}

export default ProfileInnerPage