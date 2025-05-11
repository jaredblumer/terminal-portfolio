import Terminal from '@/components/Terminal/Terminal';
import { Ubuntu_Mono } from 'next/font/google';

const ubuntuMono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
})

export default function App() {
  return (
    <div id="container" className={ubuntuMono.className}>
      <Terminal />
    </div>
  );
}
