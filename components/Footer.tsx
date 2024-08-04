import Link from "next/link";
interface FooterProps {
  menu: number;
}

const Footer: React.FC<FooterProps> = ({ menu }) => {
  
    return (
      <>

        {menu === 1 && (
          <>
            <div className="container mt-2">
              <div className="bg-white grid grid-cols-8">
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#84c09a2e] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#25d366" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                      WhatsApp us
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#7fd6a017] p-2 flex items-center justify-center"
                >
                    <svg width="24" height="24" fill="#37aef3" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                    Talk to us
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#fceff7] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#e1306c" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                      @Zuricart
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#edf2fe] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1877f2" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 text-gray-800">
                      @Zuricart
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#e5f9fe] p-2 flex items-center justify-center"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="#000000" width="24" height="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                    @Zuricart
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#fce8eb] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                    @Zuricart
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#e2f7fe] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#00a0dc" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                    @Zuricart
                    </span>
                </Link>
                <Link
                  href="/"
                  target='_blank'
                  className="bg-[#e8e8e8] p-2 flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="24" height="24" viewBox="0 0 192 192"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                    <span className="text-sm hidden md:block font-medium p-1 ml-1 text-gray-800">
                      @Zuricart
                    </span>
                </Link>
              </div>
            </div>
            <div className="container">
              <div className="bg-white grid grid-cols-1 md:grid-cols-5 gap-2 px-2 py-6">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-base font-bold">
                    Shop Address
                  </h1>
                  <p className="md:text-sm">
                    Jamia Plaza, Kigali Road, 1st Floor, Unit Wing A ( Next to First Community Bank, Opposite Jamia Mall )
                  </p>
                </div>

                <div className="hidden md:flex flex-col space-y-1">
                  <h1 className="text-base font-bold">
                  Support
                  </h1>
                  <Link
                    href="/about-us"
                    className="hover:text-main"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="hover:text-main"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/cat"
                    className="hover:text-main"
                  >
                    SiteMap
                  </Link>
                </div>
                <div className="hidden md:flex flex-col space-y-1">
                  <h1 className="text-base font-bold">
                    Policies
                  </h1>
                  <Link
                    href="/how-to-buy"
                    className="hover:text-main"
                  >
                    How To Buy
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-main"
                  >
                    Site Map
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-main"
                  >
                    One Assist
                  </Link>
                </div>
                <div className="hidden md:flex flex-col space-y-1">
                  <h1 className="text-base font-bold">
                    Contact Information
                  </h1>
                  <Link
                    href="/about-us"
                    className="hover:text-main"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-main"
                  >
                    0712-944-000
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-main"
                  >
                    info@zuricart.co.ke
                  </Link>
                </div>
                <div className="flex flex-col space-y-1">
                  <h1 className="text-base font-bold">
                    How to pay
                  </h1>
                  <p>
                  M-PESA Paybill
                  </p>
                  <p>
                  Business no. 542542
                  </p>
                  <p>
                  Account no. 794794
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        
        <div className="bg-main text-white py-2">
          <div className="container">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
              Copyright © 2024 Zuricart. All rights reserved.
              </div>
              <div className="flex space-x-2 md:justify-end md:items-center">
                <Link
                  href="/privacy-policies"
                >
                  Privacy Policies
                </Link>
                <Link
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/order-policies"
                >
                  Order Policies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;