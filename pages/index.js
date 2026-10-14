import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.replace('/index.html');
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      Loading RCCG NYLR website...
    </div>
  );
}
