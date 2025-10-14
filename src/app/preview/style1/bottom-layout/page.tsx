import Style1BottomLayout from '@/app/components/display-templates/style1/bottomLayout';

export default function PreviewPage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Style1BottomLayout
        orgName="MCC San Diego"
        mosqueName="San Diego Mosque"
        colors={{
          themeColor: '#FCD29A',
          primaryColor: '#1a1a1a',
          secondaryColor: '#ffffff',
        }}
      />
    </div>
  );
}
