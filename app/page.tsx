import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmbUsCnrWkvmq9sJFVy5nsuiMcZm9a2SGmxNhibPzt21Qa/Image1.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Vacation Hotspots',
  description: 'A frame displaying great vacation spots',
  openGraph: {
    title: 'Vacation Hotspots',
    description: 'A frame displaying great vacation spots',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmbUsCnrWkvmq9sJFVy5nsuiMcZm9a2SGmxNhibPzt21Qa/Image1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Vacation Hotspots</h1>
    </>
  );
}