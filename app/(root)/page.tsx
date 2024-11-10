import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-3xl font-bold text-white">Home</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
        }}
      ></form>
    </>
  );
};

export default Home;
