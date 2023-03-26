import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p className=' text-red-400 text-lg font-bold'>This is a netflix clone</p>
    </>
  );
}
