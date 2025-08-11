import './globals.css';

export const metadata = {
  title: 'Centrale UCL Manager',
  description: 'Student association management platform for Centrale UCL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}