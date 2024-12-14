'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const DynamicRoute = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const slug = pathname.split('/')[1];
      const normalizedSlug = slug.toLowerCase();
      if (slug !== normalizedSlug) router.replace(`/${normalizedSlug}`);
    }
  }, [pathname, router]);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, looks like we got a little lost here!</p>
    </div>
  );
};

export default DynamicRoute;
