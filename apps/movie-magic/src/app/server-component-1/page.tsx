import { Footer } from '@/components/Footer';
import { Title } from '@/components/Title';

/**
 * No dynamic functions
 * No data
 * Hence statically rendered
 */
export default function ServerComponent1() {
  console.log('----> Rendering ServerComponent1');
  return (
    <div className="p-8">
      <Title>Server Component 1</Title>
      <Footer />
    </div>
  );
}
