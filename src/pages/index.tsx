import { Button, Flex, Title } from "@mantine/core";
import { type NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
      <Title order={1}>Hello SaaS</Title>
      <div>
        <Link href="/login">
          <Button>Go to Login Page</Button>
        </Link>
      </div>
    </Flex>
  );
};

export default HomePage;
