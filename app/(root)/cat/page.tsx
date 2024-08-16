import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div  className="container my-2">
                <h2 className="text-sm md:text-base font-bold my-4">
                    Featured Deal Categories
                </h2>
                <div className="bg-white py-2 md:py-6">
                    <ul className="grid md:grid-cols-7 grid-cols-3 gap-2">
                        <li>
                            <Link href="/" className="group flex flex-col items-center">
                                <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25" />
                                    </svg>
                                </div>
                                <span>Apple</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="group flex flex-col items-center">
                                <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z" />
                                    </svg>
                                </div>
                                <span>Autos</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="group flex flex-col items-center">
                                <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" d="M19.25 24v-3.667c0-1.145.784-2.074 1.75-2.074v-6.222S19.688 11 17.5 11S14 12.037 14 12.037v6.222c.967 0 1.75.929 1.75 2.075V24M9 24v-6.5a2 2 0 0 1 2-2v-8s-1.5-1-4-1s-4 1-4 1v8a2 2 0 0 1 2 2V24M17.373 9S16 8.125 16 7.031c0-.845.672-1.531 1.502-1.531S19 6.186 19 7.031C19 8.125 17.63 9 17.63 9zM6.85 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.746 3.5 7.15 4.5 7.15 4.5z" />
                                    </svg>
                                </div>
                                <span>Babies &amp; Kids</span>
                            </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2a5 5 0 00-5 5h10a5 5 0 00-5-5zm5 7H7v9h10V9zm2 9h1v2H4v-2h1V9a7 7 0 1114 0v9z" />
                            </svg>
                            </div>
                            <span>Bags & Luggage</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h14V4H5zm2 2h10v2H7V6z" />
                            </svg>
                            </div>
                            <span>Books & Magazines</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center text-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2l2 4h4l2 8-8 8-8-8 2-8h4l2-4z" />
                            </svg>
                            </div>
                            <span>Clothing & Accessories</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 4h18v12H3V4zm0 14h18v2H3v-2z" />
                            </svg>
                            </div>
                            <span>Computers</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2l8 4-8 4-8-4 8-4zm0 10l8 4v2h-2v-1H6v1H4v-2l8-4zm-8 5v3h16v-3H4z" />
                            </svg>
                            </div>
                            <span>Education</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8 3h8v2H8V3zm-2 4h12v2H6V7zm14 4H4v8h16v-8zm-8 2l4 4h-8l4-4z" />
                            </svg>
                            </div>
                            <span>Entertainment</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/" className="group flex flex-col items-center">
                            <div className="h-16 w-16 justify-center items-center flex rounded-full group-hover:text-white bg-gray-200 group-hover:bg-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2a5 5 0 015 5h-2a3 3 0 00-6 0H7a5 5 0 015-5zm0 7a5 5 0 00-5 5v5h10v-5a5 5 0 00-5-5zm-1 5v3h2v-3h-2z" />
                            </svg>
                            </div>
                            <span>Finance</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container my-2">
                <h3 className="text-sm md:text-base font-bold my-4">All Deal Categories</h3>
                <div className="bg-white py-2 md:py-6 grid grid-cols-1 md:grid-cols-3 text-xs md:text-base font-light space-y-1">
                    <div>
                        <ul className="list-disc ml-8">
                            <li>
                                <Link className="font-bold" href="/">Apple</Link>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Autos</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/auto-electronic-accessories/">Auto Electronic Accessories</Link>
                                    </li>
                                    <li>
                                    <Link href="/auto-parts/">Auto Parts &amp; Supplies</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/auto-detailing/">Auto Detailing &amp; Car Care</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/auto-tools/">Automotive Tools</Link>
                                    </li>
                                    <li>
                                    <Link href="/gas/">Gas</Link>
                                    </li>
                                    <li>
                                    <Link href="/oil-change/">Motor Oil</Link>
                                    </li>
                                    <li>
                                    <Link href="/motorcycle-accessories/">Motorcycle Gear &amp; Accessories</Link>
                                    </li>
                                    <li>
                                    <Link href="/wheels/">Wheels &amp; Tires</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Babies &amp; Kids</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/babies/">Babies</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/baby-toys/">Baby Toys &amp; Books</Link>
                                        </li>
                                        <li>
                                        <Link href="/carseat/">Car Seats</Link>
                                        </li>
                                        <li>
                                        <Link href="/diapers/">Diapers &amp; Wipes</Link>
                                        </li>
                                        <li>
                                        <Link href="/baby-formula/">Formula &amp; Baby Food</Link>
                                        </li>
                                        <li>
                                        <Link href="/nursery/">Nursery</Link>
                                        </li>
                                        <li>
                                        <Link href="/stroller/">Strollers</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/kids/">Kids</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/educational-toys/">Educational Toys</Link>
                                        </li>
                                        <li>
                                        <Link href="/kids-game/">Kids Games &amp; Books</Link>
                                        </li>
                                        <li>
                                        <Link href="/kids-toys/">Kids Toys</Link>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Bags &amp; Luggage</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/backpacks/">Backpacks</Link>
                                    </li>
                                    <li>
                                    <Link href="/duffle-bag/">Duffel Bags</Link>
                                    </li>
                                    <li>
                                    <Link href="/laptop-bag/">Laptop Bags</Link>
                                    </li>
                                    <li>
                                    <Link href="/luggage-bags/">Luggage</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Books &amp; Magazines</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/books/">Books</Link>
                                    </li>
                                    <li>
                                    <Link href="/magazine/">Magazines</Link>
                                    </li>
                                    <li>
                                    <Link href="/textbooks/">Textbooks</Link>
                                    </li>
                                    <li>
                                    <Link href="/ebook/">eBooks</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Clothing &amp; Accessories</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/babies-and-kids/">Babies &amp; Kids Clothes &amp; Accessories</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/baby-clothes/">Baby &amp; Infant Clothes</Link>
                                        </li>
                                        <li>
                                        <Link href="/kids-clothes/">Kids Clothes</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/jewelry/">Jewelry</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/diamond/">Diamonds</Link>
                                        </li>
                                        <li>
                                        <Link href="/earrings/">Earrings, Bracelets &amp; Rings</Link>
                                        </li>
                                        <li>
                                        <Link href="/necklaces/">Necklaces</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/mens/">Mens Clothing &amp; Accessories</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/big-tall/">Big &amp; Tall</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-accessories/">Mens Accessories</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-athletic-wear/">Mens Activewear</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-apparel/">Mens Apparel</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-jeans/">Mens Jeans</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-outerwear/">Mens Outerwear</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-pajamas/">Mens Pajamas &amp; Loungewear</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-pants/">Mens Pants &amp; Shorts</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-shirt/">Mens Shirts</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-underwear/">Mens Underwear &amp; Socks</Link>
                                        </li>
                                        <li>
                                        <Link href="/young-mens/">Young Mens</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/shoes/">Shoes</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/athletic-shoes/">Athletic Shoes</Link>
                                        </li>
                                        <li>
                                        <Link href="/kids-shoes/">Baby &amp; Kids Shoes</Link>
                                        </li>
                                        <li>
                                        <Link href="/boots/">Boots</Link>
                                        </li>
                                        <li>
                                        <Link href="/mens-shoes/">Mens Shoes</Link>
                                        </li>
                                        <li>
                                        <Link href="/sandals/">Sandals</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-shoes/">Womens Shoes</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/sunglasses/">Sunglasses</Link>
                                    </li>
                                    <li>
                                    <Link href="/watches/">Watches</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/mens-watch/">Mens Watches</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-watch/">Womens Watches</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/womens/">Womens Clothing &amp; Accessories</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/designer-brands/">Designer Brands</Link>
                                        </li>
                                        <li>
                                        <Link href="/handbags/">Handbags &amp; Purses</Link>
                                        </li>
                                        <li>
                                        <Link href="/juniors/">Juniors Apparel</Link>
                                        </li>
                                        <li>
                                        <Link href="/maternity/">Maternity</Link>
                                        </li>
                                        <li>
                                        <Link href="/plus-size/">Plus Size Clothing</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-accessories/">Womens Accessories</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-activewear/">Womens Activewear</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-apparel/">Womens Apparel</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-dresses/">Womens Dresses &amp; Skirts</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-outerwear/">Womens Outerwear</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-pajamas/">Womens Pajamas &amp; Loungewear</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-pants/">Womens Pants &amp; Shorts</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-shirts/">Womens Shirts</Link>
                                        </li>
                                        <li>
                                        <Link href="/womens-lingerie/">Womens Underwear &amp; Socks</Link>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Computers</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/computer-accessories/">Computer Accessories</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/computer-speakers/">Computer Speakers</Link>
                                        </li>
                                        <li>
                                        <Link href="/keyboard/">Keyboards</Link>
                                        </li>
                                        <li>
                                        <Link href="/mouse/">Mice</Link>
                                        </li>
                                        <li>
                                        <Link href="/webcam/">Webcams</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/networking/">Computer Networking</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/modem/">Modems</Link>
                                        </li>
                                        <li>
                                        <Link href="/router/">Routers</Link>
                                        </li>
                                        <li>
                                        <Link href="/switch/">Switches</Link>
                                        </li>
                                        <li>
                                        <Link href="/wireless-router/">Wireless</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/computer-parts/">Computer Parts</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/processor/">CPUs</Link>
                                        </li>
                                        <li>
                                        <Link href="/computer-case-deals/">Computer Cases</Link>
                                        </li>
                                        <li>
                                        <Link href="/computer-fans-coolers/">Computer Fans &amp; Coolers</Link>
                                        </li>
                                        <li>
                                        <Link href="/drives/">Hard Drives</Link>
                                        <ul className="list-disc ml-8">
                                            <li>
                                            <Link href="/3.5-inch/">3.5" Hard Drives</Link>
                                            </li>
                                            <li>
                                            <Link href="/external-drive/">External Hard Drives</Link>
                                            </li>
                                            <li>
                                            <Link href="/portable-hard-drive/">Portable Hard Drives</Link>
                                            </li>
                                            <li>
                                            <Link href="/ssd/">Solid State Drives (SSD)</Link>
                                            </li>
                                        </ul>
                                        </li>
                                        <li>
                                        <Link href="/memory/">Memory</Link>
                                        </li>
                                        <li>
                                        <Link href="/motherboard/">Motherboards</Link>
                                        </li>
                                        <li>
                                        <Link href="/power-supply/">Power Supplies</Link>
                                        </li>
                                        <li>
                                        <Link href="/video-card/">Video Cards</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/desktop/">Desktop Computers</Link>
                                    </li>
                                    <li>
                                    <Link href="/flash-storage/">Flash Storage</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/microsd/">SD Cards &amp; Micro SD Cards</Link>
                                        </li>
                                        <li>
                                        <Link href="/flash-drive/">USB Flash Drives</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/internet/">Internet &amp; Websites</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/vpn-service/">VPNs</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/laptop-deals/">Laptops</Link>
                                    </li>
                                    <li>
                                    <Link href="/monitor-deals/">Monitors</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/gaming-monitor/">Gaming Monitors</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/printer/">Printers</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/3d-printer/">3D Printers</Link>
                                        </li>
                                        <li>
                                        <Link href="/all-in-one-printer/">All In One Printers</Link>
                                        </li>
                                        <li>
                                        <Link href="/ink-cartridge/">Ink and Toner</Link>
                                        </li>
                                        <li>
                                        <Link href="/inkjet-printer/">Inkjet Printers</Link>
                                        </li>
                                        <li>
                                        <Link href="/laser-printer/">Laser Printers</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/servers/">Servers &amp; NAS</Link>
                                    </li>
                                    <li>
                                    <Link href="/software/">Software</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/antivirus/">Antivirus Software</Link>
                                        </li>
                                        <li>
                                        <Link href="/apps/">Apps</Link>
                                        </li>
                                        <li>
                                        <Link href="/windows/">Windows Software</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/tablet/">Tablets &amp; eReaders</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Education</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/student-discounts/">Student Discounts</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Entertainment</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/anime/">Anime</Link>
                                    </li>
                                    <li>
                                    <Link href="/board-games/">Games, Board Games &amp; Card Games</Link>
                                    </li>
                                    <li>
                                    <Link href="/movie/">Movies</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/bluray-movies/">Blu-ray &amp; 4K Blu-ray</Link>
                                        </li>
                                        <li>
                                        <Link href="/dvd-movies/">DVD</Link>
                                        </li>
                                        <li>
                                        <Link href="/digital-download/">Digital Movie Download &amp; Streaming</Link>
                                        </li>
                                        <li>
                                        <Link href="/movie-rental/">Movie Rentals</Link>
                                        </li>
                                        <li>
                                        <Link href="/star-wars/">Star Wars</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/music/">Music</Link>
                                    <ul className="list-disc ml-8">
                                        <li>
                                        <Link href="/music-download/">Digital Music Download &amp; Streaming</Link>
                                        </li>
                                        <li>
                                        <Link href="/musical-instruments/">Musical Instruments</Link>
                                        <ul className="list-disc ml-8">
                                            <li>
                                            <Link href="/guitar/">Guitars</Link>
                                            </li>
                                        </ul>
                                        </li>
                                        <li>
                                        <Link href="/vinyl/">Vinyl &amp; LPs</Link>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <Link href="/streaming-services/">Streaming Services</Link>
                                    </li>
                                    <li>
                                    <Link href="/television-series/">TV Series &amp; TV Shows</Link>
                                    </li>
                                    <li>
                                    <Link href="/tickets/">Tickets &amp; Admission</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="font-bold" href="/">Finance</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/credit-card/">Credit Cards</Link>
                                    </li>
                                    <li>
                                    <Link href="/financial-tools/">Financial Tools &amp; Services</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                     <ul className="list-disc ml-8">
                        <li>
                            <Link className="font-bold" href="/">Flowers &amp; Gifts</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/cigars-cigarettes-e-cigs/">Cigars, Cigarettes &amp; E-Cigs</Link>
                                </li>
                                <li>
                                <Link href="/costumes/">Costumes</Link>
                                </li>
                                <li>
                                <Link href="/gift-basket/">Gift Baskets</Link>
                                </li>
                                <li>
                                <Link href="/gift-card/">Gift Cards</Link>
                                </li>
                                <li>
                                <Link href="/gift/">Greeting Cards &amp; Invitations</Link>
                                </li>
                                <li>
                                <Link href="/party-supplies/">Party Supplies</Link>
                                </li>
                                <li>
                                <Link href="/personalized-gifts/">Personalized Gifts</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="font-bold" href="/freebies/">Freebies</Link>
                        </li>
                        <li>
                            <Link className="font-bold" href="/grocery/">Grocery</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/baking/">Baking and Cooking</Link>
                                </li>
                                <li>
                                <Link href="/breakfast/">Breakfast Foods</Link>
                                </li>
                                <li>
                                <Link href="/candy/">Candy, Chocolate &amp; Gum</Link>
                                </li>
                                <li>
                                <Link href="/cleaning-supplies/">Cleaning Supplies</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/bathroom-cleaner/">Kitchen &amp; Bathroom Cleaning Supplies</Link>
                                    </li>
                                    <li>
                                    <Link href="/laundry-detergent/">Laundry</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/condiment/">Condiments</Link>
                                </li>
                                <li>
                                <Link href="/dairy/">Dairy</Link>
                                </li>
                                <li>
                                <Link href="/dessert/">Dessert</Link>
                                </li>
                                <li>
                                <Link href="/drink/">Drinks &amp; Beverages</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/alcohol/">Alcohol</Link>
                                    </li>
                                    <li>
                                    <Link href="/coffee/">Coffee &amp; Espresso</Link>
                                    </li>
                                    <li>
                                    <Link href="/energy-drink/">Energy Drinks &amp; Sports Drinks</Link>
                                    </li>
                                    <li>
                                    <Link href="/soda/">Soda &amp; Soft Drinks</Link>
                                    </li>
                                    <li>
                                    <Link href="/tea/">Tea</Link>
                                    </li>
                                    <li>
                                    <Link href="/water/">Water</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/health-food/">Health Food</Link>
                                </li>
                                <li>
                                <Link href="/household-items/">Household Goods</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/facial-tissue/">Facial Tissue</Link>
                                    </li>
                                    <li>
                                    <Link href="/paper-towels/">Paper Towels</Link>
                                    </li>
                                    <li>
                                    <Link href="/toilet-paper/">Toilet Paper</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/meal-prep-food-containers/">Meal Prep &amp; Food Containers</Link>
                                </li>
                                <li>
                                <Link href="/meat/">Meat, Fish, &amp; Poultry</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/deli/">Deli &amp; Cold Cuts</Link>
                                    </li>
                                    <li>
                                    <Link href="/hot-dog/">Hot Dogs</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/pasta/">Pasta</Link>
                                </li>
                                <li>
                                <Link href="/rice/">Rice &amp; Grains</Link>
                                </li>
                                <li>
                                <Link href="/snacks/">Snacks, Nuts &amp; Chips</Link>
                                </li>
                                <li>
                                <Link href="/soups-sauces-canned-goods/">Soups, Sauces, Packaged Meals &amp; Canned Goods</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="font-bold" href="/">Health &amp; Beauty</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/contacts-glasses/">Contacts &amp; Glasses</Link>
                                </li>
                                <li>
                                <Link href="/face-mask/">Face Masks &amp; Gloves</Link>
                                </li>
                                <li>
                                <Link href="/supplement/">Fitness &amp; Wellness</Link>
                                </li>
                                <li>
                                <Link href="/fragrance-cologne-perfume/">Fragrances, Cologne &amp; Perfume</Link>
                                </li>
                                <li>
                                <Link href="/hand-sanitizer/">Hand Sanitizer</Link>
                                </li>
                                <li>
                                <Link href="/makeup/">Makeup</Link>
                                </li>
                                <li>
                                <Link href="/massage-and-spa/">Massage &amp; Spa</Link>
                                </li>
                                <li>
                                <Link href="/medical-supplies/">Medical Supplies</Link>
                                </li>
                                <li>
                                <Link href="/medicine/">Medicine</Link>
                                </li>
                                <li>
                                <Link href="/personal-care/">Personal Care</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/body-wash/">Body Wash, Bar Soap &amp; Hand Soap</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/protein-powder/">Protein Powder &amp; Shakes</Link>
                                </li>
                                <li>
                                <Link href="/razor/">Razors &amp; Shaving Supplies</Link>
                                </li>
                                <li>
                                <Link href="/shampoo/">Shampoo &amp; Hair Care</Link>
                                </li>
                                <li>
                                <Link href="/skin-care/">Skin Care</Link>
                                </li>
                                <li>
                                <Link href="/supplements/">Supplements</Link>
                                </li>
                                <li>
                                <Link href="/toothbrush/">Toothpaste, Toothbrushes &amp; Oral Care</Link>
                                </li>
                                <li>
                                <Link href="/vitamins/">Vitamins</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="font-bold" href="/">Hobbies</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/crafts/">Arts &amp; Crafts</Link>
                                </li>
                                <li>
                                <Link href="/collectibles/">Collectibles</Link>
                                </li>
                                <li>
                                <Link href="/drones/">Drones</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="font-bold" href="/home/">Home &amp; Home Improvement</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/bed/">Bed &amp; Bath</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/mattress/">Mattresses</Link>
                                    </li>
                                    <li>
                                    <Link href="/sheets/">Sheets &amp; Bedding</Link>
                                    </li>
                                    <li>
                                    <Link href="/shower-curtain/">Shower Curtains</Link>
                                    </li>
                                    <li>
                                    <Link href="/towels/">Towels</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/remodeling/">Building &amp; Remodeling Supplies</Link>
                                </li>
                                <li>
                                <Link href="/furniture-deals/">Furniture</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/bedroom-furniture/">Bedroom Furniture</Link>
                                    </li>
                                    <li>
                                    <Link href="/dining-room-furniture/">Dining Room Furniture</Link>
                                    </li>
                                    <li>
                                    <Link href="/family-room-furniture/">Family Room Furniture</Link>
                                    </li>
                                    <li>
                                    <Link href="/home-office-furniture/">Home Office Furniture</Link>
                                    </li>
                                    <li>
                                    <Link href="/living-room/">Living Room Furniture</Link>
                                    </li>
                                    <li>
                                    <Link href="/outdoor-furniture/">Outdoor &amp; Patio Furniture</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/garage/">Garage</Link>
                                </li>
                                <li>
                                <Link href="/gardening/">Gardening &amp; Outdoor</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/fire-pit/">Fire Pits</Link>
                                    </li>
                                    <li>
                                    <Link href="/garden-tools/">Garden &amp; Outdoor Tools</Link>
                                    </li>
                                    <li>
                                    <Link href="/generators/">Generators</Link>
                                    </li>
                                    <li>
                                    <Link href="/griddle/">Griddles</Link>
                                    </li>
                                    <li>
                                    <Link href="/grill/">Grills &amp; Grilling Accessories</Link>
                                    </li>
                                    <li>
                                    <Link href="/outdoor-heater/">Outdoor Heaters</Link>
                                    </li>
                                    <li>
                                    <Link href="/patio-and-pool/">Patio &amp; Pool</Link>
                                    </li>
                                    <li>
                                    <Link href="/pest-control/">Pest Control</Link>
                                    </li>
                                    <li>
                                    <Link href="/plants/">Plants and Supplies</Link>
                                    </li>
                                    <li>
                                    <Link href="/snow-blower/">Snow Blowers &amp; Leaf Blowers</Link>
                                    </li>
                                    <li>
                                    <Link href="/trimmer/">Trimmers, Edgers &amp; Lawn Mowers</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/home-automation/">Home Automation</Link>
                                </li>
                                <li>
                                <Link href="/home-decor/">Home Decor</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/art/">Art</Link>
                                    </li>
                                    <li>
                                    <Link href="/candle/">Candles &amp; Home Fragrances</Link>
                                    </li>
                                    <li>
                                    <Link href="/clock/">Clocks</Link>
                                    </li>
                                    <li>
                                    <Link href="/decorative-pillows-and-blankets/">Decorative Pillows &amp; Blankets</Link>
                                    </li>
                                    <li>
                                    <Link href="/holiday-decorations/">Holiday Decor</Link>
                                    </li>
                                    <li>
                                    <Link href="/indoor-plants/">Indoor Plants</Link>
                                    </li>
                                    <li>
                                    <Link href="/lamp-and-shades/">Lamps and Shades</Link>
                                    </li>
                                    <li>
                                    <Link href="/mirrors/">Mirrors</Link>
                                    </li>
                                    <li>
                                    <Link href="/pictures-and-frames/">Pictures &amp; Frames</Link>
                                    </li>
                                    <li>
                                    <Link href="/rugs/">Rugs</Link>
                                    </li>
                                    <li>
                                    <Link href="/wall-decor/">Wall Decor</Link>
                                    </li>
                                    <li>
                                    <Link href="/window-treatments/">Window Treatments</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/home-security/">Home Security &amp; Safety</Link>
                                </li>
                                <li>
                                <Link href="/kitchenware/">Kitchenware &amp; Cookware</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/dinnerware/">Dinnerware &amp; Bakeware</Link>
                                    </li>
                                    <li>
                                    <Link href="/utensils/">Utensils</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/appliance/">Large Appliances</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/air-conditioners/">Air Conditioners</Link>
                                    </li>
                                    <li>
                                    <Link href="/dishwasher/">Dishwashers</Link>
                                    </li>
                                    <li>
                                    <Link href="/refrigerator/">Refrigerators &amp; Freezers</Link>
                                    </li>
                                    <li>
                                    <Link href="/stove/">Stoves</Link>
                                    </li>
                                    <li>
                                    <Link href="/vacuum/">Vacuums, Carpet Cleaners &amp; Floor Cleaners</Link>
                                    </li>
                                    <li>
                                    <Link href="/washing-machine/">Washers &amp; Dryers</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/lighting/">Lighting</Link>
                                </li>
                                <li>
                                <Link href="/small-appliances/">Small Appliances</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/air-fryer/">Air Fryers &amp; Deep Fryers</Link>
                                    </li>
                                    <li>
                                    <Link href="/blender/">Blenders &amp; Juicers</Link>
                                    </li>
                                    <li>
                                    <Link href="/coffee-maker/">Coffee Makers, Espresso Machines &amp; Tea Kettles</Link>
                                    </li>
                                    <li>
                                    <Link href="/fan/">Fans</Link>
                                    </li>
                                    <li>
                                    <Link href="/microwave/">Microwaves</Link>
                                    </li>
                                    <li>
                                    <Link href="/mixer/">Mixers</Link>
                                    </li>
                                    <li>
                                    <Link href="/precision-cooker/">Precision Cookers</Link>
                                    </li>
                                    <li>
                                    <Link href="/pressure-cooker/">Pressure Cookers</Link>
                                    </li>
                                    <li>
                                    <Link href="/rice-cooker/">Rice Cookers</Link>
                                    </li>
                                    <li>
                                    <Link href="/slow-cooker/">Slow Cookers</Link>
                                    </li>
                                    <li>
                                    <Link href="/space-heater/">Space Heaters</Link>
                                    </li>
                                    <li>
                                    <Link href="/toaster/">Toasters &amp; Toaster Ovens</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/cleaning/">Storage &amp; Cleaning</Link>
                                </li>
                                <li>
                                <Link href="/tools/">Tools</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/drill/">Drills &amp; Power Tools</Link>
                                    </li>
                                    <li>
                                    <Link href="/extension-cords/">Extension cords</Link>
                                    </li>
                                    <li>
                                    <Link href="/flashlight/">Flashlights</Link>
                                    </li>
                                    <li>
                                    <Link href="/hand-tool/">Hand Tools</Link>
                                    </li>
                                    <li>
                                    <Link href="/ladders/">Ladders</Link>
                                    </li>
                                    <li>
                                    <Link href="/chainsaw/">Saws &amp; Chainsaws</Link>
                                    </li>
                                    <li>
                                    <Link href="/tool-box/">Tool Boxes &amp; Tool Chests</Link>
                                    </li>
                                    <li>
                                    <Link href="/tool-set/">Tool Sets</Link>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                    <div>
                     <ul className="list-disc ml-8">
                        <li>
                            <Link className="font-bold" href="/seasonal/">Occasions</Link>
                        </li>
                        <li>
                            <Link className="font-bold" href="/">Office &amp; School Supplies</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/media/">Blank Media</Link>
                                </li>
                                <li>
                                <Link href="/office-furniture/">Office Furniture</Link>
                                </li>
                                <li>
                                <Link href="/paper/">Paper</Link>
                                </li>
                                <li>
                                <Link href="/pens/">Pencils, Pens &amp; Markers</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="font-bold" href="/">Other</Link>
                        </li>
                        <li>
                            <Link className="font-bold" href="/">Pets</Link>
                            <ul className="list-disc ml-8">
                                <li>
                                <Link href="/pet-care/">Pet Care &amp; Supplies</Link>
                                </li>
                                <li>
                                <Link href="/pet-food/">Pet Food</Link>
                                <ul className="list-disc ml-8">
                                    <li>
                                    <Link href="/cat-food/">Cat Food &amp; Treats</Link>
                                    </li>
                                    <li>
                                    <Link href="/dog-food/">Dog Food &amp; Treats</Link>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <Link href="/pet-toy/">Pet Toys</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                        <Link className="font-bold" href="/">Restaurants</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/take-out/">Delivery &amp; Take Out</Link>
                            </li>
                            <li>
                            <Link href="/fast-food-coupons/">Fast Food</Link>
                            </li>
                            <li>
                            <Link href="/pizza/">Pizza</Link>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/services/">Services</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/daily-deals-and-flash-sales/">Daily Deals &amp; Flash Sales</Link>
                            </li>
                            <li>
                            <Link href="/dating-services/">Dating Services</Link>
                            </li>
                            <li>
                            <Link href="/delivery-services/">Delivery Services</Link>
                            </li>
                            <li>
                            <Link href="/financial-tools/">Financial Tools &amp; Services</Link>
                            </li>
                            <li>
                            <Link href="/membership/">Memberships</Link>
                            </li>
                            <li>
                            <Link href="/online-services/">Online Services</Link>
                            </li>
                            <li>
                            <Link href="/phone-services/">Phone Services</Link>
                            </li>
                            <li>
                            <Link href="/printing-services/">Printing Services</Link>
                            </li>
                            <li>
                            <Link href="/tv-and-internet-providers/">TV &amp; Internet Providers</Link>
                            </li>
                            <li>
                            <Link href="/tax-services/">Tax Services</Link>
                            </li>
                            <li>
                            <Link href="/web-hosting-and-domains/">Web Hosting &amp; Domains</Link>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/shoes/">Shoes</Link>
                        </li>
                        <li>
                        <Link href="/sport/">Sporting Goods</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/bicycles/">Bicycles &amp; Bike Accessories</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/ebike/">Ebikes</Link>
                                </li>
                                <li>
                                <Link href="/mountain-bike/">Mountain Bikes</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/exercise/">Fitness &amp; Wellness</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/exercise-machine/">Exercise Equipment</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/golf/">Golf</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/golf-clubs/">Golf Clubs &amp; Equipment</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/gun-accessories/">Gun Accessories</Link>
                            </li>
                            <li>
                            <Link href="/gun/">Guns &amp; Ammo</Link>
                            </li>
                            <li>
                            <Link href="/knives/">Knives</Link>
                            </li>
                            <li>
                            <Link href="/outdoors/">Outdoors</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/camping/">Camping</Link>
                                </li>
                                <li>
                                <Link href="/coolers/">Coolers</Link>
                                </li>
                                <li>
                                <Link href="/fishing/">Fishing</Link>
                                </li>
                                <li>
                                <Link href="/hiking/">Hiking</Link>
                                </li>
                                <li>
                                <Link href="/hunting/">Hunting</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/scooter/">Scooters</Link>
                            </li>
                            <li>
                            <Link href="/ski-and-snowboard/">Ski &amp; Snowboard</Link>
                            </li>
                            <li>
                            <Link href="/sports-equipment/">Sports Equipment</Link>
                            </li>
                            <li>
                            <Link href="/surf-and-skate/">Surf &amp; Skate</Link>
                            </li>
                            <li>
                            <Link href="/water-bottle/">Water Bottles</Link>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/tech/">Tech &amp; Electronics</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/audio/">Audio / Video</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/bluray-player/">Blu-ray &amp; DVD Players</Link>
                                </li>
                                <li>
                                <Link href="/bluetooth-speaker/">Bluetooth Speakers &amp; Smart Speakers</Link>
                                </li>
                                <li>
                                <Link href="/headphone/">Headphones, Headsets &amp; Earbuds</Link>
                                </li>
                                <li>
                                <Link href="/home-audio/">Home Audio</Link>
                                </li>
                                <li>
                                <Link href="/home-theater-system/">Home Theater</Link>
                                </li>
                                <li>
                                <Link href="/media-player/">Media Players</Link>
                                </li>
                                <li>
                                <Link href="/receiver/">Receivers</Link>
                                </li>
                                <li>
                                <Link href="/soundbar/">Sound Bars</Link>
                                </li>
                                <li>
                                <Link href="/speakers/">Speakers</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/photo/">Cameras</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/camera-accessories/">Camera Accessories</Link>
                                </li>
                                <li>
                                <Link href="/lens/">Camera Lenses</Link>
                                </li>
                                <li>
                                <Link href="/dslr-camera-deals/">DSLR</Link>
                                </li>
                                <li>
                                <Link href="/dash-cam/">Dash Cams &amp; Action Cams</Link>
                                </li>
                                <li>
                                <Link href="/mirrorless/">Mirrorless</Link>
                                </li>
                                <li>
                                <Link href="/photo-prints-and-services/">Photo Prints</Link>
                                </li>
                                <li>
                                <Link href="/security-camera/">Security Cameras</Link>
                                </li>
                                <li>
                                <Link href="/tripod/">Tripods</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/gps/">GPS</Link>
                            </li>
                            <li>
                            <Link href="/phone/">Phones</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/cellphone-providers/">Cell Phone Plans &amp; Services</Link>
                                </li>
                                <li>
                                <Link href="/cell-phone-deals/">Cell Phones</Link>
                                </li>
                                <li>
                                <Link href="/phone-accessories/">Phone Accessories</Link>
                                </li>
                                <li>
                                <Link href="/prepaid-phone/">Prepaid Phones &amp; Refill Cards</Link>
                                </li>
                                <li>
                                <Link href="/smartphone/">Smartphones</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/projector/">Projectors</Link>
                            </li>
                            <li>
                            <Link href="/smart-watch/">Smart Watches &amp; Wearables</Link>
                            </li>
                            <li>
                            <Link href="/tv-deals/">TV</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/4k-tv-deals/">4K TVs</Link>
                                </li>
                                <li>
                                <Link href="/8k-tvs/">8K TVs</Link>
                                </li>
                                <li>
                                <Link href="/tv/">HDTV</Link>
                                </li>
                                <li>
                                <Link href="/led/">LED TVs</Link>
                                </li>
                                <li>
                                <Link href="/oled/">OLED TVs</Link>
                                </li>
                                <li>
                                <Link href="/qled/">QLED TVs</Link>
                                </li>
                                <li>
                                <Link href="/smart-tv/">Smart TVs</Link>
                                </li>
                                <li>
                                <Link href="/tv-accessories/">TV Accessories</Link>
                                </li>
                                <li>
                                <Link href="/tv-mount/">TV Mounts</Link>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <Link href="/accessories/">Tech Accessories</Link>
                             <ul className="list-disc ml-8">
                                <li>
                                <Link href="/batteries/">Batteries</Link>
                                </li>
                                <li>
                                <Link href="/cable/">Cables</Link>
                                </li>
                                <li>
                                <Link href="/chargers/">Chargers &amp; Power Banks</Link>
                                </li>
                                <li>
                                <Link href="/phone-case/">Phone &amp; Tablet Cases</Link>
                                </li>
                                <li>
                                <Link href="/portable-power-station/">Portable Power Stations</Link>
                                </li>
                                <li>
                                <Link href="/remote-control/">Remote Controls</Link>
                                </li>
                                <li>
                                <Link href="/power-strip/">Uninterruptible Power Supply (UPS), Surge Protectors &amp; Powerstrips</Link>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/travel-deals/">Travel &amp; Vacations</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/car-rentals/">Car Rentals</Link>
                            </li>
                            <li>
                            <Link href="/cruises/">Cruises</Link>
                            </li>
                            <li>
                            <Link href="/airfares/">Flights</Link>
                            </li>
                            <li>
                            <Link href="/hotel/">Hotels</Link>
                            </li>
                            <li>
                            <Link href="/rv-and-camper-van-rentals/">RV &amp; Camper Van Rentals</Link>
                            </li>
                            <li>
                            <Link href="/theme-parks-and-attractions/">Theme Parks &amp; Attractions</Link>
                            </li>
                            <li>
                            <Link href="/tour/">Tours &amp; Travel Packages</Link>
                            </li>
                            <li>
                            <Link href="/vacation-rentals/">Vacation Rentals</Link>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/video-game-deals/">Video Games</Link>
                         <ul className="list-disc ml-8">
                            <li>
                            <Link href="/3ds/">3DS</Link>
                            </li>
                            <li>
                            <Link href="/app-games/">App Games</Link>
                            </li>
                            <li>
                            <Link href="/arcade/">Arcade</Link>
                            </li>
                            <li>
                            <Link href="/pc-game/">Computer &amp; PC</Link>
                            </li>
                            <li>
                            <Link href="/digital-games/">Digital Game Downloads</Link>
                            </li>
                            <li>
                            <Link href="/nintendo-switch/">Nintendo Switch</Link>
                            </li>
                            <li>
                            <Link href="/ps3-game/">PS3</Link>
                            </li>
                            <li>
                            <Link href="/ps4-deals/">PS4</Link>
                            </li>
                            <li>
                            <Link href="/ps5-deals/">PS5</Link>
                            </li>
                            <li>
                            <Link href="/virtual-reality/">VR (Virtual Reality) Headsets, Games &amp; Accessories</Link>
                            </li>
                            <li>
                            <Link href="/game-accessories/">Video Game Accessories</Link>
                            </li>
                            <li>
                            <Link href="/console/">Video Game Consoles</Link>
                            </li>
                            <li>
                            <Link href="/game-memberships/">Video Game Memberships</Link>
                            </li>
                            <li>
                            <Link href="/wii-u-games/">Wii &amp; Wii U</Link>
                            </li>
                            <li>
                            <Link href="/xbox-games/">Xbox 360</Link>
                            </li>
                            <li>
                            <Link href="/xbox-one-deals/">Xbox One</Link>
                            </li>
                            <li>
                            <Link href="/xbox-series-x/">Xbox Series X and Series S</Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default IndexPage;