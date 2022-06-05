import {writeFileSync} from 'fs';
import RSS from 'rss';

import {allPosts} from '../.contentlayer/generated/allPosts.mjs';
import {allNotes} from '../.contentlayer/generated/allNotes.mjs';

async function generate() {
    const feed = new RSS({
        title: 'MiryangJung',
        site_url: 'https://miryang.dev',
        feed_url: 'https://miryang.dev/feed.xml'
    });

    allPosts.map((post) => {
        feed.item({
            title: post.title,
            url: `https://miryang.dev/post/${post.slug}`,
            date: post.date,
            description: post.description
        });
    });

    allNotes.map((note) => {
        feed.item({
            title: note.title,
            url: `https://miryang.dev/${note.url_path}`,
            date: note.date,
        });
    });

    writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
