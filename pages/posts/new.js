import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost(props) {
  console.log(props);
  return <div>new post</div>;
}
export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
