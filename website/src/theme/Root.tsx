/**
 * Root - Global wrapper component for Docusaurus
<<<<<<< HEAD
 */
import React from 'react';
import Chatbot from '@site/src/components/Chatbot';
=======
 *
 * This component wraps the entire Docusaurus application.
 */
import React from 'react';
>>>>>>> master

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
<<<<<<< HEAD
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
=======
  return <>{children}</>;
>>>>>>> master
}
