// Digest exact bytes. A digest check is not scientific or chain verification.
import {readFile} from 'node:fs/promises';
import {createHash,timingSafeEqual} from 'node:crypto';
const [path,expected] = process.argv.slice(2);
if (!path) throw new Error('Usage: node receipts/verify-digest.mjs FILE [EXPECTED_SHA256]');
const digest = createHash('sha256').update(await readFile(path)).digest('hex');
if (expected && (!/^[a-f0-9]{64}$/.test(expected) || !timingSafeEqual(Buffer.from(expected),Buffer.from(digest)))) throw new Error('Content digest mismatch');
console.log(JSON.stringify({sha256:digest,checkedAgainstTrustedDigest:!!expected}));
