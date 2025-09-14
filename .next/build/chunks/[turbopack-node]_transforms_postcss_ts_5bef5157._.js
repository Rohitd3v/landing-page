module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/business-consulting/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/dbac0_d703270b._.js",
  "build/chunks/[root-of-the-server]__9c905c72._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/business-consulting/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];