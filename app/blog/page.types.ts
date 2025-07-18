export type BlogsPageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};
