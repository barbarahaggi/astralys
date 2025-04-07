import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
     
      <main>{children}</main>
    </div>
  );
}