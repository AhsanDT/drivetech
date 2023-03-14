import React, { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Policy from "@/components/Policy/Policy";

import { fetchTermsAndConditions } from "api";

const termsandconditions = () => {
  const [termsAndCondition, setTermsAndCondition] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let termsAndConditionResponse = await fetchTermsAndConditions();
      if (termsAndConditionResponse?.data?.data?.length) {
        setTermsAndCondition(termsAndConditionResponse?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Policy title="Terms & Conditions" data={termsAndCondition} />
    </Layout>
  );
};

export default termsandconditions;
