/* Disable no-explicity-any because it's tina's code not ours */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Events } from "../components/event";
import { client } from "../.tina/__generated__/client";
import { Layout } from "../components/layout";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const events = props.data.eventConnection.edges;

  return (
    <Layout>
      <Events data={events} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
