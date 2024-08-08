import { ReactNode } from 'react';
import Metadata from ;

import StreamVideoProvider from '@/providers/StreamClientProvider';

export const metadata: Metadata = {
  title: "MeetUp.",
  description: "Your Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
