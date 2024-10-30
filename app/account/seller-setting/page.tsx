import Email from "@/components/post/Email";
import Number from "@/components/post/Number";
import Password from "@/components/post/Password";
import Photo from "@/components/post/Photo";
import Text from "@/components/post/Text";

const IndexPage: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Images
                </h1>
                <div className="p-2">
                    <Photo title="Your photo" img="/user/1.jpg" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Information
                </h1>
                <div className="p-2">
                    <Text title="Your name" sub="Enter your full name" />
                    <Number title="Your number" sub="Enter your number" />
                    <Email title="Your email" sub="Enter your email" />
                </div>
            </div>
            <div className="bg-white">
                <h1 className="p-2 border-b">
                    Change your password
                </h1>
                <div className="p-2">
                    <Password title="New Password" sub="Enter your password" />
                    <Password title="Confirm Password" sub="Enter your password" />
                </div>
            </div>            
        </div>
    );
  };
  
  export default IndexPage;