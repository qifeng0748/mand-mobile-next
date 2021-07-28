import{a as n,c as s,b as a}from"./app.e8aebefe.js";const p='{"title":"快速开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"自定义主题","slug":"自定义主题"},{"level":2,"title":"高阶指南","slug":"高阶指南"}],"relativePath":"zh-CN/components/quick-start.md","lastUpdated":1627466610310}',t={},o=a('<h1 id="快速开始"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><p><a href="https://www.npmjs.org/package/mand-mobile-next" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/mand-mobile-next.svg" alt="npm"></a> <a href="https://open.vscode.dev/mand-mobile/mand-mobile-next" target="_blank" rel="noopener noreferrer"><img src="https://open.vscode.dev/badges/open-in-vscode.svg" alt="Open in Visual Studio Code"></a><a href="https://github.com/mand-mobile/mand-mobile-next/actions" target="_blank" rel="noopener noreferrer"><img src="https://github.com/mand-mobile/mand-mobile-next/actions/workflows/build.yml/badge.svg?branch=vue3" alt="build"></a></p><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>快速开始最好的方式就是使用 <code>vite</code> 初始化项目工程，添加 <code>mand-mobile-next</code> 即可。</p><p><strong>使用 npm：</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> init @vite/app\n</code></pre></div><p>选择 <code>vue-ts</code>，初始化工程</p><p><strong>安装 <code>mand-mobile-next</code></strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> i mand-mobile-next@alpha\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> mand-mobile-next@alpha\n</code></pre></div><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h4 id="全量引入"><a class="header-anchor" href="#全量引入" aria-hidden="true">#</a> 全量引入</h4><p>在 <code>main.ts</code> 写入以下内容</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> MandMobile <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;mand-mobile-next/dist/es/mand-mobile-next.min.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MandMobile<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h4 id="按需引入"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h4><p>在 <code>main.ts</code> 引入组件库所需的<a href="#%E5%9F%BA%E7%A1%80%E5%8F%98%E9%87%8F">基础变量</a></p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;mand-mobile-next/dist/es/mand-mobile-next.vars.css&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>在 <code>vite</code> 中按需引入</strong></p><p>首先，安装 <code>vite-plugin-style-import</code>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vite-plugin-style-import -D\n<span class="token comment">#or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-style-import -D\n</code></pre></div><p>然后修改 <code>vite.config.ts</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>\n<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      libs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        libraryName<span class="token operator">:</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">,</span>\n        esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        ensureStyleFile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mand-mobile-next/dist/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mand-mobile-next/dist/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>接下来，如果你只希望引入部分组件，比如 Button，需要在 main.js 中写入以下内容：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* or\n * app.use(ElButton)\n * app.use(ElSelect)\n */</span>\n\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>或者直接在组件中使用：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    MdButton<span class="token operator">:</span> Button<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="自定义主题"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h2><p>Mand mobile next 采用 CSS <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/var" target="_blank" rel="noopener noreferrer">var</a> 实现主题切换，用户可以通过下面的方式实现自定义主题。</p><ul><li>在 <code>main.ts</code> 中：</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useCssVar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next/dist/es/composable&#39;</span>\n\n<span class="token keyword">const</span> themeVars <span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;--md-color-primary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#f44336&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">useCssVar</span><span class="token punctuation">(</span>themeVars<span class="token punctuation">)</span>\n</code></pre></div><ul><li>在组件 <code>setup</code> 中</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">ts</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useCssVar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next/dist/es/composable&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> themeVars <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token string">&#39;--md-color-primary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#f44336&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">useCssVar</span><span class="token punctuation">(</span>themeVars<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h4 id="基础变量"><a class="header-anchor" href="#基础变量" aria-hidden="true">#</a> 基础变量</h4><div class="language-css"><pre><code>/// Brand Color\n<span class="token property">--md-color-primary</span>           <span class="token punctuation">:</span> #4280EB // 品牌色\n\n/// Text Color\n<span class="token property">--md-color-text-base</span>         <span class="token punctuation">:</span> #111A34 // 重要信息，如一级标题\n<span class="token property">--md-color-text-base-inverse</span> <span class="token punctuation">:</span> #FFF\n<span class="token property">--md-color-text-body</span>         <span class="token punctuation">:</span> #41485D // 普通信息，如正文主要内容\n<span class="token property">--md-color-text-minor</span>        <span class="token punctuation">:</span> #666f83 // 次要信息，如利益点、摘要\n<span class="token property">--md-color-text-caption</span>      <span class="token punctuation">:</span> #858B9C // 辅助信息，如列表内容描述\n<span class="token property">--md-color-text-disabled</span>     <span class="token punctuation">:</span> #C5CAD5 // 禁用状态\n<span class="token property">--md-color-text-placeholder</span>  <span class="token punctuation">:</span> #C5CAD5 // 默认提示输入或占位\n<span class="token property">--md-color-text-highlight</span>    <span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--md-color-primary<span class="token punctuation">)</span> // 高亮状态\n<span class="token property">--md-color-text-warn</span>         <span class="token punctuation">:</span> #FF7D41 // 利益点，警告提示\n<span class="token property">--md-color-text-error</span>        <span class="token punctuation">:</span> #FF5257 // 强提示报错\n<span class="token property">--md-color-text-link</span>         <span class="token punctuation">:</span> #5878B4 // 文字链接\n\n/// Border &amp; Background Color\n<span class="token property">--md-color-border-base</span>       <span class="token punctuation">:</span> #E2E4EA // 条目边框\n<span class="token property">--md-color-border-element</span>    <span class="token punctuation">:</span> #C5CAD5 // 元素边框，如按钮\n<span class="token property">--md-color-bg-base</span>           <span class="token punctuation">:</span> #F9FAFB // 元素，容器背景\n<span class="token property">--md-color-bg-inverse</span>        <span class="token punctuation">:</span> #FFF\n<span class="token property">--md-color-bg-disabled</span>       <span class="token punctuation">:</span> #E2E4EA // 禁用元素背景\n<span class="token property">--md-color-bg-tap</span>            <span class="token punctuation">:</span> #F9FAFB // 条目点击态\n<span class="token property">--md-color-mask</span>              <span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>37<span class="token punctuation">,</span> 38<span class="token punctuation">,</span> 45<span class="token punctuation">,</span> .7<span class="token punctuation">)</span> // 弹窗蒙层\n\n/// Text Size\n<span class="token property">--md-font-heading-large</span>  <span class="token punctuation">:</span> 60px\n<span class="token property">--md-font-heading-medium</span> <span class="token punctuation">:</span> 52px\n<span class="token property">--md-font-heading-normal</span> <span class="token punctuation">:</span> 44px\n<span class="token property">--md-font-caption-large</span>  <span class="token punctuation">:</span> 36px\n<span class="token property">--md-font-caption-normal</span> <span class="token punctuation">:</span> 32px\n<span class="token property">--md-font-body-large</span>     <span class="token punctuation">:</span> 28px\n<span class="token property">--md-font-body-normal</span>    <span class="token punctuation">:</span> 26px\n<span class="token property">--md-font-minor-large</span>    <span class="token punctuation">:</span> 24px\n<span class="token property">--md-font-minor-normal</span>   <span class="token punctuation">:</span> 20px\n\n<span class="token property">--md-font-weight-light</span>    <span class="token punctuation">:</span> 300\n<span class="token property">--md-font-weight-normal</span>   <span class="token punctuation">:</span> 400\n<span class="token property">--md-font-weight-medium</span>   <span class="token punctuation">:</span> 500\n<span class="token property">--md-font-weight-semibold</span> <span class="token punctuation">:</span> 600\n\n/// Radius Size\n<span class="token property">--md-radius-normal</span> <span class="token punctuation">:</span> 8px\n<span class="token property">--md-radius-circle</span> <span class="token punctuation">:</span> 50%\n\n/// Border Size\n<span class="token property">--md-border-width-base</span> <span class="token punctuation">:</span> 2px\n\n/// Spacing size\n<span class="token property">--md-h-gap-xs</span> <span class="token punctuation">:</span> 8px\n<span class="token property">--md-h-gap-sm</span> <span class="token punctuation">:</span> 12px\n<span class="token property">--md-h-gap-md</span> <span class="token punctuation">:</span> 20px\n<span class="token property">--md-h-gap-lg</span> <span class="token punctuation">:</span> 32px\n<span class="token property">--md-h-gap-sl</span> <span class="token punctuation">:</span> 40px\n\n<span class="token property">--md-v-gap-xs</span> <span class="token punctuation">:</span> 8px\n<span class="token property">--md-v-gap-sm</span> <span class="token punctuation">:</span> 12px\n<span class="token property">--md-v-gap-md</span> <span class="token punctuation">:</span> 20px\n<span class="token property">--md-v-gap-lg</span> <span class="token punctuation">:</span> 32px\n<span class="token property">--md-v-gap-sl</span> <span class="token punctuation">:</span> 40px\n\n/// Transition\n<span class="token property">--md-ease-in-out-quint</span> <span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.86<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .07<span class="token punctuation">,</span> 1<span class="token punctuation">)</span>\n\n/// Opacity\n<span class="token property">--md-opacity-disabled</span> <span class="token punctuation">:</span> .3 // opacity of disabled button<span class="token punctuation">,</span> switch<span class="token punctuation">,</span> agree\n\n/// Font Family\n<span class="token property">--md-font-family-normal</span> <span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span><span class="token string">&quot;PingFang SC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">,</span>Arial<span class="token punctuation">,</span>sans-serif\n<span class="token property">--md-font-family-number</span> <span class="token punctuation">:</span> DINPro-Medium<span class="token punctuation">,</span> DIN Alternate<span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span><span class="token string">&quot;PingFang SC&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hiragino Sans GB&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">,</span>Arial<span class="token punctuation">,</span>sans-serif\n</code></pre></div><h4 id="组件变量"><a class="header-anchor" href="#组件变量" aria-hidden="true">#</a> 组件变量</h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可查看对应的组件代码获取</p></div><h2 id="高阶指南"><a class="header-anchor" href="#高阶指南" aria-hidden="true">#</a> 高阶指南</h2><p>目前的按需加载存在一定的问题，当存在复杂组件对简单组件引用时，可能无法正确加载其所需要的 <code>CSS</code> 文件。可以使用此 <code>vite-plugin</code> 增强：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> parse<span class="token punctuation">,</span> init <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;es-module-lexer&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> hyphenate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/shared&#39;</span>\n<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve<span class="token punctuation">,</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> transformImportVar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>\n<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">r</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token function-variable function">removeQuery</span> <span class="token operator">=</span> <span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\?.+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> injectCss <span class="token operator">=</span> <span class="token punctuation">(</span>\n  libraryName <span class="token operator">=</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">,</span>\n  resolveStyle<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> Plugin <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;inject-css&#39;</span><span class="token punctuation">,</span>\n    <span class="token keyword">async</span> <span class="token function">transform</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">await</span> init\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">removeQuery</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">[</span>imports<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>\n        <span class="token keyword">const</span> libImports <span class="token operator">=</span> imports\n          <span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>n <span class="token operator">===</span> libraryName<span class="token punctuation">)</span>\n\n        libImports<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lib<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">transformImportVar</span><span class="token punctuation">(</span>\n            code<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>lib<span class="token punctuation">.</span>ss<span class="token punctuation">,</span> lib<span class="token punctuation">.</span>se<span class="token punctuation">)</span>\n          <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>vars<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            code <span class="token operator">+=</span> <span class="token string">&#39;\\n&#39;</span>\n            code <span class="token operator">+=</span> <span class="token function">getDependenCompsCSS</span><span class="token punctuation">(</span>\n              vars<span class="token punctuation">,</span>\n              libraryName<span class="token punctuation">,</span>\n              resolveStyle\n            <span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">import &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        code<span class="token punctuation">,</span>\n        map<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getDependenCompsCSS</span><span class="token punctuation">(</span>\n  file<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  libName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  css<span class="token operator">:</span>\n    <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span>\n    <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;index.css&#39;</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> code <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>\n    <span class="token keyword">typeof</span> file <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>\n      <span class="token operator">?</span> <span class="token function">file</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token operator">:</span> <span class="token function">r</span><span class="token punctuation">(</span>\n          <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span>\n          libName<span class="token punctuation">,</span>\n          <span class="token string">&#39;dist/es&#39;</span><span class="token punctuation">,</span>\n          <span class="token function">hyphenate</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">,</span>\n          <span class="token string">&#39;index.js&#39;</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;utf8&#39;</span>\n  <span class="token punctuation">)</span>\n  <span class="token keyword">const</span> <span class="token constant">PATH_RE</span> <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.*\\/</span><span class="token regex-delimiter">/</span></span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>imports<span class="token punctuation">,</span> _<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> imports\n    <span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>n<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">PATH_RE</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token constant">PATH_RE</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>\n        <span class="token keyword">typeof</span> css <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>\n          <span class="token operator">?</span> <span class="token function">css</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n          <span class="token operator">:</span> <span class="token function">r</span><span class="token punctuation">(</span>\n              <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span>\n              libName<span class="token punctuation">,</span>\n              <span class="token string">&#39;dist/es&#39;</span><span class="token punctuation">,</span>\n              <span class="token function">hyphenate</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>\n              css <span class="token operator">??</span> <span class="token string">&#39;index.css&#39;</span>\n            <span class="token punctuation">)</span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n      <span class="token keyword">typeof</span> css <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>\n        <span class="token operator">?</span> <span class="token function">css</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n        <span class="token operator">:</span> <span class="token function">r</span><span class="token punctuation">(</span>\n            <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span>\n            libName<span class="token punctuation">,</span>\n            <span class="token string">&#39;dist/es&#39;</span><span class="token punctuation">,</span>\n            <span class="token function">hyphenate</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            css <span class="token operator">??</span> <span class="token string">&#39;index.css&#39;</span>\n          <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',38);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
