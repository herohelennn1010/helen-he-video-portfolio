import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const covers = [...html.matchAll(/<button class="cover[^>]+>/g)].map(([tag]) => tag);
assert.equal(covers.length, 4, 'four featured videos should have cover buttons');
assert.equal(covers.filter((tag) => tag.includes('data-embed=')).length, 3);
assert.equal(covers.filter((tag) => tag.includes('data-cover=')).length, 1);
assert.doesNotMatch(html, /<iframe\b/i, 'players should load only after a click');
for (const file of ['music-vimeo.jpg', 'fotg-teaser.jpg', 'fotg-trailer.jpg', 'xhs-acai.jpg']) {
  assert.ok(existsSync(`dist/assets/covers/${file}`), `${file} is missing`);
}
console.log('Cover previews: OK');
