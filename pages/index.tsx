import { getSortedPostsData } from '@/lib/posts';
import { AllPostsData } from '@/types/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home = ({ allPostsData }: { allPostsData: AllPostsData[] }) => {
  return (
    <div>
      <Head>
        <title>sunkeydokey</title>
      </Head>
      <section className="text-xl">
        <p>[SunkeyDokey's Blog]</p>
        <p>(This is a Website)</p>
      </section>
      <section className="text-xl pt-1">
        <h2 className="text-2xl my-4 mx-0">Blog</h2>
        <ul className="p-0 m-0">
          {allPostsData.map(({ id, title, date }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-500">{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
