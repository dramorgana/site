import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vd8c7dlq',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // Assuming we have token or can run via CLI context
  apiVersion: '2023-05-03',
});

async function migrate() {
  const posts = await client.fetch('*[_type == "post" && defined(body)] { _id, body }');
  
  for (const post of posts) {
    const text = post.body?.[0]?.children?.[0]?.text;
    if (text) {
      console.log(`Updating post ${post._id} with description: ${text}`);
      await client
        .patch(post._id)
        .set({ description: text })
        .commit();
    }
  }
}

migrate().catch(console.error);
