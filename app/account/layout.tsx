import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenusUser from "@/components/MenusUser";
import TopUp from "@/components/TopUp";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <Header menu={0} />
        <div className=" container my-4">
          <div className="bg-white">
            <div className="flex flex-col md:flex-row gap-4 w-full p-2 md:p-4 pb-0">
              <div className="w-full md:w-1/2">
                <div className="flex items-center">
                    <Image
                        src="/user/1.jpg"
                        width={130}
                        height={130}
                        alt="user"
                        className="mr-2 rounded-xl border-4 border-white"
                    />
                    <div>
                        <h1 className=" font-bold text-secondary text-md">
                        JQDeals
                        </h1>
                        <ul className="text-sm">
                            <li>L5: Journeyman</li>
                            <li>Joined March 1, 2014</li>
                            <li>Time Spent: 2m 2w 5h 46m</li>
                            <li>Last Activity: 08/02/2024 03:32:43pm</li>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                    <div className="flex items-center text-xs bg-secondary text-white p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" viewBox="0 0 16 15" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9301 5.59266C15.8506 5.34687 15.7017 5.12813 15.5007 4.96169C15.2997 4.79526 15.0548 4.68793 14.7942 4.65208L10.9705 4.10655L9.26182 0.71263C9.13358 0.49589 8.94947 0.315973 8.72793 0.190903C8.50639 0.0658326 8.2552 0 7.99952 0C7.74384 0 7.49264 0.0658326 7.2711 0.190903C7.04956 0.315973 6.86545 0.49589 6.73722 0.71263L5.02855 4.10968L1.20485 4.65522C0.944963 4.69207 0.7008 4.79949 0.500009 4.96531C0.299217 5.13113 0.149818 5.34872 0.0687294 5.59344C-0.0123594 5.83817 -0.0218984 6.10025 0.0411924 6.35002C0.104283 6.59978 0.237483 6.82725 0.42571 7.00666L3.19989 9.65125L2.53914 13.3869C2.50474 13.5847 2.51474 13.7875 2.56846 13.9812C2.62218 14.1748 2.71832 14.3547 2.8502 14.5082C2.98207 14.6617 3.14651 14.7853 3.33206 14.8702C3.51762 14.9551 3.71984 14.9994 3.92464 15C4.15351 15.0005 4.37911 14.9467 4.58219 14.8432L7.99952 13.0781L11.4169 14.8401C11.6493 14.9599 11.9113 15.0135 12.1732 14.995C12.4352 14.9766 12.6866 14.8866 12.8992 14.7355C13.1117 14.5843 13.2768 14.3779 13.3759 14.1396C13.475 13.9013 13.5041 13.6406 13.4599 13.3869L12.8071 9.65125L15.5733 7.00666C15.7623 6.82757 15.896 6.59996 15.9591 6.34989C16.0222 6.09982 16.0121 5.8374 15.9301 5.59266Z" fill="inherit"></path>
                        </svg>
                        </span>
                        <div>
                        <strong>438</strong>
                        <p>Reputation Points</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-secondary text-white  p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6.33343C15.9999 6.12698 15.9041 5.93224 15.7407 5.8061L8.40733 0.139428C8.1671 -0.046476 7.83157 -0.046476 7.59133 0.139428L0.258 5.8061C0.0950688 5.93251 -0.000188775 6.12721 2.80882e-07 6.33343V15.3334C2.80882e-07 15.7016 0.298477 16.0001 0.666667 16.0001H6C6.1841 16.0001 6.33333 15.8509 6.33333 15.6668V12.6668C6.33333 11.7463 7.07953 11.0001 8 11.0001C8.92047 11.0001 9.66667 11.7463 9.66667 12.6668V15.6668C9.66667 15.8509 9.81591 16.0001 10 16.0001H15.3333C15.7015 16.0001 16 15.7016 16 15.3334V6.33343Z" fill="inherit"></path>
                        </svg>
                        </span>
                        <div>
                        <strong>179</strong>
                        <p>Profile Views</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-secondary text-white  p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" viewBox="0 0 16 14" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6025,6.0563c-1.7-1.89-4.7-3.77-7.6-3.77S2.1025,4.1763.4025,6.0563C.1025,6.3363.0025,6.6263.0025,6.9963s.1.66.4.94c1.7,1.79,4.6,3.77,7.5,3.77h.2c2.9,0,5.8-1.98,7.5-3.77.3-.28.4-.57.4-.94s-.1-.66-.4-.94ZM7.9824,10.0762c-1.701,0-3.0799-1.3789-3.0799-3.0799s1.3789-3.0799,3.0799-3.0799,3.0799,1.3789,3.0799,3.0799-1.3789,3.0799-3.0799,3.0799Z" fill="inherit"></path>
                            <circle cx="8.0025" cy="6.9963" r="1.38" fill="inherit"></circle>
                        </svg>
                        </span>
                        <div>
                        <strong>142K</strong>
                        <p>Deal Views</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-secondary text-white  p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.84962 0C1.35907 0 0.888623 0.194867 0.541757 0.541733C0.194891 0.888599 2.31769e-05 1.35905 2.31769e-05 1.84959V6.33958C6.54889e-05 7.04813 0.281568 7.72764 0.782606 8.22863L7.76996 15.2185C8.27144 15.7188 8.95086 15.9998 9.65925 16C10.3676 16.0002 11.0472 15.7194 11.5489 15.2193L15.2168 11.5579C15.7181 11.0572 16 10.3779 16.0005 9.66936C16.001 8.96084 15.7199 8.28115 15.2193 7.7798L8.23194 0.784227C7.98401 0.535841 7.68957 0.338738 7.36544 0.204178C7.04131 0.0696173 6.69384 0.000236801 6.34289 0H1.85044H1.84962ZM4.11023 2.87879C4.27216 2.87879 4.4325 2.91068 4.5821 2.97265C4.7317 3.03462 4.86764 3.12544 4.98214 3.23994C5.09664 3.35444 5.18746 3.49038 5.24943 3.63998C5.3114 3.78958 5.34329 3.94992 5.34329 4.11185C5.34329 4.27378 5.3114 4.43412 5.24943 4.58372C5.18746 4.73333 5.09664 4.86926 4.98214 4.98376C4.86764 5.09826 4.7317 5.18908 4.5821 5.25105C4.4325 5.31302 4.27216 5.34491 4.11023 5.34491C3.7832 5.34491 3.46957 5.215 3.23832 4.98376C3.00708 4.75251 2.87717 4.43888 2.87717 4.11185C2.87717 3.78482 3.00708 3.47119 3.23832 3.23994C3.46957 3.0087 3.7832 2.87879 4.11023 2.87879V2.87879Z" fill="inherit"></path>
                        </svg>
                        </span>
                        <div>
                        <strong>29</strong>
                        <p>Deals Posted</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-secondary text-white  p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" version="1.1" fill="currentColor" viewBox="0 0 32 32" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path fill="inherit" d="M29 2c1.65 0 3 1.35 3 3v16c0 1.65-1.35 3-3 3h-11.4l-9.6 8v-8h-5c-1.65 0-3-1.35-3-3v-16c0-1.65 1.35-3 3-3h26z"></path>
                        </svg>
                        </span>
                        <div>
                        <strong>830</strong>
                        <p>Comments Posted</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs bg-secondary text-white  p-3 rounded-md shadow">
                        <span>
                        <svg width={30} height={30} className="mr-2" viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9756 7.23055C15.7499 8.9421 16.0623 13.4716 14.3549 14.4942C11.892 15.9691 8.35595 16.0762 6.17917 15.97C5.08989 15.9169 4.3419 14.9275 4.4487 13.8421C4.53845 12.93 4.62104 11.8628 4.62104 11.0238C4.62104 9.31735 4.40099 6.88987 4.40099 6.88987C4.3957 6.46463 4.54175 6.02706 4.8525 5.73674C5.1748 5.43564 5.44849 5.07992 5.66124 4.68296C5.99034 4.06892 6.16258 3.37685 6.16139 2.67327V0.918649C6.16139 0.40533 6.64348 2.15468e-07 7.1296 0C8.0098 -3.90137e-07 8.41287 0.291418 8.90792 0.808085C9.40296 1.32475 9.68141 2.02527 9.68218 2.75595V5.19997C9.68218 5.35999 9.83043 5.47882 9.98662 5.44397L13.5846 4.6412C13.7274 4.60933 13.8738 4.58947 14.0194 4.6047C14.2602 4.62989 14.4958 4.69644 14.7167 4.80213C15.0045 4.93982 15.2604 5.14071 15.467 5.39108C15.6736 5.64145 15.826 5.9354 15.9138 6.25286C16.0015 6.57032 16.0226 6.90381 15.9756 7.23055ZM2.20049 6.43054H1.3203C0.97025 6.43095 0.634651 6.57625 0.387131 6.83459C0.13961 7.09292 0.000384417 7.44318 0 7.80852C0 7.80852 0.13203 9.76495 0.13203 11.0238C0.13203 12.2826 0 14.2391 0 14.2391C0.000384417 14.6044 0.13961 14.9547 0.387131 15.213C0.634651 15.4713 0.97025 15.6166 1.3203 15.617H2.20049C2.55054 15.6166 2.88614 15.4713 3.13366 15.213C3.38118 14.9547 3.52041 14.6044 3.52079 14.2391C3.52079 14.2391 3.69683 12.2826 3.69683 11.0238C3.69683 9.76495 3.52079 7.80852 3.52079 7.80852C3.52041 7.44318 3.38118 7.09292 3.13366 6.83459C2.88614 6.57625 2.55054 6.43095 2.20049 6.43054Z" fill="inherit"></path>
                        </svg>
                        </span>
                        <div>
                        <strong>2.5K</strong>
                        <p>Votes Given</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <MenusUser
              items={[
                { title: "My account", link: '/account' },
                { title: "Coupons", link: '/account/coupons' },
                { title: "Saved Items", link: '/account/wishlist' },
                { title: "Voting", link: '/account/vot' },
                { title: "Comments", link: '/account/comment' },
                { title: 'Setting', link: '/account/setting' },
              ]}
            />
          </div>
          <div className="w-full mt-6">
            {children}
          </div>
        </div>        
        <Footer menu={1} />
        <TopUp />
      </main>
  );
}
