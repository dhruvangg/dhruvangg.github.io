import { getArticle, getAllArticles } from "@/lib/api";
import { notFound } from "next/navigation";

import { Footer, Header } from "@/components/common";
import Banner from "@/components/blog/Banner";
import Content from "@/components/blog/Content";

export async function generateStaticParams() {
    const allArticles = await getAllArticles();
    return allArticles.map((article) => ({
        slug: article.url,
    }));
}

export default async function KnowledgeArticle({ params }) {
    const article = await getArticle(params.slug);
    if (!article) {
        notFound();
    }

    return (
        <main>
            <Header />
            <Banner
                title={article.title}
                date={article.publishedDate}
                category={article.contentfulMetadata.tags}
                image={article.image}
            />
            <Content content={article.body.json}/>
            <Footer />
        </main>
    );
}