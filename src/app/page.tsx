import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Welcome to Your Next.js App</h1>
        <p className="text-lg text-muted-foreground">
          Start building your Figma design here. The project is set up with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Next.js 14 with App Router</li>
          <li>TypeScript for type safety</li>
          <li>Tailwind CSS for styling</li>
          <li>ESLint for code quality</li>
          <li>Pre-configured color scheme and typography</li>
        </ul>
      </div>
    </MainLayout>
  );
}
