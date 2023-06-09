import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, FC, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <main className="flex min-h-screen w-full flex-col p-5 ">
            <div className="container flex w-full min-w-0 flex-1 flex-col">
              <header className="flex w-full justify-evenly  p-2">
                <h1 className="text-xl uppercase ">Store Dashboard</h1>
                <a href="#">/Product/</a>
              </header>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
