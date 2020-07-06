import React from 'react';
import { navigate } from 'gatsby';
import SEO from '@/components/seo';
import Layout from '@/components/layout';

// This is a template for generating redirect page
export default ({ pageContext }) => {
  const { uri, redirectURL } = pageContext;
  React.useEffect(() => {
    navigate(redirectURL);
  });
  return (
    <Layout>
      <SEO uri={uri} />
    </Layout>
  );
};
