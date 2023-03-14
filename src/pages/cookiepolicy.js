import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchCoockiePolicies } from "api";

const cookiepolicy = () => {
  const [cookiePolicy, setCookiePolicy] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let cookiePolicyResponse = await fetchCoockiePolicies();
      if (cookiePolicyResponse?.data?.data?.length) {
        setCookiePolicy(cookiePolicyResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Policy title="Cookie Policy" data={cookiePolicy} />
    </Layout>
  );
};

export default cookiepolicy;
