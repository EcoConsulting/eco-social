/**
 * Context loader for eco-social. Reads project docs and returns them as JSON.
 * Simple: read files, check they exist and have minimum quality, return.
 */

import fs from 'node:fs';
import path from 'node:path';

const FILES = {
  design: ['DESIGN.md', 'design.md'],
  product: ['product_rrss.md', 'PRODUCT_RRSS.md'],
  community: ['community_manager.md', 'COMMUNITY_MANAGER.md'],
};

export function loadContext(cwd = process.cwd()) {
  const design = findAndRead(cwd, FILES.design);
  const product = findAndRead(cwd, FILES.product);
  const community = findAndRead(cwd, FILES.community);

  return {
    hasDesign: !!design.content,
    design: design.content,
    designPath: design.path,
    hasProduct: !!product.content,
    product: product.content,
    productPath: product.path,
    hasCommunity: !!community.content,
    community: community.content,
    communityPath: community.path,
    qualityChecks: {
      designHasTheme: design.content ? /theme|color|tone/i.test(design.content) : false,
      productHasPilares: product.content ? /pilar/i.test(product.content) : false,
      communityHasPrincipios: community.content ? /karpathy|principio/i.test(community.content) : false,
    },
  };
}

function findAndRead(cwd, names) {
  for (const name of names) {
    const abs = path.join(cwd, name);
    if (fs.existsSync(abs)) {
      try {
        return { content: fs.readFileSync(abs, 'utf-8'), path: path.relative(cwd, abs) };
      } catch { /* fall through */ }
    }
  }
  return { content: null, path: null };
}

const _running = process.argv[1];
if (_running?.endsWith('load-context.mjs')) {
  console.log(JSON.stringify(loadContext(process.cwd()), null, 2));
}
