import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopUp() {
  return <div>Token Topup</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
