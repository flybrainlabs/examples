# flybrainlabs examples

Small, original examples for public flybrainwork integrations. This auxiliary
repository does not replace any of the ten pinned project components.

## Public API quickstart

Requires Node.js 22 or newer. No wallet, OAuth credential, API key or dependency
installation is required.

```sh
node public/community-tasks.mjs
node receipts/verify-digest.mjs data/example-object.json
node research/read-connections.mjs data/example-connections.json
```

The community example reads the deployed public task definitions without creating
a session or claiming rewards. Private requests require the SDK's existing SIWS
wallet session; see [the SDK](https://github.com/flybrainlabs/sdk).

## Browser SDK integration

Within an authorized flybrainwork website integration:

```js
import {CommunityClient} from '/assets/community-client.mjs';
const client = new CommunityClient({apiBase: 'https://43.161.219.89.sslip.io'});
const result = await client.request('/api/social/tasks');
console.log(result.tasks.map(task => ({id: task.id, points: task.rewardPoints})));
```

An application's Origin must be allowed by the service before private API use.
Never embed an OAuth secret in browser code.

## Integrity and research data

The receipt example computes a SHA-256 digest of the exact input bytes. Pass a
trusted expected digest as its second argument to check content integrity. A
matching digest alone does not validate a scientific result or blockchain receipt.
Use the [protocol](https://github.com/flybrainlabs/protocol) and
[SDK](https://github.com/flybrainlabs/sdk) for the actual versioned formats.

The research example reads a deliberately synthetic, three-node connection table.
It is an illustration of input validation, not an official connectome subset or a
biological prediction. Production models and private data are not included.

See [the documentation](https://flybrain.work/docs/) for supported APIs and
[the project account](https://github.com/flybrainlabs) for component ownership.
