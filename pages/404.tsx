import { Layout } from "../components/layout";
const prefix = process.env.prefix ?? '';

export default function FourOhFour() {
  return (
    <Layout>
      <main className="min-h-[100dvh] grid">
        <div className="grid bg-mimosa px-6 py-14 max-tablet:pb-6 tablet:px-16 tablet:m-4 text-center">
          <div className="flex justify-center items-start">
            <a href={`${prefix}/`} aria-label="Home">
              <img className="mx-auto" src={`${prefix}/assets/manyhands-logo.svg`} alt="Many Hands" width="188px" height="34px"/>
            </a>
          </div>

          <div className="max-tablet:grid content-start justify-center whitespace-nowrap ">
            <h1 className="h1 mx-auto">404 - Page not found</h1>
            <a href={`${prefix}/`} className="button h-12 my-8">Return to the ManyHands Homepage</a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
