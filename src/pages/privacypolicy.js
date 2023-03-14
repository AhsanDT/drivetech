import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchPrivacyPolicies } from "api";

const privacypolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let cookiePolicyResponse = await fetchPrivacyPolicies();
      if (cookiePolicyResponse?.data?.data?.length) {
        setPrivacyPolicy(cookiePolicyResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Policy title="Privacy Policy" data={privacyPolicy} />
    </Layout>
  );
};

export default privacypolicy;
