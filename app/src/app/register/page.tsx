import Container from "@/components/Container";
import ProfileInfo from "@/components/ProfileInfo";
import Register from "@/components/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {

    return (
        <Container>
            <Register />
        </Container>
    );
};

export default page;
