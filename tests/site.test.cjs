const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const html=fs.readFileSync('dist/index.html','utf8');
test('all local assets resolve and templates are rendered',()=>{
 assert.ok(!html.includes('{{'));
 for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(!/^https?:/.test(match[1]))assert.ok(fs.existsSync(path.join('dist',match[1])),match[1]);
 }
});
test('all five installers use the versioned public repository',()=>{
 const version=require('../package.json').version;
 const links=[...html.matchAll(/data-download="[^"]+" href="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(links.length,5);
 for(const link of links)assert.ok(link.startsWith(`https://github.com/solaim/zhenjiang-releases/releases/download/v${version}/zhenjiang-${version}-`));
});
test('build publishes only product assets, without application or local materials',()=>{
 const names=fs.readdirSync('dist').sort();
 assert.deepEqual(names,['_headers','app.js','assets','index.html','release.json','robots.txt','styles.css']);
});
