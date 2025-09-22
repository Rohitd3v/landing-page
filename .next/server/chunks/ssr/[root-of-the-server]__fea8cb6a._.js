module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/components/utils/supabase/server.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://uzcoqdgdrqdxiumeazbl.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6Y29xZGdkcnFkeGl1bWVhemJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTQ2MzQsImV4cCI6MjA3MzQ5MDYzNH0.eJarhglQ1jkF2b1EFW3l55ywL__XJNi7YqM6uc-4hek");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/src/app/components/utils/supabase/blogService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBlogPost",
    ()=>createBlogPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/server.ts [app-ssr] (ecmascript)");
;
async function createBlogPost(title, author, thumbnail, sections) {
    try {
        // Insert blog post
        const { data: post, error: postError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("blog_posts").insert([
            {
                title,
                author,
                thumbnail
            }
        ]).select("id").single();
        if (postError) throw postError;
        if (!post) throw new Error("Failed to create blog post");
        // Insert sections
        const sectionsWithBlogId = sections.map((s, i)=>({
                blog_id: post.id,
                heading: s.heading,
                content: s.content,
                section_order: i
            }));
        const { error: sectionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("blog_sections").insert(sectionsWithBlogId);
        if (sectionError) throw sectionError;
        return post;
    } catch (err) {
        console.error("Error creating blog:", err);
        throw err;
    }
}
}),
"[project]/src/app/components/utils/supabase/uploadThumbnail.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadThumbnail",
    ()=>uploadThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/server.ts [app-ssr] (ecmascript)");
;
async function uploadThumbnail(file) {
    try {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `thumbnails/${fileName}`;
        // Upload file
        const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("blog-thumbnails").upload(filePath, file);
        if (uploadError) {
            console.error("Error uploading file:", uploadError.message);
            return null;
        }
        // Get public URL
        const { data } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$server$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from("blog-thumbnails").getPublicUrl(filePath);
        return data.publicUrl;
    } catch (err) {
        console.error("Upload failed:", err);
        return null;
    }
}
}),
"[project]/src/app/blogform/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$blogService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/blogService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$uploadThumbnail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/utils/supabase/uploadThumbnail.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BlogForm() {
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [author, setAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [thumbnail, setThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            heading: "",
            content: "",
            section_order: 0
        }
    ]);
    const addSection = ()=>setSections([
            ...sections,
            {
                heading: "",
                content: "",
                section_order: sections.length
            }
        ]);
    const updateSection = (index, field, value)=>{
        const updated = [
            ...sections
        ];
        updated[index][field] = value;
        setSections(updated);
    };
    const submit = async ()=>{
        let thumbnailUrl = "";
        if (thumbnail) {
            const uploadedUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$uploadThumbnail$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadThumbnail"])(thumbnail);
            if (!uploadedUrl) {
                alert("Failed to upload thumbnail");
                return;
            }
            thumbnailUrl = uploadedUrl;
        }
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$utils$2f$supabase$2f$blogService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBlogPost"])(title, author, thumbnailUrl, sections);
        if (success) {
            alert("Blog created successfully!");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Create Blog"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Title",
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Author",
                value: author,
                onChange: (e)=>setAuthor(e.target.value),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                onChange: (e)=>setThumbnail(e.target.files?.[0] ?? null),
                className: "border p-2 w-full mb-4"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-2",
                children: "Sections"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 border p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Heading",
                            value: s.heading,
                            onChange: (e)=>updateSection(i, "heading", e.target.value),
                            className: "border p-2 w-full mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blogform/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "Content",
                            value: s.content,
                            onChange: (e)=>updateSection(i, "content", e.target.value),
                            className: "border p-2 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blogform/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/blogform/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: addSection,
                className: "bg-blue-500 text-white px-4 py-2 rounded mr-2",
                children: "Add Section"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: submit,
                className: "bg-green-500 text-white px-4 py-2 rounded",
                children: "Publish Blog"
            }, void 0, false, {
                fileName: "[project]/src/app/blogform/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blogform/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fea8cb6a._.js.map