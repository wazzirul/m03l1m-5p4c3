import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Main from './main';
import { slugData } from './slugData';
import { TemplateStyleProps } from '@/app/components/display-templates/types';

type SlugCode = keyof typeof slugData;

interface PageProps {
  params: Promise<{
    slugCode: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slugCode } = await params;
  const data = slugData[slugCode as SlugCode];

  if (!data) {
    return {
      title: 'Template Not Found | Muslim Spaces',
      description: 'The requested display template was not found.',
    };
  }

  return {
    title: data.title,
    description: data.description,
  };
}

// Generate static params for all slug codes
export async function generateStaticParams() {
  return Object.keys(slugData).map((slugCode) => ({
    slugCode: slugCode,
  }));
}

// Force dynamic rendering for authentication
export const dynamic = 'force-dynamic';

const Page = async ({ params }: PageProps) => {
  const { slugCode } = await params;
  const data = slugData[slugCode as SlugCode];

  // If slug code doesn't exist in our static data, return 404
  if (!data) {
    notFound();
  }

  // Cast to the expected shape to satisfy TS while data is normalized downstream
  const typedData = data as {
    title: string;
    description: string;
    layout: string;
    style: number;
    content?: TemplateStyleProps;
  };
  return <Main slugCode={slugCode} data={typedData} />;
};

export default Page;
