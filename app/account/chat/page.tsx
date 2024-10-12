import Chat from "@/components/Chat";

const IndexPage: React.FC = () => {
    return (
        <>
        <Chat
            items={
            [
            {
                id: 1,
                name: 'HeRa',
                avatar: '/user/1.jpg',
                status: 'Online',
                address: "503 Broadway",
                city: "New York",
                country: "USA",
                position: "Warehouse Manager",
                phone: "+1 (646) 123-1234",
                email: "glyon@instock.com",
                chat: [
                    { left: 'hi' },
                    { right: 'hello' },
                    { left: 'how are you?' },
                    { right: 'good' },
                  ],
            },
            {
                id: 2,
                name: 'HeRa Khan',
                avatar: '/user/2.jpg',
                status: 'Offline',
                address: "503 Broadway",
                city: "New York",
                country: "USA",
                position: "Warehouse Manager",
                phone: "+1 (646) 123-1234",
                email: "glyon@instock.com",
                chat: [
                    { left: 'hi' },
                    { right: 'hello' },
                    { left: 'how are you?' },
                    { right: 'good' },
                  ],
            },
            ]}
        />
        </>
    );
  };
  
  export default IndexPage;