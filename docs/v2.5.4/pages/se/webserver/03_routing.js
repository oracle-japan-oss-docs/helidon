<doc-view>
<span title="免責事項: ここに記載されているドキュメントは、お客様の利便性のために翻訳ソフトウエアにより機械的に翻訳(機械翻訳)したものです。オリジナルの英語版もあわせてご確認ください。" style="width:150px;padding-left:5px;padding-right:5px;border:#ff0000 solid 1px;border-color: gray;font-size: small;color:gray;margin: 0 auto 0 auto;text-align:center;"><a href="https://docs.oracle.com/cd/E85181_01/mt_disclaimer.html" target="disclaimer">&nbsp;&nbsp;機械翻訳について&nbsp;&nbsp;</a></span>
 <v-layout row wrap> <v-flex xs12 sm10 lg10> <v-card class="section-def" v-bind:color="$store.state.currentColor"> <v-card-text class="pa-3"> <v-card class="section-def__card"> <v-card-text>
<dl>
<dt slot=title><span class="merged" id="all.1wf24k"  title="原文:: Routing">ルーティング</span></dt>
<dd slot="desc"><p><span class="merged" id="all.45ZZ2A.spl1" title="原文 : Routing lets you use request matching criteria to bind requests to a handler that implements your custom business logic.">ルーティングでは、リクエスト一致基準を使用して、カスタム・ビジネス・ロジックを実装する<code>handler</code>にリクエストをバインドできます。</span> <span class="merged" id="all.45ZZ2A.spl2" title="原文 : Matching criteria include one or more HTTP Method(s) and, optionally, a request path matcher.">一致基準には、1つ以上の<strong>「HTTPメソッド」</strong>と、オプションでリクエスト<strong>「パス・マッチャ」</strong>が含まれます。</span> <span class="merged" id="all.45ZZ2A.spl3" title="原文 : Use the RequestPredicate class to specify more routing criteria."><code>RequestPredicate</code>クラスを使用して、さらにルーティング基準を指定します。</span> </p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 id="_basics"><span class="merged" id="all.4MaJfC"  title="原文:: Basics">基本</span></h2>
<div class="section">
<p><span class="merged" id="all.1tTYGh" title="原文 : Routing also supports Error Routing which binds Java Throwable to the handling logic.">ルーティングでは、Java <code>Throwable</code>を処理ロジックにバインドする<em>「エラー・ルーティング」</em>もサポートされます。</span></p>

<p><span class="merged" id="all.2n3P0p" title="原文 : Configure HTTP request routing using Routing.Builder."><code>Routing.Builder</code>を使用してHTTPリクエストのルーティングを構成します。</span></p>

<markup
lang="java"
title="Using Routing.Builder to specify how HTTP requests are handled"
>Routing routing = Routing.builder()
                         .get("/hello", (req, res) -&gt; res.send("Hello World!")) <span class="conum" data-value="1" />
                         .build();

WebServer webServer = WebServer.create(routing); <span class="conum" data-value="2" /></markup>

<ul class="colist">
<li data-value="1"><span class="merged" id="all.1tb8Va.spl1" title="原文 : Handle all GETs to /hello path."><code>/hello</code>パスへのすべてのGETを処理します。</span> <span class="merged" id="all.1tb8Va.spl2" title="原文 : Send the Hello World! string."><code>Hello World!</code>文字列を送信します。</span> </li>
<li data-value="2"><span class="merged" id="all.1yZnB7" title="原文 : Add the routing to the WebServer."><code>routing</code>をWebServerに追加します。</span></li>
</ul>
</div>

<h2 id="_http_method_routing"><span class="merged" id="all.2Kbf2I" title="原文 : HTTP Method Routing">HTTPメソッドのルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.2cnHVC.spl1" title="原文 : Routing.Builder lets you specify how to handle each HTTP method."><code>Routing.Builder</code>では、各HTTPメソッドの処理方法を指定できます。</span> <span class="merged" id="all.2cnHVC.spl2"  title="原文:: For example:">次に例を示します。</span> </p>


