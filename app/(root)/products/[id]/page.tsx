import Carousel from "@/components/Carousel";
import Comment from "@/components/Comment";
import ReadMore from "@/components/ReadMore";
import Sliders from "@/components/Sliders";
import SocialShare from "@/components/SocialShare";
import Specifications from "@/components/Specifications";
import Views from "@/components/Views";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="container mb-4">
                <ol className="hidden lg:flex items-center space-x-2 pt-1 pl-2 flex-wrap bg-white text-sm">
                    <li>
                        <Link
                        href="/"
                        title="Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate nuxt-link-active"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/cat"
                        title="All categories"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/cat/1"
                        title="All Smartphones from Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Smartphones
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/brand/1"
                        title="Oppo products from Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Oppo
                        </Link>
                    </li>
                    <li>
                        <p className="hover:text-gray-600 py-1 rounded max-w-sm inline-block truncate">
                        Oppo A78, 8GB/256GB
                        </p>
                    </li>
                </ol>
            </div>

            <div className="container my-4">
                <div className="rounded-md border p-2 my-3 bg-white">
                    <Link
                        href="/"
                    >
                        <Image
                            src="/ads/900.png"
                            width={900}
                            height={90}
                            alt=""
                            className="rounded-md hidden md:block w-full h-auto"
                        />
                        <Image
                            src="/ads/300.png"
                            width={300}
                            height={300}
                            alt=""
                            className="rounded-md md:hidden block w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-[75%]">
                        <div className="flex flex-col md:items-center md:flex-row bg-white gap-4">
                            <div className="w-full md:w-[40%] p-2">
                                <Sliders
                                    slides={[
                                        {
                                        id: 1,
                                        image: '/product/1.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 2,
                                        image: '/product/2.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 3,
                                        image: '/product/3.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 4,
                                        image: '/product/4.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 5,
                                        image: '/product/5.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 6,
                                        image: '/product/6.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 7,
                                        image: '/product/7.jpg',
                                        link: '/',
                                        },
                                    ]}
                                />
                            </div>
                            <div className="w-full md:w-[60%] p-2 md:p-4">
                                <h1 className="text-xl md:text-3xl font-light line-clamp-3">
                                Ace Hardware Stores: 5-Gallon Bucket + 20% Off Select Items Fitting in Bucket
                                </h1>
                                
                                <div className="flex items-center my-4 text-xl md:text-3xl">
                                    <h1 className=" font-bold">
                                        $100
                                    </h1>
                                    <del className="text-gray-500 mx-4">$150</del>
                                    <p className="text-green-700 font-bold">
                                    41% off
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div
                                        className='text-sm border rounded-full py-2 px-4 flex space-x-2 items-center'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z"/></svg>
                                        <p>100</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" fill-opacity="0.89" fill-rule="evenodd" d="M15.807.939c.396.367.655 1.133.706 1.595c.59.366 1.288 1.104 1.349 2.494c1.053.731 1.853 2.083.854 4.06c.58.54 1.227 2.188.395 3.516c-.969 1.552-3.075 1.66-5.174 1.383c.56 1.565.77 3.009-.116 4.488C12.94 19.787 11.724 20 11.308 20c-1.138 0-1.918-.979-2.234-2.283c-.115-.364-.246-1.224-.297-1.45q-.398-2.16-2.67-3.453a11.4 11.4 0 0 0-2.123-.946h-2.34c-.521 0-1.144-.527-1.144-1.165V3.067q.111-1.083 1.202-1.082h3.11Q6.857 1.52 8.89.99C10.2.637 10.487.52 11.403.268c2.053-.532 3.478-.24 4.404.67m-2.382.424c-.819 0-1.856.252-2.316.399c-.162.051-.446.135-.745.221l-.3.087l-.288.082l-.56.158s-1.41.378-4.173 1.02q-.154.018-.166.022v7.38q2.267.873 3.53 2.118c1.264 1.244 1.615 2.368 1.822 3.807c.118.723.309 1.306.597 1.705a.65.65 0 0 0 .342.251c.147.047.35.05.783-.184c.433-.236.99-.853 1.095-1.772c.07-.893-.17-1.667-.492-2.481a16 16 0 0 0-.357-.822c-.218-.413.11-1.099.786-.95c.906.255 3.154.6 4.422 0q1.106-.64.547-2.066a1.7 1.7 0 0 0-.495-.553c-.17-.102-.502-.544-.103-1.045c.396-.635.975-1.928-.49-2.734a.66.66 0 0 1-.34-.57c-.02-.274.024-1.29-.73-1.744c-.18-.097-.397-.177-.52-.41c-.078-.154-.103-.528-.103-.528c-.103-.632-.245-1.222-1.746-1.391M3.519 3.348H1.861v7.157h1.658z"/></svg>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
                                        88 Comments
                                    </div>
                                    <Views view={1001} />
                                </div>
                                <div className="flex items-center space-x-2 text-xl p-2">
                                    <Link
                                        href="/"
                                        className=" bg-secondary p-2 rounded-full text-white font-bold text-center w-full block my-4"
                                    >
                                        Get Deal at SIERRA
                                    </Link>
                                    <Link
                                        href="/"
                                        className="border-2 p-2 hover:bg-gray-50 rounded-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3h8a3 3 0 0 1 3 3v15l-7-3l-7 3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13.5l6-2.56l6 2.56V6a2 2 0 0 0-2-2z"/></svg>
                                    </Link>
                                </div>
                                <SocialShare link="https://jqdeal.vercel.app/products/1" />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold mb-1 mt-4">
                            Specifications
                            </h1>
                            <div className="bg-white mt-2">
                                <Specifications
                                    items={[
                                    {
                                        title: "GENERAL",
                                        content: 
                                        <>
                                        <table className="w-full">
                                            <tbody className="w-full">
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Screen size
                                                    </td>
                                                    <td className="w-auto p-2">75 inch</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                    Display Resolution
                                                    </td>
                                                    <td className="w-auto p-2">4K Ultra HD (3,840 x 2,160)</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                    Refresh rate
                                                    </td>
                                                    <td className="w-auto p-2">60 Hz</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Backlight type
                                                    </td>
                                                    <td className="w-auto p-2">Direct</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </>,
                                    },
                                    {
                                        title: "PLATFORM",
                                        content:
                                        <>
                                        <table className="w-full">
                                            <tbody className="w-full">
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Screen size</td>
                                                    <td className="w-auto p-2">75 inch</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Display Resolution</td>
                                                    <td className="w-auto p-2">4K Ultra HD (3,840 x 2,160)</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Refresh rate</td>
                                                    <td className="w-auto p-2">60 Hz</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Backlight type&nbsp;</td>
                                                    <td className="w-auto p-2">Direct&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </>,
                                    },
                                    ]}
                                />
                            </div>
                        </div>

                        <Link
                        href="/"
                        className="bg-white p-1 md:p-2 mt-2 shadow border block"
                        >
                        <Image
                            src="/ads/720.png"
                            width={720}
                            height={90}
                            alt="ads"
                            className="h-min w-full"
                        />
                        </Link>

                        <div className="my-3">
                            <h1 className="text-xs md:text-sm font-bold bg-white p-2 border-b">
                                Description
                            </h1>
                            <div className="bg-white text-sm md:text-base leading-normal">
                            <ReadMore height="h-40">
                                <p className="mb-2">
                                    It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here, content here, making it look like readable
                                    English.
                                </p>
                                <p className="mb-2">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for lorem ipsum will uncover many
                                    web sites still in their infancy. Various versions have evolved over the
                                    years, sometimes by accident, sometimes on purpose (injected humour and the
                                    like).
                                </p>
                                <h4 className="mb-2 font-bold">
                                    Key Responsibilities
                                </h4>
                                <ul className="list-disc ml-8">
                                    <li>
                                        Be involved in every step of the product design cycle from discovery to
                                        developer handoff and user acceptance testing.
                                    </li>
                                    <li>
                                        Work with BAs, product managers and tech teams to lead the Product
                                        Design
                                    </li>
                                    <li>
                                        Maintain quality of the design process and ensure that when designs are
                                        translated into code they accurately reflect the design specifications.
                                    </li>
                                    <li>
                                        Accurately estimate design tickets during planning sessions.
                                    </li>
                                    <li>
                                        Contribute to sketching sessions involving non-designersCreate, iterate
                                        and maintain UI deliverables including sketch files, style guides, high
                                        fidelity prototypes, micro interaction specifications and pattern
                                        libraries.
                                    </li>
                                    <li>
                                        Ensure design choices are data led by identifying assumptions to test
                                        each sprint, and work with the analysts in your team to plan moderated
                                        usability test sessions.
                                    </li>
                                    <li>
                                        Design pixel perfect responsive UI’s and understand that adopting common
                                        interface patterns is better for UX than reinventing the wheel
                                    </li>
                                    <li>
                                        Present your work to the wider business at Show &amp; Tell sessions.
                                    </li>
                                </ul>
                                <h4 className="mb-2 font-bold">
                                    Work &amp; Experience
                                </h4>
                                
                                <ul className="list-disc ml-8">
                                    <li>
                                    You have at least 3 years experience working as a Product Designer.
                                    </li>
                                    <li>You have experience using Sketch and InVision or Framer X</li>
                                    <li>
                                    You have some previous experience working in an agile environment – Think
                                    two-week sprints.
                                    </li>
                                    <li>You are familiar using Jira and Confluence in your workflow</li>
                                </ul>
                            </ReadMore>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="bg-white p-1 md:p-2 shadow border block"
                        >
                            <Image
                                src="/ads/720.png"
                                width={720}
                                height={90}
                                alt="ads"
                                className="h-min w-full"
                            />
                        </Link>
                        <div className="my-3">
                            <h1 className="text-xs md:text-sm font-bold bg-white p-2 border-b">
                                About the Poster
                            </h1>
                            <div className="bg-white p-4">
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/user/1.jpg"
                                        width={100}
                                        height={100}
                                        alt="ads"
                                        className="h-28 rounded-full object-cover border-4 mr-2 w-28"
                                    />
                                    <h1 className="font-bold text-xl mt-2">
                                        Blue Ranger
                                    </h1>
                                    <p>
                                        Joined in Mar 2020
                                    </p>
                                </div>
                                <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                    <div className="bg-gray-50 rounded p-2 flex flex-col items-center justify-center">
                                        <h1 className="text-blue-500 font-bold text-xl">
                                            2,251
                                        </h1>
                                        <div className="flex items-center space-x-1 mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20.605 5.988a2.8 2.8 0 0 0-2.6-2.59l-4.56-.32a2.84 2.84 0 0 0-2.17.81L3.9 11.278a2.794 2.794 0 0 0 0 3.95l4.87 4.88a2.8 2.8 0 0 0 3.96 0l7.38-7.39a2.78 2.78 0 0 0 .81-2.17ZM12.015 19.4a1.8 1.8 0 0 1-2.54 0l-4.87-4.87a1.793 1.793 0 0 1 0-2.55l1.17-1.17l7.42 7.42Zm7.38-7.38l-5.5 5.5l-7.41-7.42l5.5-5.5a1.8 1.8 0 0 1 1.27-.53c.04 0 .08.01.12.01l4.56.32a1.8 1.8 0 0 1 1.67 1.66l.32 4.56a1.83 1.83 0 0 1-.525 1.398Z"/><circle cx="17" cy="6.999" r=".862" fill="currentColor"/></svg>
                                            <p>
                                            Deal Posts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded p-2 flex flex-col items-center justify-center">
                                        <h1 className="text-blue-500 font-bold text-xl">
                                            2,365
                                        </h1>
                                        <div className="flex items-center space-x-1 mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
                                            <p>
                                            Comments Posts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded p-2 flex flex-col items-center justify-center">
                                        <h1 className="text-blue-500 font-bold text-xl">
                                            16,464
                                        </h1>
                                        <div className="flex items-center space-x-1 mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.04 7.772c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.051 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507m1.189-3.824c1.677-1.96 2.515-2.941 2.223-3.882s-1.523-1.22-3.983-1.776l-.636-.144c-.699-.158-1.048-.237-1.329-.45s-.46-.536-.82-1.182l-.328-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408"/></svg>
                                            <p>
                                                Reputation Points
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded p-2 flex flex-col items-center justify-center">
                                        <h1 className="text-blue-500 font-bold text-xl">
                                        1,715
                                        </h1>
                                        <div className="flex items-center space-x-1 mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M12 21a9 9 0 1 0-6.364-2.636"/><path d="m16 10l-3.598 4.318c-.655.786-.983 1.18-1.424 1.2s-.803-.343-1.527-1.067L8 13"/></g></svg>
                                            <p>
                                                Votes Submitted
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="bg-white p-1 md:p-2 shadow border block"
                        >
                            <Image
                                src="/ads/720.png"
                                width={720}
                                height={90}
                                alt="ads"
                                className="h-min w-full"
                            />
                        </Link>
                        <Comment
                            items={[
                            {
                                id: 1,
                                text: "This is the first comment.",
                                img: "/user/1.jpg",
                                author: "User1",
                                votes: 5,
                                replies: [
                                {
                                    id: 2,
                                    text: "This is a reply to the first comment.",
                                    img: "/user/2.jpg",
                                    author: "User2",
                                    votes: 3,
                                    replies: [
                                    {
                                        id: 3,
                                        text: "This is a reply to the first reply.",
                                        img: "/user/3.jpg",
                                        author: "User3",
                                        votes: 1,
                                        replies: [],
                                    },
                                    ],
                                },
                                ],
                            },
                            {
                                id: 4,
                                text: "This is another comment.",
                                img: "/user/4.jpg",
                                author: "User4",
                                votes: 2,
                                replies: [],
                            },
                            ]}
                        />
                    </div>
                    <div className="w-full md:w-[25%] hidden md:block">
                        <div className="sticky top-0">
                            <Link
                            href="/"
                            className="bg-white p-2 shadow border block"
                            >
                            <Image
                                src="/ads/600.png"
                                width={300}
                                height={600}
                                alt="ads"
                                className="h-min w-min"
                            />
                            </Link>

                            <Link
                            href="/"
                            className="bg-white p-2 shadow border block"
                            >
                            <Image
                                src="/ads/300.png"
                                width={300}
                                height={600}
                                alt="ads"
                                className="h-min w-min"
                            />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" container my-4">
                <Carousel
                    title="Best Deal Posted"
                    img=""
                    link="/"
                    left={0}
                    desktops={4}
                    tablets={3}
                    mobile={2}
                    slider={2}
                    limit={4}
                    items={[
                    {
                        img: "/product/1.jpg",
                        link: "/products/1",
                        title: "Supply a Four Piece Set of American Solid Color European and American Style Chemical Fiber Bed Sheets",
                        featured: "Featured!",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/2.jpg",
                        link: "/products/1",
                        title: "China Wholesale Cheap Hand Made Brazilian Virgin Remy Long Human Hair Natural Bone Straight 360 Full HD Transparent Swiss Lace Front Wigs for Black Women",
                        featured: "Featured!",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/3.jpg",
                        link: "/products/1",
                        title: "Natural Bone Straight 360 Full HD Transparent Swiss Lace Front Wigs for Black Women",
                        featured: "",
                        sele: "Sele!",
                        price: "29,500",
                    },
                    {
                        img: "/product/4.jpg",
                        link: "/products/1",
                        title: "Floral Blue Bed Skirt 4-Piece Polyester Bedding Set",
                        featured: "",
                        sele: "Sele!",
                        price: "29,500",
                    },
                    {
                        img: "/product/5.jpg",
                        link: "/products/1",
                        title: "Xuchang Hair Factory Kbeth Straight Kinky Curly Body Wave 613 Bob Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/6.jpg",
                        link: "/products/1",
                        title: "Straight Kinky Curly Body Wave 613 Bob Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                        featured: "US$ 5-10 /Piece",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/7.jpg",
                        link: "/products/1",
                        title: "Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/8.jpg",
                        link: "/products/1",
                        title: "8 Inch to 30 Inch Stw Natural Raw Brazilian Remy Human Hair Weaving",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/9.jpg",
                        link: "/products/1",
                        title: "Natural Raw Brazilian Remy Human Hair Weaving",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/10.jpg",
                        link: "/products/1",
                        title: "Super Soft 300tc 100% Cotton Bedding Set",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/11.jpg",
                        link: "/products/1",
                        title: "Natural Raw Brazilian Remy Human Hair Weaving",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    {
                        img: "/product/13.jpg",
                        link: "/products/1",
                        title: "Super Soft 300tc 100% Cotton Bedding Set",
                        featured: "",
                        sele: "",
                        price: "29,500",
                    },
                    ]}
                />
            </div>
        </>
    );
};
  
export default IndexPage;