import React, { Suspense } from 'react';
import { useSearchParams } from "react-router-dom";

const Search = React.lazy(() => import('../pages/Search'));

export default function SearchWrapper({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search apiPath={apiPath} queryTerm={queryTerm} />
    </Suspense>
  );
}