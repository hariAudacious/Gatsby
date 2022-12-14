import React from "react";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Layout from "../../components/Layout";

interface infoProp {
  title?: string;
  description?: string;
}
const Dashboard: React.FC<infoProp> = ({
  title = "Missing",
  description = "also missing ",
}) => {
  return (
    <Layout>
      {/* <Layout /> */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          {description}
        </p>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Get started
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </a>
          <a
            href="#"
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Live demo
            <span className="text-gray-400" aria-hidden="true">
              &rarr;
            </span>
          </a>
          {/* <Image /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