<div class="table__overflow elevation-1  ">
<table class="datatable table">
<colgroup>
<col style="width: 16.667%;">
<col style="width: 83.333%;">
</colgroup>
<thead>
<tr>
<th><span class="merged" id="all.4IgSen"  title="原文:: HTTP Method">HTTPメソッド</span></th>
<th><span class="merged" id="all.31NidK" title="原文 : Routing.Builder example">Routing.Builderの例</span></th>
</tr>
</thead>
<tbody>
<tr>
<td class=""><span class="merged" id="all.175Cxq"  title="原文:: GET"><strong>GET</strong></span></td>
<td class=""><span class="merged" id="all.11yMwG"  title="原文: .get((req, res) -&gt; { /* handler */ })"><code>.get((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ISXfy"  title="原文:: PUT"><strong>PUT</strong></span></td>
<td class=""><span class="merged" id="all.xugZq"  title="原文: .put((req, res) -&gt; { /* handler */ })"><code>.put((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.28oayy"  title="原文:: POST"><strong>POST</strong></span></td>
<td class=""><span class="merged" id="all.3MCy8R"  title="原文: .post((req, res) -&gt; { /* handler */ })"><code>.post((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2xvfKC"  title="原文:: HEAD"><strong>HEAD</strong></span></td>
<td class=""><span class="merged" id="all.3LaEMG"  title="原文: .head((req, res) -&gt; { /* handler */ })"><code>.head((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.2u2Wss"  title="原文:: DELETE"><strong>DELETE</strong></span></td>
<td class=""><span class="merged" id="all.RVYUW"  title="原文: .delete((req, res) -&gt; { /* handler */ })"><code>.delete((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.1WJXZr"  title="原文:: TRACE"><strong>TRACE</strong></span></td>
<td class=""><span class="merged" id="all.4EH6gY"  title="原文: .trace((req, res) -&gt; { /* handler */ })"><code>.trace((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.LRlbP" title="原文 : OPTIONS"><strong>OPTIONS</strong></span></td>
<td class=""><span class="merged" id="all.2scTt7"  title="原文: .options((req, res) -&gt; { /* handler */ })"><code>.options((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.CL3XO" title="原文 : any method"><em>anyメソッド</em></span></td>
<td class=""><span class="merged" id="all.3f7hdG"  title="原文: .any((req, res) -&gt; { /* handler */ })"><code>.any((req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.t7aYC" title="原文 : multiple methods"><em>複数のメソッド</em></span></td>
<td class=""><span class="merged" id="all.4Xe0jz"  title="原文: .anyOf(List.of(Http.Method.GET, Http.Method.POST), (req, res) -&gt; { /* handler */ })"><code>.anyOf(List.of(Http.Method.GET, Http.Method.POST), (req, res) -> { /* handler */ })</code></span></td>
</tr>
<tr>
<td class=""><span class="merged" id="all.4ZaLp3" title="原文 : custom method"><em>カスタム・メソッド</em></span></td>
<td class=""><span class="merged" id="all.1jSIs3"  title="原文: .anyOf(Set.of(Http.RequestMethod.create(&quot;CUSTOM&quot;)), (req, res) -&gt; { /* handler */ })"><code>.anyOf(Set.of(Http.RequestMethod.create("CUSTOM")), (req, res) -> { /* handler */ })</code></span></td>
</tr>
</tbody>
</table>
</div>
</div>

<h2 id="_path_matcher_routing"><span class="merged" id="all.leyLp" title="原文 : Path Matcher Routing">パス・マッチャのルーティング</span></h2>
<div class="section">
<p><span class="merged" id="all.1PfD5C" title="原文 : You can combine HTTP method routing with request path matching.">HTTPメソッド・ルーティングをリクエスト・パス一致と組み合せることができます。</span></p>

<markup
lang="java"

>Routing.builder()
       .post("/some/path", (req, res) -&gt; { /* handler */ })</markup>

<p><span class="merged" id="all.2uUTyQ" title="原文 : You can use path pattern instead of path with the following syntax:">次の構文を使用して、<em>「パス」</em>のかわりに<strong>「パス・パターン」</strong>を使用できます:</span></p>

<ul class="ulist">
<li>
<p><span class="merged" id="all.3MZLn" title="原文 : /foo/bar/baz - Exact path match against resolved path even with non-usual characters"><code>/foo/bar/baz</code> - 通常以外の文字が含まれる場合でも、解決されたパスと完全に一致するパス</span></p>

</li>
<li>
<p><span class="merged" id="all.KZ6LM" title="原文 : /foo/{}/baz - {} Unnamed regular expression segment ([^/]+)"><code>/foo/{}/baz</code> - <code>{}</code>無名正規表現セグメント<code>([^/]+)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2Z8rD2" title="原文 : /foo/{var}/baz - Named regular expression segment ([^/]+)"><code>/foo/{var}/baz</code> - 名前付き正規表現セグメント<code>([^/]+)</code></span></p>

</li>
<li>
<p><span class="merged" id="all.2MjoB4" title="原文 : /foo/{var:\d+} - Named regular expression segment with a specified expression"><code>/foo/{var:\d+}</code> - 指定された式を持つ名前付き正規表現セグメント</span></p>

</li>
<li>
<p><span class="merged" id="all.2e1pBx" title="原文 : /foo/{:\d+} - Unnamed regular expression segment with a specified expression"><code>/foo/{:\d+}</code> - 指定された式を持つ名前のない正規表現セグメント</span></p>

</li>
<li>
<p><span class="merged" id="all.3sGWqn.spl1" title="原文 : /foo/{+var} - Convenience shortcut for {var:.+}."><code>/foo/{+var}</code> - {var:.+}の便利なショートカット。</span> <span class="merged" id="all.3sGWqn.spl2" title="原文 : A matcher is not a true URI template (as defined by RFC) but this convenience is in sync with the Apiary templates">マッチャは(RFCで定義されているように)真のURIテンプレートではありませんが、この利便性はApiaryテンプレートと同期しています</span> </p>

</li>
<li>
<p><span class="merged" id="all.4IIjcA" title="原文 : /foo/{+} - Convenience shortcut for unnamed segment with regular expression {:.+}"><code>/foo/{+}</code> - 正規表現 {:を使用した名前のないセグメントの便利なショートカット。+}</span></p>

</li>
<li>
<p><span class="merged" id="all.433CdN" title="原文 : /foo[/bar] - An optional block, which translates to the /foo(/bar)? regular expression"><code>/foo[/bar]</code> - <code>/foo(/bar)?</code>正規表現に変換されるオプションのブロック</span></p>

</li>
<li>
<p><span class="merged" id="all.2nVrgq" title="原文 : / or /foo - * Wildcard character can be matched with any number of characters."><code>/<strong></code>または<code>/foo</strong></code> - <code>*</code>ワイルドカード文字を任意の数の文字と照合できます。</span></p>

</li>
</ul>
<div class="admonition important">
<p class="admonition-inline"><span class="merged" id="all.3VYkSm.spl1" title="原文 : Path (matcher) routing is exact.">パス(正規表現エンジン)ルーティングは<strong>exact</strong>です。</span> <span class="merged" id="all.3VYkSm.spl2" title="原文 : For example, a /foo/bar request is not routed to .post(&apos;/foo&apos;, …​).">たとえば、<code>/foo/bar</code>リクエストは<code>.post('/foo', …​)</code>にルーティングされません。</span> </p>
</div>
<div class="admonition tip">
<p class="admonition-inline"><span class="merged" id="all.PYXfF" title="原文 : Always start path and path patterns with the / character."><em>「パス」</em>および<em>「パス・パターン」</em>は、常に<code>/</code>文字で始めます。</span></p>
</div>
</div>

<h2 id="anchor-requestpredicate"><span class="merged" id="all.3pH40u" title="原文 : Request Predicate">リクエスト述語</span></h2>
<div class="section">
<p><span class="merged" id="all.3V5exc.spl1" title="原文 : Use the RequestPredicate utility class to identify more criteria."><code>RequestPredicate</code>ユーティリティ・クラスを使用して、より多くの基準を識別します。</span> <span class="merged" id="all.3V5exc.spl2" title="原文 : You can construct (build) a predicate based on typical request criteria such as content type, or the existence of a header or cookie.">コンテンツ・タイプなどの一般的なリクエスト基準、またはヘッダーやCookieの存在に基づいて述語を構成(ビルド)できます。</span> <span class="merged" id="all.3V5exc.spl3" title="原文 : You can also construct a handler that only processes requests accepted by the predicate.">述語で受け入れられたリクエストのみを処理するハンドラを作成することもできます。</span> <span class="merged" id="all.3V5exc.spl4" title="原文 : All other requests are nexted, meaning that they are routed to the next valid handler.">その他のリクエストはすべて<em>nexted</em>になります。つまり、次の有効なハンドラにルーティングされます。</span> </p>

<markup
lang="java"

>.post("/foo",
      RequestPredicate.create()
                      .containsHeader("my-gr8-header")
                      .accepts(MediaType.TEXT_PLAIN)
                      .and(this::isUserAuthenticated)
                      .thenApply((req, resp) -&gt; {
                           // Some logic
                      })
                      .otherwise((req, resp) -&gt; { /* Otherwise logic */ }); // Optional. Default logic is req.next()</markup>

</div>

<h2 id="_organizing_code_into_services"><span class="merged" id="all.1rDPa2" title="原文 : Organizing Code into Services">コードのサービスへの編成</span></h2>
<div class="section">
<p><span class="merged" id="all.7rfNO" title="原文 : By implementing the Service interface you can organize your code into one or more services, each with its own path prefix and set of handlers."><code>Service</code>インタフェースを実装することで、コードを1つ以上のサービスに編成し、それぞれに独自のパス・プレフィクスとハンドラ・セットを指定できます。</span></p>

<markup
lang="java"
title="Use <code>Routing.Builder.register</code> to register your service"
>.register("/hello", new HelloService())</markup>

<markup
lang="java"
title="Service implementation"
>public class HelloService implements Service {
    @Override
    public void update(Routing.Rules rules) {
        rules.get("/subpath", this::getHandler);
    }

    private void getHandler(ServerRequest request,
                            ServerResponse response) {
        // Some logic
    }
}</markup>

<p><span class="merged" id="all.1s1yUC" title="原文 : In this example, the GET handler matches requests to /hello/subpath.">この例では、<code>GET</code>ハンドラはリクエストを<code>/hello/subpath</code>と照合します。</span></p>

</div>
</doc-view>
