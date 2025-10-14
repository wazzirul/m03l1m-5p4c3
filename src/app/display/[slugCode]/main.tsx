'use client';

// Bottom Layout
import Style1BottomLayout from '@/app/components/display-templates/style1/bottomLayout';
import Style2BottomLayout from '@/app/components/display-templates/style2/bottomLayout';
import Style3BottomLayout from '@/app/components/display-templates/style3/bottomLayout';
import Style4BottomLayout from '@/app/components/display-templates/style4/bottomLayout';
import Style5BottomLayout from '@/app/components/display-templates/style5/bottomLayout';
import Style6BottomLayout from '@/app/components/display-templates/style6/bottomLayout';

// Left Layout
import Style1LeftLayout from '@/app/components/display-templates/style1/leftLayout';
import Style2LeftLayout from '@/app/components/display-templates/style2/leftLayout';
import Style3LeftLayout from '@/app/components/display-templates/style3/leftLayout';
import Style4LeftLayout from '@/app/components/display-templates/style4/leftLayout';
import Style5LeftLayout from '@/app/components/display-templates/style5/leftLayout';
import Style6LeftLayout from '@/app/components/display-templates/style6/leftLayout';

// Right Layout
import Style1RightLayout from '@/app/components/display-templates/style1/rightLayout';
import Style2RightLayout from '@/app/components/display-templates/style2/rightLayout';
import Style3RightLayout from '@/app/components/display-templates/style3/rightLayout';
import Style4RightLayout from '@/app/components/display-templates/style4/rightLayout';
import Style5RightLayout from '@/app/components/display-templates/style5/rightLayout';
import Style6RightLayout from '@/app/components/display-templates/style6/rightLayout';

// L-Layout
import Style1LLayout from '@/app/components/display-templates/style1/L-Layout';
import Style2LLayout from '@/app/components/display-templates/style2/L-Layout';
import Style3LLayout from '@/app/components/display-templates/style3/L-Layout';
import Style4LLayout from '@/app/components/display-templates/style4/L-Layout';
import Style5LLayout from '@/app/components/display-templates/style5/L-Layout';
import Style6LLayout from '@/app/components/display-templates/style6/L-Layout';

import { TemplateStyleProps } from '@/app/components/display-templates/types';
interface MainProps {
  slugCode: string;
  data: {
    title: string;
    description: string;
    layout: string;
    style: number;
    content?: TemplateStyleProps;
  };
}

export default function Main({ slugCode, data }: MainProps) {
  const { layout, style, content } = data;

  console.log(content);

  // Render the appropriate component based on layout and style
  const renderTemplate = () => {
    switch (layout) {
      case 'bottom':
        switch (style) {
          case 1:
            return <Style1BottomLayout {...content} />;
          case 2:
            return <Style2BottomLayout {...content} />;
          case 3:
            return <Style3BottomLayout {...content} />;
          case 4:
            return <Style4BottomLayout {...content} />;
          case 5:
            return <Style5BottomLayout {...content} />;
          case 6:
            return <Style6BottomLayout {...content} />;
          default:
            return <Style1BottomLayout {...content} />;
        }
      case 'left':
        switch (style) {
          case 1:
            return <Style1LeftLayout {...content} />;
          case 2:
            return <Style2LeftLayout {...content} />;
          case 3:
            return <Style3LeftLayout {...content} />;
          case 4:
            return <Style4LeftLayout {...content} />;
          case 5:
            return <Style5LeftLayout {...content} />;
          case 6:
            return <Style6LeftLayout {...content} />;
          default:
            return <Style1LeftLayout {...content} />;
        }
      case 'right':
        switch (style) {
          case 1:
            return <Style1RightLayout {...content} />;
          case 2:
            return <Style2RightLayout {...content} />;
          case 3:
            return <Style3RightLayout {...content} />;
          case 4:
            return <Style4RightLayout {...content} />;
          case 5:
            return <Style5RightLayout {...content} />;
          case 6:
            return <Style6RightLayout {...content} />;
          default:
            return <Style1RightLayout {...content} />;
        }
      case 'l-layout':
        switch (style) {
          case 1:
            return <Style1LLayout {...content} />;
          case 2:
            return <Style2LLayout {...content} />;
          case 3:
            return <Style3LLayout {...content} />;
          case 4:
            return <Style4LLayout {...content} />;
          case 5:
            return <Style5LLayout {...content} />;
          case 6:
            return <Style6LLayout {...content} />;
          default:
            return <Style1LLayout {...content} />;
        }
      default:
        return <Style1BottomLayout />;
    }
  };

  return (
    <div>
      {/* Optional: Add a header showing which template is being displayed */}
      <div className="hidden">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>Slug: {slugCode}</p>
      </div>
      {renderTemplate()}
    </div>
  );
}
