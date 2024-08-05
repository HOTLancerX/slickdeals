import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="container my-4">
                <div className="flex flex-col md:flex-row items-center bg-white border rounded-xl">
                    <div className="w-full md:w-1/2 p-8">
                        <div className="text-center">
                            <h1 className="font-bold text-xl mb-3">
                            SAVING HAS NEVER BEEN EASIER
                            </h1>
                            <h2 className="text-2xl font-normal mb-3">
                            Download our official JQDeals app
                            </h2>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link
                                href="/"
                            >
                                <Image
                                    src="/appStore.png"
                                    width={203}
                                    height={60}
                                    alt='logo'
                                    className='p-2'
                                />
                            </Link>
                            <Link
                                href="/"
                            >
                                <Image
                                    src="/googlePlay.png"
                                    width={203}
                                    height={60}
                                    alt='logo'
                                    className='p-2'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center pt-12">
                        <Image
                            src="/appPhones.png"
                            width={447}
                            height={390}
                            alt='logo'
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexPage;