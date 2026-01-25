import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'kt7qdz63',
    dataset: 'production',
    useCdn: true, // Use CDN for production, faster response
    apiVersion: '2023-05-03', // Use current date for versioning
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
