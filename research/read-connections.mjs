// Synthetic data only; retain stable node IDs when importing your own format.
import {readFile} from 'node:fs/promises';
const path = process.argv[2];
if (!path) throw new Error('Usage: node research/read-connections.mjs FILE');
const value = JSON.parse(await readFile(path,'utf8'));
if (value.schema !== 'flybrainlabs-synthetic-connections-v1' || !Array.isArray(value.nodes) || !Array.isArray(value.connections)) throw new Error('Unexpected example schema');
const ids = new Set(value.nodes);
if (ids.size !== value.nodes.length) throw new Error('Duplicate node identity');
for (const row of value.connections) if (!ids.has(row.source) || !ids.has(row.target) || !Number.isSafeInteger(row.synapses) || row.synapses <= 0) throw new Error('Invalid synthetic connection');
console.log(JSON.stringify({synthetic:true,nodes:ids.size,connections:value.connections.length,synapses:value.connections.reduce((sum,row)=>sum+row.synapses,0)}));
