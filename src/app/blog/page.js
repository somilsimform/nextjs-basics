// import { Post } from "../../components/post";

import { Card, Row, Col } from "antd"
import Link from "next/link";

export async function getData() {
    const apiKey = process.env.API_URL;
    const response = await fetch(`${apiKey}/posts`, {
      cache: 'no-cache',
    });
    const data = await response.json();
  
    return {
      posts: data,
    };
  }
  

export default async function Page() {
    const {posts} = await getData();
    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-4xl font-bold">Blogs Page</h1>
            <div className="card-row-wrapper">
                <Row gutter={[20, 20]}>
                    {posts.map((post) => (
                        <Col key={post.id} xs={24} md={6} lg={4}>
                            <Card className="card-wrapper" title={`#${post.id}`} bordered={false}>
                                <Link href={`/blog/${post.id}`}>
                                    <div className="title">{post.title}</div>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
