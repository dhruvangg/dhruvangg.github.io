import { getArticle, getAllArticles } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

    const options = {
        renderMark: {
            [MARKS.CODE]: (text) => {
                return (
                    <SyntaxHighlighter
                        language="javascript"
                        style={a11yDark}
                    >
                        {text}
                    </SyntaxHighlighter>
                );
            }
        },
    };
    return (
        <main>
            <Header />
            <Banner
                title={article.title}
                date={article.publishedDate}
                category={article.contentfulMetadata.tags}
                image={article.image}
            />
            <Content>
                {documentToReactComponents(article.body.json, options)}
            </Content>
            <Footer />
        </main>
    );
}