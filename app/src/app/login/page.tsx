import Container from "@/components/Container";
import ProfileInfo from "@/components/ProfileInfo";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {

    return (
        <Container>
            <Login />
        </Container>
    );
};

export default page;
